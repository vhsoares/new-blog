import { useTranslations } from "next-intl";

import styles from "./page.module.scss";
import Button from "@/components/layout/button/button";
import { useRouter } from "next/router";

export const getStaticProps = async (context: any) => {
  return {
    props: {
      locale: context.locale,
      messages: (await import(`@/languages/${context.locale}/index.json`))
        .default,
    },
  };
};

const Error = () => {
  const t = useTranslations("404");
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <section className={styles.error404}>
      <h2>{t("title")}</h2>
      <p> {t("message")}</p>
      <Button onClick={() => goHome()} title={t("back")} style={{ margin: "40px auto" }} />
    </section>
  );
};

export default Error;
