import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: User = new User('', '', '');

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.GetUsers().subscribe((user) => {
      this.user = user;
    });
  }
}
