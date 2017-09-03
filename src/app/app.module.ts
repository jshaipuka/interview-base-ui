import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompanyService } from './company.service';
import { CompanyBoardComponent } from './company-board/company-board.component';
import { CompanySingleComponent } from './company-single/company-single.component';
import { RoleBoardComponent } from './role-board/role-board.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { QuestionBoardComponent } from './question-board/question-board.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyBoardComponent,
    CompanySingleComponent,
    RoleBoardComponent,
    RoleDetailComponent,
    QuestionBoardComponent,
    QuestionDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
