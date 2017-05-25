import {Component, OnInit, Input} from '@angular/core';
import {MastdonModule} from "../mastdon/mastdon.module";
import {MastdonService} from "../main/mastdon.service";
import {TootModel} from "../mastdon/toot.model";

@Component({
  selector: 'app-toot-pane',
  templateUrl: './toot-pane.component.html',
  styleUrls: ['./toot-pane.component.css'],
  providers: []
})
export class TootPaneComponent implements OnInit {

  @Input() token:string;
  @Input() url:string;

  constructor(private donService: MastdonService) { }

  private messages:Array<TootModel> = new Array<TootModel>();

  ngOnInit(): void {
    console.log('TootPaneComponent ', this.url, this.token);

    this.donService.connect(this.token, this.url).subscribe(msg => {
      // console.log("MESSAGE", msg);

      // deleteとか実装必要
      if (msg["event"] == "update") {
        // console.log("PAYLOAD", msg["payload"]);
        var payload = JSON.parse(msg["payload"]);

        this.messages.push(new TootModel(
          payload.account.account_name,
          payload.account.display_name,
          payload.account.avatar,
          payload.content,
          false,
        ));
      } else {
        console.log(msg["event"]);
      }

    });
  }

}
