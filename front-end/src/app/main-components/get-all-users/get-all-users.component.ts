import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { UserDTO } from '../../interfaces/user-dto';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrl: './get-all-users.component.css'
})
export class GetAllUsersComponent implements OnInit {

  users: UserDTO[] = [];
  totalPages: number = 0;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchUsers();
    this.getTotalPages();
  }
  getTotalPages() {
    const page = 1; // Example page number
    const size = 10; // Example page size
    this.userService.getPaginatedUsersTotalPages(page, size).subscribe(
      (pages) => {
        this.totalPages = pages
      }
    );
  }

  fetchUsers(page: number = 0): void {
    const size = 10; // Example page size
    this.userService.getUsers(page, size).subscribe(
      (users) => {
        // Assign the retrieved users to the component property
        this.users = users;
        console.log('Users:', this.users);
      },
      (error) => {
        // Handle the error
        console.error('Error fetching users:', error);
      }
    );
  }

}
