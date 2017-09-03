import { Component, OnInit } from '@angular/core';
import { Company } from '../models/Company';
import { company1 } from '../data';

@Component({
  selector: 'app-company-single',
  templateUrl: './company-single.component.html',
  styleUrls: ['./company-single.component.css']
})
export class CompanySingleComponent implements OnInit {
  company: Company;

  constructor() {
    this.company = company1;
  }

  ngOnInit() {
  }

}
