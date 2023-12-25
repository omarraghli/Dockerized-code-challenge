import { Component, Input } from '@angular/core';
import { UserDTO } from '../../interfaces/user-dto';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  @Input() user!: UserDTO[];

}
