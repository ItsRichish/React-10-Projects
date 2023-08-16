import styles from "./Button.module.css";

const Button = ({ text, icon, isOutline }) => {
  return (
    <button className={isOutline ? styles.outlineBtn : styles.primary}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
