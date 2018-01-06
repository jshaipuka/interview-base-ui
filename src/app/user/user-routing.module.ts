import { Routes } from '@angular/router';

import { UserComponent } from './user.component';

import { ManageInterviewsComponent } from './manage-interviews/manage-interviews.component';
import { ManageInterviewDetailComponent } from './manage-interview-detail/manage-interview-detail.component';

import { ViewMode } from './view-mode.enum';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'interviews', component: ManageInterviewsComponent },
      { path: 'interviews/new', component: ManageInterviewDetailComponent, data: { viewMode: ViewMode.CREATE } },
      { path: 'interviews/:id', component: ManageInterviewDetailComponent, data: { viewMode: ViewMode.READ } },
      { path: 'interviews/:id/edit', component: ManageInterviewDetailComponent, data: { viewMode: ViewMode.WRITE } },
      { path: '', redirectTo: '/interviews', pathMatch: 'full' }
    ]
  }
];
