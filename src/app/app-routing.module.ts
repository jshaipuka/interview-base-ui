import { Routes } from '@angular/router';

import { CompanyBoardComponent } from './company-board/company-board.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

import { RoleBoardComponent } from './role-board/role-board.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';

import { QuestionBoardComponent } from './question-board/question-board.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

export const routes: Routes = [
  { path: '', component: QuestionBoardComponent, pathMatch: 'full' },
  { path: 'questions', component: QuestionBoardComponent },
  { path: 'questions/:id', component: QuestionDetailComponent },
  { path: 'roles', component: RoleBoardComponent },
  { path: 'roles/:id', component: RoleDetailComponent },
  { path: 'companies', component: CompanyBoardComponent },
  { path: 'companies/:id', component: CompanyDetailComponent }
];
