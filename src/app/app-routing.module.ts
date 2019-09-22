import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'page',
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  },
  {
    path: 'messaging',
    loadChildren: () => import('./messaging/messaging.module').then(m => m.MessagingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
