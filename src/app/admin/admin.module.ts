import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberSectionComponent } from "./member-section/member-section.component";
import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    MemberSectionComponent,
    AdminComponent
  ],
  exports: [

  ]
})
export class AdminModule { }
