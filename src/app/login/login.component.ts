import {Component, OnInit} from '@angular/core';
import {Subject, Observable, Observer} from 'rxjs/Rx';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private isAuthCode: boolean = false;

  private clientInfo:ClientInfo;
  private url: string = "https://mstdn-workers.com/";

  private authcode: string;

  private isDone:boolean = false;

  // start -> authcode -> done
  private screen:string = 'start';

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.reset();
  }

  /** やり直すボタン */
  public reset() {
    this.isAuthCode = false;
    this.clientInfo = undefined;
    this.screen = 'start';
  }

  /** ログイン画面を表示 */
  public login(event: any) {
    console.log("login", this.url);

    var p = this.registerApp().then((client:ClientInfo) => {
      this.clientInfo = client;
      this.getAuthcode(client);
      this.isAuthCode = true; // 画面切替
      this.screen = 'authcode';

    }).catch((err) => {
      console.log('エラー: %s', err);
    });
  }

  /** Authcodeを使ってトークンを取得 */
  private auth(event: any) {
    console.log("auth", this.authcode);

    var data = new FormData();
    data.append('grant_type', 'authorization_code');
    data.append('redirect_uri', 'urn:ietf:wg:oauth:2.0:oob');
    data.append('scope', '"read write follow"');
    data.append('client_id', this.clientInfo.clientId);
    data.append('client_secret', this.clientInfo.clientSecret);
    data.append('code', this.authcode);

    var promise = fetch(this.url + 'oauth/token', {
      method: 'post',
      body: data
    }).then(function (response) {
      if (!response.ok) {
        Promise.reject("failed");
      }
      return response.json();
    }).then((ret) => {
      console.log(ret);
      localStorage.setItem('accessToken', ret['access_token']);
      localStorage.setItem('accessUrl', this.url);

      // this.router.navigate(["/main"]); 効いてくれない
      this.screen = 'done';
    }).catch(function (ex) {
      return ex;
    });

  }

  /**
   * アプリケーションの登録を行う.
   * @returns {Promise<R>|promise.Promise<R>|Observable<R|T>|Promise<U>|Maybe<T>}
   */
  private registerApp() {
    var data = new FormData();
    data.append('client_name', 'Maoh Suite');
    data.append('website', 'https://github.com/mstdn-workers/maohsuite/');
    data.append('redirect_uris', 'urn:ietf:wg:oauth:2.0:oob');
    data.append('scopes', 'read write follow');

    var promise = fetch(this.url + 'api/v1/apps', {
      method: 'post',
      body: data
    }).then(function (response) {
      if (!response.ok) {
        Promise.reject("failed");
      }
      return response.json();
    }).then(function (ret) {
      let client = new ClientInfo(ret["client_id"], ret["client_secret"]);
      return client;
    }).catch(function (ex) {
      return ex;
    });

    return promise;
  }

  private getAuthcode(client:ClientInfo) {
    var params = "client_id=" + client.clientId
                  + "&response_type=code"
                  + "&redirect_uri=urn:ietf:wg:oauth:2.0:oob"
                  + '&scopes="read write follow"';

    window.open(this.url + '/oauth/authorize?' + params);
  }

}

class ClientInfo {
  constructor(public clientId:string, public clientSecret:string) {}
}
