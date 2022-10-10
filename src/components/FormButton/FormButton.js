import "./FormButton.css";

const FormButton = (props) => {

    return (
        <div className="mt-4">
            <input className="button" type="submit" value={props.label} />
        </div>
    )
}

export default FormButton;