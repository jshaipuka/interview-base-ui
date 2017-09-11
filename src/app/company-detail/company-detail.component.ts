import {Component, OnInit} from '@angular/core';
import {Company} from '../models/Company';
import {CompanyService} from '../services/company.service';
import {ActivatedRoute} from '@angular/router';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) {
  }

  ngOnInit() {
    this.setup();
  }

  private setup() {
    this.route.params.subscribe(params => {
      this.companyService.get(params['id']).subscribe(
        data => {
          this.company = data;
        },
        error => this.errorMessage = <any>error
      );
    });
  }
}
