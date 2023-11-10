import Image from "next/image";
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
          <Image
            src={companyImage}
            className={styles.companyImage}
            alt={`logo do ${companyName}`}
            quality={90}
            width={70}
            height={60}

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
