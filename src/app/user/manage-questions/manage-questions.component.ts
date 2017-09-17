import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../services/question.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.css']
})
export class ManageQuestionsComponent implements OnInit {
  questions: any[];
  errorMessage: string;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.setup();
  }

  private setup() {
    this.questionService.list().subscribe(
      data => {
        this.questions = data;
      },
      error => this.errorMessage = <any>error
    );
  }
}
