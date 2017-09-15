import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

import { HttpModule } from '@angular/http';

import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';

import { CompanyService } from './services/company.service';
import { CompanyBoardComponent } from './company-board/company-board.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

import { RoleService } from './services/role.service';
import { RoleBoardComponent } from './role-board/role-board.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';

import { QuestionService } from './services/question.service';
import { QuestionBoardComponent } from './question-board/question-board.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyBoardComponent,
    CompanyDetailComponent,
    RoleBoardComponent,
    RoleDetailComponent,
    QuestionBoardComponent,
    QuestionDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    UserModule
  ],
  providers: [CompanyService, RoleService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
