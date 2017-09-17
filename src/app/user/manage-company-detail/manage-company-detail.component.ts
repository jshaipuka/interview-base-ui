import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CompanyService} from '../../services/company.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-manage-company-detail',
  templateUrl: './manage-company-detail.component.html',
  styleUrls: ['./manage-company-detail.component.css']
})
export class ManageCompanyDetailComponent implements OnInit {
  mode: string;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) { }

  ngOnInit() {
    this.route.data.forEach(d => {
      if (d.mode) {
        this.mode = d.mode;
      }
    });
    //
    //   .params.subscribe(params => {
    //   this.id = +params['id']; // (+) converts string 'id' to a number
    //   // In a real app: dispatch action to load the details here.
    // });
    // this.companyService.get().subscribe(
    //   data => {
    //     this.companies = data;
    //   },
    //   error => this.errorMessage = <any>error
    // );
  }

}
