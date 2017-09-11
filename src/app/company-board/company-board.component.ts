import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../services/company.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

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

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.setup();
  }

  private setup() {
    this.companyService.list().subscribe(
      data => {
        this.companies = data;
      },
      error => this.errorMessage = <any>error
    );
  }
}
