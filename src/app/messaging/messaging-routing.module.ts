import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinComponent } from './join/join.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {
    path: 'join',
    component: JoinComponent
  },
  {
    path: 'message',
    component: MessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagingRoutingModule { }
