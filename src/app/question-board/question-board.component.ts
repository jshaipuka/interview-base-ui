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

  tagsFilter = [
      {
        id: '1',
        name: 'Throw Rotten Tomatoes',
        count: 2
      },
    {
      id: '2',
      name: 'Laziness',
      count: 3
    },
    {
      id: '3',
        name: 'Invent evil schemes',
      count: 1
    },
    {
      id: '4',
        name: 'Never worked with Sportacus',
      count: 151
    }
  ];

  companiesFilter = [
    {
      id: '1',
      name: 'Robbie Rotten Campaign'
    },
    {
      id: '2',
      name: 'Star Wars troops Union'
    }
    ];
  rolesFilter = [
    {
      id: '1',
      name: 'Villain #1'
    },
    {
      id: '2',
      name: 'Villain #2'
    },
    {
      id: '3',
      name: 'Robbie Double'
    }];

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

  difficulty(level) {
    return Array(level);
  }
}
