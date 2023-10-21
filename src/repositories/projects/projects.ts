import pt_projects from "./pt-projects.json"
import en_projects from "./en-projects.json"

export type ProjectType = {
  title: string;
  type: string;
  description: string;
  client: string;
  date: string;
  images: Array<string>;
  link: string;
}

export default class ProjectsRepository {
  private projectList: Array<ProjectType>;

  constructor() {
    this.projectList = [];
  }

  private addExperience(project: ProjectType) {
    this.projectList.push(project);
  }

  public generateProjects(locale: "en" | "pt"): Array<ProjectType> {
     locale == "pt" ? pt_projects.map((projects) => {
          this.addExperience(projects);
        })
      : en_projects.map((projects) => {
          this.addExperience(projects);
        });

    return this.projectList;
  }
}
