import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagingRoutingModule } from './messaging-routing.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SharedModule } from '../shared/shared.module';

import { JoinComponent } from './join/join.component';
import { MessageComponent } from './message/message.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  imports: [
    CommonModule,
    MessagingRoutingModule,
    SocketIoModule.forRoot(config),
    SharedModule
  ],
  declarations: [
    JoinComponent,
    MessageComponent
  ],
  exports: [
    SharedModule
  ]
})
export class MessagingModule { }
