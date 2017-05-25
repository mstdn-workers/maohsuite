import {Injectable} from '@angular/core';
import {Subject, Observable, Observer} from 'rxjs/Rx';

/**
 * based on ...
 * http://dev.classmethod.jp/client-side/angular-rxjs-websocket-chat/
 */
@Injectable()
export class WebSocketService {

  private subject: Subject<MessageEvent>;   // -- ① WebSocket接続時に返す Subject

  connect(url: string): Subject<MessageEvent> {   // -- ②  このメソッドを呼び出して Subject を手に入れます
    console.dir("WebSocketService connect()");
    if (!this.subject) {
      this.subject = this.create(url);
    }
    return this.subject;
  }

  private create(url: string): Subject<MessageEvent> {
    const ws = new WebSocket(url);　　// -- ③ WebSocket オブジェクトを生成します

    const observable = Observable.create((obs: Observer<MessageEvent>) => { // -- ④ Observable オブジェクトを生成します
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);

      return ws.close.bind(ws);
    });

    const observer = {    // -- ⑤ Observer オブジェクトを生成します
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      },
    };
    return Subject.create(observer, observable);    // -- ⑥ Subject を生成してconnect
  }
}
