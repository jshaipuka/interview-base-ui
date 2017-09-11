import {Component, OnInit} from '@angular/core';
import {RoleService} from '../services/role.service';
import {ActivatedRoute} from '@angular/router';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {
  role: any;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private roleService: RoleService
  ) {
  }

  ngOnInit() {
    this.setup();
  }

  private setup() {
    this.route.params.subscribe(params => {
      this.roleService.get(params['id']).subscribe(
        data => {
          this.role = data;
        },
        error => this.errorMessage = <any>error
      );
    });
  }
}
