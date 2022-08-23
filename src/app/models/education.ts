export class Education {
  id?: number;
  title: string;
  instituteName: string;
  instituteImg: string;
  eduStart: Date;
  eduEnd: Date;
  actualEdu: boolean;

  constructor(
    title: string,
    instituteName: string,
    instituteImg: string,
    eduStart: Date,
    eduEnd: Date,
    actualEdu: boolean
  ) {
    this.title = title;
    this.instituteName = instituteName;
    this.instituteImg = instituteImg;
    this.eduStart = eduStart;
    this.eduEnd = eduEnd;
    this.actualEdu = actualEdu;
  }
}
