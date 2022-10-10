import "./FormButton.css";

const FormButton = (props) => {

    return (
        <div className="button-wrapper">
            <input className="button" type="submit" value={props.label} />
        </div>
    )
}

export default FormButton;