export class Experience {
  id?: number;
  jobName: string;
  jobDescription: string;
  businessName: string;
  businessImg: string;
  location: string;
  countryLocation: string;
  workTime: string;
  workStart: Date;
  workEnd: Date;
  actualWork: boolean;

  constructor(
    jobName: string,
    jobDescription: string,
    businessName: string,
    businessImg: string,
    location: string,
    countryLocation: string,
    workTime: string,
    workStart: Date,
    workEnd: Date,
    actualWork: boolean
  ) {
    this.jobName = jobName;
    this.jobDescription = jobDescription;
    this.businessName = businessName;
    this.businessImg = businessImg;
    this.location = location;
    this.countryLocation = countryLocation;
    this.workTime = workTime;
    this.workStart = workStart;
    this.workEnd = workEnd;
    this.actualWork = actualWork;
  } 
}
