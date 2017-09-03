import { Component, OnInit } from '@angular/core';
import { Company } from '../models/Company';
import { company1 } from '../data';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company;

  constructor() {
    this.company = company1;
  }

  ngOnInit() {
  }

}
