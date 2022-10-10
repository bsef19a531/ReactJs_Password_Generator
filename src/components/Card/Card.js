import styles from "./Card.module.css";
import Form from "./../InputForm/InputForm"

const Card = (props) => {

    return (

        <div className={styles.card}>
            <h2>Generate Passwords</h2>
            <hr></hr>
            <Form />
        </div>
    )
}

export default Card;