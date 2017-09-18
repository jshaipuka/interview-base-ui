import { Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ManageQuestionsComponent } from './manage-questions/manage-questions.component';
import { ManageQuestionDetailComponent } from './manage-question-detail/manage-question-detail.component';

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
          { path: '', component: UserDashboardComponent }
        ]
      }
    ]
  }
];
