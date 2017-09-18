import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

import { HttpModule } from '@angular/http';

import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';

import { QuestionService } from './services/question.service';
import { InterviewService } from './services/interview.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    UserModule
  ],
  providers: [QuestionService, InterviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
