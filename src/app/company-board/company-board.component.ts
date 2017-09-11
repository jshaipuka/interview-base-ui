import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CompanyService } from '../services/company.service';

import { companies } from '../data';
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
    this.companies = companies;
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
