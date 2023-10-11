import { useTranslations } from "next-intl";

import styles from "./page.module.scss";
import Button from "@/components/layout/button/button";

export const getStaticProps = async (context: any) => {
  return {
    props: {
      locale: context.locale,
      messages: (await import(`@/languages/${context.locale}/index.json`))
        .default,
    },
  };
};

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.half}>
          <div className={styles.specialDivBorder}></div>
          <div className={styles.specialDivBorder}></div>
          <div className={styles.specialDivBorder}></div>
          <div className={styles.specialDivBorder}></div>
        </div>
        <div className={styles.half}>
          <h2>
            {t("title")} <span>{t("name")}</span>.
          </h2>
          <p>{t("content")}</p>

          <div className={styles.callout}>
            <Button href="projetos" title={t("my-project")}></Button>
            <Button href="blog" title={t("my-content")}></Button>
          </div>
        </div>
      </div>
    </main>
  );
}
