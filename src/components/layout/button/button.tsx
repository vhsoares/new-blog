import Link from "next/link";
import styles from "./button.module.scss";

const Button = (props: any) => {
  return (
    <>
      <button className={styles.button} {...props}>
        {props.title}
      </button>
    </>
  );
};

export default Button
