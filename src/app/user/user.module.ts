import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { routes } from './user-routing.module';

import { ManageCompaniesComponent } from './manage-companies/manage-companies.component';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [ManageCompaniesComponent, ManageQuestionsComponent, UserDashboardComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
