import ProjectsRepository from "@/repositories/projects/projects";
import styles from "./projects.module.scss";
import { useTranslations } from "next-intl";
import ProjectCard from "@/components/project-card";

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
  const t = useTranslations("Projects");

  return (
    <div className={styles.myProjects}>
      <section>
        <h1 className={styles.mainTitle}>{t("title")}</h1>
        <p className={styles.mainDescription}>{t("subtitle")}</p>
      </section>
      <section>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
