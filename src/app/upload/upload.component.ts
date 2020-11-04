import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  private upLoadURL: string = "http://localhost:8383/users/upload";
  private files: FileList;
  showSuccess: boolean = false;;
  showError: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  uploadFile(): void {
    let res: Response;
    let formData = new FormData();
    formData.append('file', this.files.item(0), this.files.item(0).name);
    this.http.post<any>(this.upLoadURL, formData).subscribe(
      (res: Response) => {
        this.showSuccess = true;
        this.showError = false;
      },

      (err: Response) => {
        this.showError = true;
        this.showSuccess = false;
      }
    );
  }

  public setFiles(files: FileList) {
    this.files = files;
  }
}
