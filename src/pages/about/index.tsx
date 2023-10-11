import { useTranslations } from "next-intl";
import ExperienceList from "../../components/experiences/experience-list";

import styles from "./about.module.scss";

export const getStaticProps = async (context: any) => {
  return {
    props: {
      locale: context.locale,
      messages: (await import(`@/languages/${context.locale}/index.json`))
        .default,
    },
  };
};

const About = ({ locale }: any) => {
  const t = useTranslations("About");

  return (
    <>
      <section className={styles.profile}>
        <div className={styles.profilePicture}>
          <img src="/profile.jpeg" alt="" />
        </div>
        <div className={styles.profileDescription}>
          <h2>
            {t("title")}
            <span> {t("name")}</span>
          </h2>
          <p>{t("me-now")}</p>
          <p>{t("me-thrive")}</p>
          <p>{t("me-interests")}</p>
        </div>
      </section>
      <ExperienceList locale={locale} />
    </>
  );
};

export default About;
