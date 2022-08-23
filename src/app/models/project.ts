export class Project {
  id?: number;
  title: string;
  description: string;
  linkWeb: string;
  projectStart: Date;
  projectEnd: Date;
  actualProject: boolean;

  constructor(
    title: string,
    description: string,
    linkWeb: string,
    projectStart: Date,
    projectEnd: Date,
    actualProject: boolean
  ) {
    this.title = title;
    this.description = description;
    this.linkWeb = linkWeb;
    this.projectStart = projectStart;
    this.projectEnd = projectEnd;
    this.actualProject = actualProject;
  }
}
