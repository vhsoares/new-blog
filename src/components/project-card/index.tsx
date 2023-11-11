import { PiLinkLight } from "react-icons/pi";
import { ProjectType } from "@/repositories/projects/projects";
import styles from "./project-card.module.scss";
import Image from "next/image";

const ProjectCard = ({
  title,
  type,
  description,
  client,
  date,
  images,
  link,
}: ProjectType) => {
  return (
    <article className={styles.card}>
      <div className={styles.imagesCarousel}>
        <div className={styles.picture}>
          {images[0] != "" && (
            <Image
              src={images[0]}
              alt={`foto do projeto ${title}`}
              fill
              objectFit="contain"
              objectPosition="center"
            />
          )}
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.subtitle}>{type}</span>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          <span className={styles.tag}>{client}</span>
          <span className={styles.tag}>{date}</span>
        </div>
      </div>
      <a href={link} className={styles.action} target="_blank">
        Conheça o projeto <PiLinkLight style={{ marginLeft: "10px" }} />
      </a>
    </article>
  );
};

export default ProjectCard;
