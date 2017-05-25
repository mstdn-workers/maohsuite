import { Component, OnInit } from '@angular/core';
import { MastdonService } from './mastdon.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private url:string;
  private token:string;

  ngOnInit() {
    this.url = localStorage.getItem("accessUrl");
    this.token = localStorage.getItem("accessToken");
    console.log('MainComponent ', this.url, this.token);
  }

}
