import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../../interfaces/user-dto';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrl: './my-page.component.css'
})
export class MyPageComponent implements OnInit {

  currentUser!: UserDTO;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getMyUser().subscribe(
      (user) => {
        this.currentUser = user;
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }

}
