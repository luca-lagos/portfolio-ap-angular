export class User {
  id?: number;
  name: string;
  lastname: string;
  profile_img: string;

  constructor(name: string, lastname: string, profile_img: string) {
    this.name = name;
    this.lastname = lastname;
    this.profile_img = profile_img;
  }
}
