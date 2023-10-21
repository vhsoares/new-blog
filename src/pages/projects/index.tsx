import ProjectsRepository, {
  ProjectType,
} from "@/repositories/projects/projects";
import styles from "./projects.module.scss";

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
        <img src="http://place-hold.it/350x200" />
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
    </article>
  );
};

export const getStaticProps = async (context: any) => {
  return {
    props: {
      locale: context.locale,
      messages: (await import(`@/languages/${context.locale}/index.json`))
        .default,
    },
  };
};

const Projects = ({ locale }: any) => {
  const projects = new ProjectsRepository().generateProjects(locale);

  return (
    <div className={styles.myProjects}>
      <section>
        <h1 className={styles.mainTitle}>Meus Projetos</h1>
        <p className={styles.mainDescription}>
          Os projetos mostrados aqui são projetos que eu tive uma grande
          participação em seu desenvolvimento e publicação, assim como
          manutenção e correção de erros.
        </p>
      </section>
      <section>
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
