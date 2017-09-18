import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-manage-company-detail',
  templateUrl: './manage-company-detail.component.html',
  styleUrls: ['./manage-company-detail.component.css']
})
export class ManageCompanyDetailComponent implements OnInit {
  mode: string;
  company: any;
  errorMessage: string;
  companyForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private companyService: CompanyService) { }

  ngOnInit() {
    this.route.data.forEach(d => {
      if (d.mode) {
        this.mode = d.mode;
      }
    });
    this.getData();
    this.addForm();
  }

  private getData() {
    if (this.mode === 'new') return;
    this.route.params.subscribe(params => {
      this.companyService.get(params['id']).subscribe(
        data => {
          this.company = data;
        },
        error => this.errorMessage = <any>error
      );
    });
  }

  private addForm() {
    if (this.mode === 'read') return;
    this.companyForm = new FormGroup({
      name: new FormControl((this.company && this.company.name) || '', Validators.required),
      description: new FormControl((this.company && this.company.description) || '')
    });
  }

  submit() {
    const companyData = this.companyForm.value;
    if (this.company) Object.assign(companyData, { id: this.company.id });
    console.log(companyData);
    this.companyService.update(companyData).subscribe(data => data, error => this.errorMessage = <any>error);
    this.router.navigate(['/dashboard/companies']);
  }
}
