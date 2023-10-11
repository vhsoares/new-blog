import TextInput from "./input/input";
import styles from "./modal.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import TextArea from "./textarea/textarea";
import { useTranslations } from "next-intl";

type ModalType = {closeModal: Function}

const Modal = ({closeModal}: ModalType) => {
  const t = useTranslations("Modal")


  return (
    <>
      <div className={styles.mask} onClick={() => closeModal()}></div>
      <div className={styles.modal}>
        <h1 className={styles.title}>{t("title")}</h1>
        <button className={styles.transparentButton} onClick={() => closeModal()}>
          <AiOutlineClose />
        </button>

        <div className={styles.container}>
          <TextInput label={t("name")} />
          <TextInput label={t("email")} inputProps={{
            type: "email"
          }}/>
          <TextArea label={t("message")} />

          <button className={styles.button}>{t("send")}</button>
          <a href="https://wa.me/5551999012309" className={styles.whatsapp}>
            {t('whatsapp')}
          </a>
        </div>
      </div>
    </>
  );
};

export default Modal;
