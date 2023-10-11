import ExperienceCard from "./experience-card";
import Experiences from "./experiences";
import styles from "./experiences.module.scss";

const ExperienceList = ({ locale }: { locale: "en" | "pt" }) => {
  const experiences = new Experiences().generateExperiences(locale)
  return (
    <section className={styles.container}>
      {experiences.map((experience: any) => (
        <ExperienceCard
          title={experience.title}
          description={experience.description}
          dateStart={experience.dateStart}
          dateEnd={experience.dateEnd}
          companyName={experience.companyName}
          companyImage={experience.companyImage}
          skills={experience.skills}
          key={experience.companyName}
        />
      ))}
    </section>
  );
};

export default ExperienceList
