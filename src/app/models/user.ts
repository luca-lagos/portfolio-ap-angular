export class User {
  id?: string;
  name: string;
  lastname: string;
  profession: string;
  location: string;
  countryLocation: string;
  userProfileImg: string;
  userBackgroundImg: string;

  constructor(
    name: string,
    lastname: string,
    profession: string,
    location: string,
    countryLocation: string,
    userProfileImg: string,
    userBackgroundImg: string
  ) {
    this.name = name;
    this.lastname = lastname;
    this.profession = profession;
    this.location = location;
    this.countryLocation = countryLocation;
    this.userProfileImg = userProfileImg;
    this.userBackgroundImg = userBackgroundImg;
  }
}
