import { Component, OnInit } from '@angular/core';
import { users, User} from '../../../interface/form-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = users;
  selectedUser: User;
  constructor() { }

  ngOnInit() {
  }

  select(user) {
    this.selectedUser = user;
  }

}
