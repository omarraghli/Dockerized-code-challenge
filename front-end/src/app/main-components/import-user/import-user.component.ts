import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { ImportSummaryDTO } from '../../interfaces/import-summart-dto';

@Component({
  selector: 'app-import-user',
  templateUrl: './import-user.component.html',
  styleUrl: './import-user.component.css'
})
export class ImportUserComponent {

  selectedFile: File | null = null;
  importSummary ?: ImportSummaryDTO= undefined;
  uploading: boolean = false;

  constructor(private userService: UserService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  uploadFile() {
    if (this.selectedFile) {
      this.uploading = true; // Set uploading state to true

      this.userService.uploadUserFile(this.selectedFile).subscribe(
        (response) => {
          this.importSummary = response;
          console.log('File uploaded successfully!', this.importSummary);
          // Handle success, if needed
        },
        (error) => {
          console.error('Error uploading file:', error);
          // Handle error, if needed
        }
      ).add(() => {
        this.uploading = false; // Set uploading state to false when the request is complete
      });
    } else {
      console.warn('No file selected');
    }
  }

}
