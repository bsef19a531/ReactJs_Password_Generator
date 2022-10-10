import { useState } from "react";

import generatePassword from "../generatePassword/generatePassword.js";

//import FormGroup from "./../FormGroup/FormGroup.js";
import FormButton from "./../FormButton/FormButton.js";
import "./InputForm.css";

const InputForm = () => {

    let [state, setState] = useState({
        generatedPassword: '', passwordLength: '', symbols: false, numbers: false, capital: false, small: false
    });

    const updateState = (event) => {
        setState({
            ...state, [event.target.name]: event.target.value
        })
    }

    const updateCheck = (event) => {
        setState({
            ...state, [event.target.name]: event.target.checked
        })
    }

    const wrapperPasswordGenerator = (event) => {
        const passwordString = generatePassword(event, state);
        if (passwordString == null) {

        }
        else {
            setState({ ...state, generatedPassword: passwordString });
        }
    }

    const copyToClipboard = () => {
        let copyText = document.getElementById('passwordText');
        copyText.select();
        copyText.setSelectionRange(0, 21); // For mobile devices
        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

    }

    return (
        <>
            <form onSubmit={wrapperPasswordGenerator}>

                <div className="input-group mb-4">
                    <span className="input-group-text">Password</span>
                    <input id="passwordText" type="text" className="form-control" placeholder="@ Generated Password" value={state.generatedPassword} onChange={updateState} name="generatedPassword" />
                    <button type="button" id="clipboard" className="input-group-text">
                        <i className="fa fa-clipboard" aria-hidden="true" onClick={copyToClipboard}></i>
                    </button>
                </div>

                <div className="input-group mb-2">
                    <input type="number" className="form-control" placeholder="Enter Password Length" min="4" max="20" value={state.passwordLength} onChange={updateState} name="passwordLength" required={true} />
                    <span className="input-group-text" >Length</span>
                </div>

                <div className="input-group mb-2">
                    <span className="input-group-text" >
                        <input type="checkbox" className="form-check-input" onChange={updateCheck} name="symbols" />
                    </span>
                    <input type="text" className="form-control" placeholder="Include Symbols" disabled={true} />
                </div>

                <div className="input-group mb-2">
                    <span className="input-group-text" >
                        <input type="checkbox" className="form-check-input" onChange={updateCheck} name="numbers" />
                    </span>
                    <input type="text" className="form-control" placeholder="Include Numbers" disabled={true} />
                </div>

                <div className="input-group mb-2">
                    <span className="input-group-text" >
                        <input type="checkbox" className="form-check-input" onChange={updateCheck} name="capital" />
                    </span>
                    <input type="text" className="form-control" placeholder="Include Capital Alphabets" disabled={true} />
                </div>

                <div className="input-group mb-2">
                    <span className="input-group-text" >
                        <input type="checkbox" className="form-check-input" onChange={updateCheck} name="small" />
                    </span>
                    <input type="text" className="form-control" placeholder="Include Small Alphabets" disabled={true} />
                </div>

                {/* <FormGroup label="Include Symbols" />

            <FormGroup label="Include Numbers" />

            <FormGroup label="Include Capital Alphabets" />

            <FormGroup label="Include Small Alphabets" /> */}

                <FormButton label="Generate" />

            </form>
        </>
    )
}

export default InputForm;