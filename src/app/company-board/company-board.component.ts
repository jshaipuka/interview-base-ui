import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CompanyService } from '../company.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

interface Company {
  id: string;
  name: string;
  icon: string;
  questionCount: number;

  hidden?: boolean;
  draft?: boolean;
  createdTime?: number;
  updatedTime?: number;
}

@Component({
  selector: 'app-company-board',
  templateUrl: './company-board.component.html',
  styleUrls: ['./company-board.component.css']
})
export class CompanyBoardComponent implements OnInit {
  companies: Company[];
  errorMessage: string;
  data: any;

  constructor(
    // private router: Router,
    // private route: ActivatedRoute,
    private companyService: CompanyService
  ) {
    this.companies = [
      {
        id: '1',
        name: 'Robbie Rotten Campaign',
        icon: 'http://i0.kym-cdn.com/entries/icons/original/000/021/493/robbie_rotten.jpeg',
        questionCount: 15
      },
      {
        id: '2',
        name: 'Sportacus Healthy Program',
        icon: 'https://vignette4.wikia.nocookie.net/lazy-town4817/images/c/c6/Nick_Jr._LazyTown_Sportacus_2.png/revision/latest?cb=20161218032644',
        questionCount: 3
      },
      {
        id: '3',
        name: 'Упяска дэсу',
        icon: 'https://cs6.pikabu.ru/post_img/2015/01/28/9/1422457333_525912262.gif',
        questionCount: 151234
      },
    ];
  }

  ngOnInit() {
    this.setup();
  }

  private setup() {
     this.companyService.list().subscribe(
        data => {
          console.log(data);
          this.data = data;
        },
        error =>  this.errorMessage = <any>error
      );
  }
}
