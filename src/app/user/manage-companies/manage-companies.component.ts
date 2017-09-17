import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CompanyService} from '../../services/company.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-manage-companies',
  templateUrl: './manage-companies.component.html',
  styleUrls: ['./manage-companies.component.css']
})
export class ManageCompaniesComponent implements OnInit {
  companies: any[];
  errorMessage: string;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {
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
