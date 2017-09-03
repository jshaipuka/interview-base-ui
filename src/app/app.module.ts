import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompanyService } from './company.service';
import { CompanyBoardComponent } from './company-board/company-board.component';
import { CompanySingleComponent } from './company-single/company-single.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyBoardComponent,
    CompanySingleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
