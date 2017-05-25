import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSocketService } from '../main/web-socket.service';

import { TootPaneComponent } from '../toot-pane/toot-pane.component';
import { MenuPaneComponent } from '../menu-pane/menu-pane.component';
import { UserPaneComponent } from '../user-pane/user-pane.component';
import { TootComponent } from '../toot/toot.component';
import { MainComponent } from '../main/main.component';
import {MastdonService} from "../main/mastdon.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TootPaneComponent,
    MenuPaneComponent,
    UserPaneComponent,
    TootComponent,
    MainComponent,
  ],
  providers: [
    WebSocketService,
    MastdonService
  ]
})
export class MastdonModule { }
