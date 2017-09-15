import { Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';
import { ManageCompaniesComponent } from './manage-companies/manage-companies.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: UserComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'questions', component: ManageQuestionsComponent },
          { path: 'companies', component: ManageCompaniesComponent },
          { path: '', component: UserDashboardComponent }
        ]
      }
    ]
  }
];
