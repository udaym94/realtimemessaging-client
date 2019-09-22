import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagingRoutingModule } from './messaging-routing.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SharedModule } from '../shared/shared.module';

const config: SocketIoConfig = { url: 'http://localhost:4200', options: {} };

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MessagingRoutingModule,
    SocketIoModule.forRoot(config),
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class MessagingModule { }
