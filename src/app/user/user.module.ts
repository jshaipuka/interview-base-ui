import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { routes } from './user-routing.module';

import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user.component';
import { ManageQuestionDetailComponent } from './manage-question-detail/manage-question-detail.component';

@NgModule({
  declarations: [
    ManageQuestionsComponent,
    UserDashboardComponent,
    UserComponent,
    ManageQuestionDetailComponent,
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
