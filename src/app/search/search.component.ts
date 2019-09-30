import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  userName: string;
  detailsObject;
  showLoader = false;
  click = false;
  private baseUrl = `https://api.github.com/users/`;

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  ngOnInit() {
  }
  getData() {
    if (localStorage.getItem(this.userName)) {
      this.click = true;
      this.showLoader = true;
      this.detailsObject = JSON.parse(localStorage.getItem(this.userName));
      this.showLoader = false;
      console.log(this.detailsObject);
    } else {
      this.showLoader = true;
      this.httpClient.get(this.baseUrl + this.userName + '?access_token=8178ed6c2f96ca42a86783caf4e7f876f56fafad').subscribe(
        response => {
        this.detailsObject = response;
        localStorage.setItem(this.userName, JSON.stringify(this.detailsObject));
        console.log('www');
        },
        error => {
          this.snackBar.open('invalid user ID', 'Close', {
            duration: 2000,
          });
        },
        () => {
          this.showLoader = false;
        });
    }
  }
}
