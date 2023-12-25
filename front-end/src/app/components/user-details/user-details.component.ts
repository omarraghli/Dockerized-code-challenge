import { Component, Input } from '@angular/core';
import { UserDTO } from '../../interfaces/user-dto';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  @Input() currentUser!: UserDTO;
}
