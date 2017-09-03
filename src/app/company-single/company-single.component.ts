import { Component, OnInit } from '@angular/core';
import { Company } from '../models/Company';

@Component({
  selector: 'app-company-single',
  templateUrl: './company-single.component.html',
  styleUrls: ['./company-single.component.css']
})
export class CompanySingleComponent implements OnInit {
  company: Company;

  constructor() {
    this.company = {
      id: '1',
      name: 'Robbie Rotten Campaign',
      description: 'We are number one!',
      icon: 'http://i0.kym-cdn.com/entries/icons/original/000/021/493/robbie_rotten.jpeg',
      roles: [
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
        }
      ],
      skills: [
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
      ],
      questionCount: 15
    };
  }

  ngOnInit() {
  }

}
