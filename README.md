# 現状
開発中。まだソース出せる状況にないのでREADMEだけ置いてます。

# Maohsuite

Maoh Suite はタイムラインをSlack風に表示することで、LTLのチャット化を促進するクライアントです。  
Electron製のアプリを予定。ただし、プライマリ開発ターゲットはmacOSです。

## 特長（予定）
* Slackのような画面構成
チャットと言ったらSlack。労働者達のMastdonと言えばLTLがチャット。
地味に、使ってるクライアント名が見れる･･･かもしれない。

* キーワード強調機能  
特定のキーワードを強調表示します。〜〜ブースター、〜〜エバンジェリストの人にぴったり

* 労働者達のMastdon以外への対応  
マルチホームな貴方へ。

* 特定のハッシュタグの抽出表示  
でも、みんなハッシュタグ使わないよね

* Directメッセージの独立表示  
DM、貰ったこと無いけど普通のWebUIだと気づかないよね。

## アプリケーション構成
Electron上にAnglarを使ったSPAアプリケーションを乗せただけになる予定。
じゃあ、Angular自体のサーバーで良いでは無いか･･･と言われるとその通りです。
アプリ化しないと色々面倒なのでアプリとしての体裁を detch up してます。

## LICENSE 
MIT Licence を予定。

# 以下・・・
自動生成された原文。そのまま動くとは限らないので後でリライトする。
Electron化する前はこの手順で動作可能。

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
