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
      { path: '', component: ManageInterviewsComponent, pathMatch: 'full' },
      { path: 'new', component: ManageInterviewDetailComponent, data: { viewMode: ViewMode.CREATE } },
      { path: ':id', component: ManageInterviewDetailComponent, data: { viewMode: ViewMode.READ } },
      { path: ':id/edit', component: ManageInterviewDetailComponent, data: { viewMode: ViewMode.WRITE } },
    ]
  }
];
