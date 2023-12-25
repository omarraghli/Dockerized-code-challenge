import { Component } from '@angular/core';
import { UserDTO } from '../../interfaces/user-dto';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css'
})
export class UserSearchComponent {

  activeTab: string = 'Email'
  usercriteria: string = ""
  user: undefined | UserDTO

  constructor(private userService: UserService) { }

  switchTab(tab: string): void {
    this.activeTab = tab;
  }

  searchUser() {
    if (this.activeTab === "Email") {
      this.userService.getUserByEmail(this.usercriteria).subscribe(
        (user) => {
          this.user = user;
        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    }
    if (this.activeTab === "Username") {
      this.userService.getUserByUsername(this.usercriteria).subscribe(
        (user) => {
          this.user = user;
        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    }
  }
}
