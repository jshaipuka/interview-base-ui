import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../services/question.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-question-board',
  templateUrl: './question-board.component.html',
  styleUrls: ['./question-board.component.css']
})
export class QuestionBoardComponent implements OnInit {
  questions: any[];
  errorMessage: string;

  constructor(private questionService: QuestionService) {
  }

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
