import pt_experiences from "./pt-experiences.json";
import en_experiences from "./en-experiences.json";

type WorkExperience = {
  title: string;
  description: string;
  dateStart: string;
  dateEnd: string;
  companyName: string;
  companyImage: string;
  skills: Array<string>;
};

export default class Experiences {
  private workExperience: Array<WorkExperience>;

  constructor() {
    this.workExperience = [];
  }

  private addExperience(workExperience: WorkExperience) {
    this.workExperience.push(workExperience);
  }

  public generateExperiences(locale: "en" | "pt"): Array<WorkExperience> {
     locale == "pt" ? pt_experiences.map((experience) => {
          this.addExperience(experience);
        })
      : en_experiences.map((experience) => {
          this.addExperience(experience);
        });

    return this.workExperience;
  }
}
