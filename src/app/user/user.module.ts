import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { routes } from './user-routing.module';

import { UserComponent } from './user.component';
import { ManageInterviewsComponent } from './manage-interviews/manage-interviews.component';
import { ManageInterviewDetailComponent } from './manage-interview-detail/manage-interview-detail.component';

@NgModule({
  declarations: [
    UserComponent,
    ManageInterviewsComponent,
    ManageInterviewDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
