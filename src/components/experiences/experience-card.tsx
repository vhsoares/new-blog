import styles from "./experience-card.module.scss";

type ExperienceCardProps = {
  title: string;
  description: string;
  dateStart: string;
  dateEnd: string;
  companyName: string;
  companyImage:string;
  skills: Array<string>;
};

const ExperienceCard = ({
  title,
  description,
  dateStart,
  dateEnd,
  companyName,
  companyImage,
  skills,
}: ExperienceCardProps) => {
  return (
    <article className={styles.experienceCard}>
      <div className={styles.infoContainer}>
        <div className={styles.company}>
          <img
            src={companyImage}
            className={styles.companyImage}
          />
        </div>
        <div>
          <h2>{title}</h2>
          <h3>{companyName}</h3>
          <div className={styles.dates}>
            <span>{dateStart}</span>
            <span>-</span>
            <span>{dateEnd}</span>
          </div>
          <p className={styles.description}>{description}</p>
          <div className={styles.tags}>
            {skills.map((skill) => (
              <span className={styles.tag} key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
