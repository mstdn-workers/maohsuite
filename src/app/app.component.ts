import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
// import { Beer } from './beer/beer.model';
// import { BeerService } from "./beer/beer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works! nice work!';
  isNice = false;

  constructor(private router:Router) {
  }

  ngOnInit() {
    console.log('start');
    var token = localStorage.getItem('accessToken');
    var url = localStorage.getItem('accessUrl');

    console.log('AppComponent ', url, token);

    if (!token || !url) {
      this.router.navigate(["/login"]);
    } else {
      this.router.navigate(["/main"]);
    }
  }

  onNice(event) {
    this.isNice = !this.isNice;
  }
}
