import { useState } from "react";

import generatePassword from "../generatePassword/generatePassword.js";

//import FormGroup from "./../FormGroup/FormGroup.js";
import FormButton from "./../FormButton/FormButton.js";
import "./InputForm.css";

const InputForm = () => {

    let [copiedMsgState, setCopiedMsgState] = useState({ copied: false, copiedMsg: "" })

    let [errorState, setErrorState] = useState({ error: false, errorMsg: "" });

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

        event.preventDefault();
        if (document.getElementById('numberField').value === '') {

            setCopiedMsgState({ ...copiedMsgState, copied: false });
            setErrorState({
                error: true, errorMsg: "Set Password Length First"
            });
        }
        else {
            const passwordString = generatePassword(event, state);
            if (passwordString === "") {
                setCopiedMsgState({ ...copiedMsgState, copied: false });
                setErrorState({
                    error: true, errorMsg: "Check Atleast 1 CheckBox"
                }
                );

            }
            else {
                setErrorState({ ...errorState, error: false });
                setState({ ...state, generatedPassword: passwordString });
            }
        }
    }

    const clearCopiedNotification = () => {
        setCopiedMsgState({ ...setCopiedMsgState, copied: false });
    }

    const copyToClipboard = () => {
        let copyText = document.getElementById('passwordText');
        if (copyText.value !== "") {
            copyText.select();
            copyText.setSelectionRange(0, 21); // For mobile devices
            // Copy the text inside the text field
            navigator.clipboard.writeText(copyText.value);
            setErrorState({ ...errorState, error: false });
            setCopiedMsgState({ copied: true, copiedMsg: "Password Copied ✔" });

            setTimeout(clearCopiedNotification, 4000);
        }



    }


    return (
        <>
            <form onSubmit={wrapperPasswordGenerator}>

                <div className="input-group mb-4">
                    <span className="input-group-text">Password</span>
                    <input id="passwordText" type="text" className="form-control" placeholder="@ Generated Password" value={state.generatedPassword} onChange={updateState} name="generatedPassword" disabled={true} />
                    <button type="button" id="clipboard" className="input-group-text" onClick={copyToClipboard}>
                        <i className="fa fa-clipboard" aria-hidden="true">
                            {copiedMsgState.copied ? <span id="tick-badge" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                <i className="fa-light fa-check"></i>
                                <span className="visually-hidden">unread messages</span>
                            </span> : false}
                        </i>
                    </button>
                </div>

                <div className="input-group mb-2">
                    <input id="numberField" type="number" className="form-control" placeholder="Enter Password Length" min="4" max="20" value={state.passwordLength} onChange={updateState} name="passwordLength" />
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

                {errorState.error ? <span className="badge bg-danger">{errorState.errorMsg}</span> : false}

                {copiedMsgState.copied ? <span className="badge bg-success">{copiedMsgState.copiedMsg}</span> : false}

            </form >
        </>
    )
}

export default InputForm;