import { Component, OnInit } from '@angular/core';
import { questions } from '../data';

@Component({
  selector: 'app-question-board',
  templateUrl: './question-board.component.html',
  styleUrls: ['./question-board.component.css']
})
export class QuestionBoardComponent implements OnInit {
  questions: any[];

  constructor() {
    this.questions = questions;
  }

  ngOnInit() {
  }

}
