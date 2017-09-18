import { Routes } from '@angular/router';

import { QuestionBoardComponent } from './question-board/question-board.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

export const routes: Routes = [
  { path: '', component: QuestionBoardComponent, pathMatch: 'full' },
  { path: 'questions', component: QuestionBoardComponent },
  { path: 'questions/:id', component: QuestionDetailComponent }
];
