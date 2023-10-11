import styles from './textarea.module.scss'

const TextArea = ({label, inputProps}: any) => {
  return (<div className={styles.inputGroup}>
    <label className={styles.label}>{label}</label>
    <textarea className={styles.textarea} />
  </div>)
}

export default TextArea