import {Component, OnInit, Input} from '@angular/core';
import {TootModel} from "../mastdon/toot.model";

@Component({
  selector: 'app-toot',
  templateUrl: './toot.component.html',
  styleUrls: ['./toot.component.css']
})
export class TootComponent implements OnInit {

  @Input() toot:TootModel;

  constructor() { }

  ngOnInit() {
  }

}
