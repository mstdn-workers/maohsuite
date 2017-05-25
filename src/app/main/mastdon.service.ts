import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {WebSocketService} from './web-socket.service';

@Injectable()
export class MastdonService {

  private messages: Subject<string>;

  constructor(private ws: WebSocketService) {
  }

  /**
   * websocket接続
   * @returns {Subject<Object>}
   */
  connect(token: string, url: string): Subject<string> {
    console.dir("WebSocketService connect()");

    // https://github.com/tootsuite/mastodon/blob/master/streaming/index.js#L376
    // stream: public = 連合TL , user = Home public:local = LTL
    var sockUrl = url + '/api/v1/streaming/?access_token=' + token + '&stream=public:local';
    sockUrl = sockUrl.replace(/^https:/,"wss:");
    console.log(sockUrl);

    return this.messages = <Subject<Object>>this.ws
      .connect(sockUrl)
      .map((response: MessageEvent): Object => {
        const data = JSON.parse(response.data) as Object;
        return data;
      });
  }
/*
  send(name: string, message: string): void { // -- ③ メッセージの送信要求をがあったときは、WebSocketService の `next` メソッドを呼んでいるだけです
    this.messages.next(this.createMessage(name, message));
  }

  private createMessage(name: string, message: string): ChatMessage {
    return new ChatMessage(name, message, false);
  }
*/
  // 接続イベント
  private onOpen(event) {
    var payload = this.createSystemMessage("接続しました。");
    this.publish(payload);
  }

  // メッセージ受信イベント
  private onMessage(event) {
    if (event && event.data) {

      var data = JSON.parse(event.data);
      if (data.event == "update") {
        var payload = JSON.parse(data.payload);

        this.publish(payload);

        // for (var i = 0; payload.length; i++) {
        // 	var toot = payload[i];
        // 	console.log(toot);
        // 	chat(toot.message);
        // }
      } else if (data.event == "delete") {
        console.log("delete not supported");
      }
      // chat(event.data);
    }
  }

  // エラーイベント
  private onError(event) {
    //chat("エラーが発生しました。");
  }

  // 切断イベント
  private onClose(event) {
    var payload = this.createSystemMessage("切断しました。再接続を試みます。(" + event.code + ")")
    this.publish(payload);
    setTimeout("open()", 3000);
  }

  /**
   * システムメッセージ用のオブジェクトを生成
   */
  private createSystemMessage(message: string) {
    var account = new Object();
    account["avatar"] = "";
    account["display_name"] = "CLIENT";

    var obj = new Object();
    obj["account"] = account;
    obj["content"] = message;

    return obj;
  }

  private publish(payload) {
    console.log(payload);
  }

}
