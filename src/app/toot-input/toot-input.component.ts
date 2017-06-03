import {Component, Input, OnInit} from '@angular/core';
import {MastdonService} from "../main/mastdon.service";

@Component({
  selector: 'app-toot-input',
  templateUrl: './toot-input.component.html',
  styleUrls: ['./toot-input.component.css']
})
export class TootInputComponent implements OnInit {

  @Input() token:string;
  @Input() url:string;

  constructor(private donService: MastdonService) { }

  ngOnInit() {
  }

}
