import styles from "./Form.module.css";
import Button from "../Button/Button";
import { AiOutlineMessage, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onCall = () => {
    console.log("I am from call");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log("name", event.target[0].value);
    // console.log("email", event.target[1].value);
    // console.log("text", event.target[2].value);
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log(name);
  };

  return (
    <div className={`container ${styles.form}`}>
      <div className={styles.contactForm}>
        <div className={styles.topBtn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<AiOutlineMessage fontSize="24px" />}
          />
          <Button
            text="VIA CALL"
            icon={<AiFillPhone fontSize="24px" onClick={onCall} />}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FROM"
          icon={<AiOutlineMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="name">Text</label>
            <textarea name="name" rows={8} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
        </form>
      </div>
      <div className={styles.contactImg}>
        <img src="/images/service.svg" alt="" />
      </div>
    </div>
  );
};

export default Form;
