import { Routes } from '@angular/router';

import { UserComponent } from './user.component';

import { ManageInterviewsComponent } from './manage-interviews/manage-interviews.component';
import { ManageInterviewDetailComponent } from './manage-interview-detail/manage-interview-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'interviews', component: ManageInterviewsComponent },
      { path: 'interviews/new', component: ManageInterviewDetailComponent, data: { mode: 'new' } },
      { path: 'interviews/:id', component: ManageInterviewDetailComponent, data: { mode: 'read' } },
      { path: 'interviews/:id/edit', component: ManageInterviewDetailComponent, data: { mode: 'edit' } },
      { path: '', component: ManageInterviewsComponent }
    ]
  }
];
