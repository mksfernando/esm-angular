import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  minSalary: number;
  maxSalary: number;
  offset: number = 0;
  limit: number = 30;
  sortProp: string = "+name";
  users: User[] = [];

  sortField: string = "id";
  sortOrder: boolean = false;
  page: number = 1;
  showError: boolean = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  public search() {
    this.http.get(this.constructURL()).subscribe(
      (res: any) => {
        this.users = res;
        this.showError = false;
      },

      (err: Response) => {
        this.showError = true;
      }
    );
  }


  private constructURL(): string {
    let url = "http://localhost:8383/users?"
      + "minSalary=" + this.minSalary
      + "&maxSalary=" + this.maxSalary
      + "&offset=" + this.offset
      + "&limit=" + this.limit
      + "&sort=" + encodeURIComponent(this.sortProp)

    console.log(url);
    return url;
  }

  sort(field: string): void {
    this.sortField = field;
    this.sortOrder = !this.sortOrder;
  }
}
