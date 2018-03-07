import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

const routes = [
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: 'user', loadChildren: './user/user.module#UserModule'}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
