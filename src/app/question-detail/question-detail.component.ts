import { Component, OnInit } from '@angular/core';
import { question1 } from '../data';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  question: any;

  constructor() {
    this.question = question1;
  }

  ngOnInit() {
  }

}
