import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../services/question.service';
import {ActivatedRoute} from '@angular/router';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  question: any;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {
  }

  ngOnInit() {
    this.setup();
  }

  private setup() {
    this.route.params.subscribe(params => {
      this.questionService.get(params['id']).subscribe(
        data => {
          this.question = data;
        },
        error => this.errorMessage = <any>error
      );
    });
  }

  difficulty(level) {
    return Array(level);
  }
}
