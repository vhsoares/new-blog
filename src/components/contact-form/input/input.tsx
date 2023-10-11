import styles from "./input.module.scss";

const TextInput = ({ label, inputProps }: any) => {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} {...inputProps} />
    </div>
  );
};

export default TextInput;
