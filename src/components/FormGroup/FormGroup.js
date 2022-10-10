const FormGroup = (props) => {
    return (
        <div className="input-group mb-2">
            <span className="input-group-text" >
                <input type="checkbox" className="form-check-input" />
            </span>
            <input type="text" className="form-control" placeholder={props.label} disabled={true} />
        </div>
    )
}

export default FormGroup;