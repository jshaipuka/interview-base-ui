import { Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';
import { ManageQuestionDetailComponent } from './manage-question-detail/manage-question-detail.component';
import { ManageCompaniesComponent } from './manage-companies/manage-companies.component';
import { ManageCompanyDetailComponent } from './manage-company-detail/manage-company-detail.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: UserComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'questions', component: ManageQuestionsComponent },
          { path: 'questions/new', component: ManageQuestionDetailComponent, data: { mode: 'new' } },
          { path: 'questions/:id', component: ManageQuestionDetailComponent, data: { mode: 'read' } },
          { path: 'questions/:id/edit', component: ManageQuestionDetailComponent, data: { mode: 'edit' } },
          { path: 'companies', component: ManageCompaniesComponent },
          { path: 'companies/new', component: ManageCompanyDetailComponent, data: { mode: 'new' } },
          { path: 'companies/:id', component: ManageCompanyDetailComponent, data: { mode: 'read' } },
          { path: 'companies/:id/edit', component: ManageCompanyDetailComponent, data: { mode: 'edit' } },
          { path: '', component: UserDashboardComponent }
        ]
      }
    ]
  }
];
