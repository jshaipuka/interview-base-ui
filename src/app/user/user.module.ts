import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { routes } from './user-routing.module';

import { ManageCompaniesComponent } from './manage-companies/manage-companies.component';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user.component';
import { ManageQuestionDetailComponent } from './manage-question-detail/manage-question-detail.component';
import { ManageCompanyDetailComponent } from './manage-company-detail/manage-company-detail.component';

@NgModule({
  declarations: [
    ManageCompaniesComponent,
    ManageQuestionsComponent,
    UserDashboardComponent,
    UserComponent,
    ManageQuestionDetailComponent,
    ManageCompanyDetailComponent
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
