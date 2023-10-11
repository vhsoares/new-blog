import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./language-toggler.module.scss";

const languages = {
  pt: {
    title: "PT",
    locale: "pt",
  },
  en: {
    title: "EN",
    locale: "en",
  },
};

const LanguageToggler = () => {
  const { asPath, locale } = useRouter();

  return (
    <div className={styles.localeSelector}>
      {Object.entries(languages).map(([_, language]) => (
        <Link
          href={asPath}
          locale={language.locale}
          className={
            language.locale == locale ? styles.activeLocale : styles.localeLink
          }
          key={language.locale}
        >
          {language.title}
        </Link>
      ))}
    </div>
  );
};

export default LanguageToggler;
