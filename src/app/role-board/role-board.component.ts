import {Component, OnInit} from '@angular/core';
import {RoleService} from '../services/role.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-role-board',
  templateUrl: './role-board.component.html',
  styleUrls: ['./role-board.component.css']
})
export class RoleBoardComponent implements OnInit {
  roles: any[];
  errorMessage: string;

  constructor(private roleService: RoleService) {
  }

  ngOnInit() {
    this.setup();
  }

  private setup() {
    this.roleService.list().subscribe(
      data => {
        this.roles = data;
      },
      error => this.errorMessage = <any>error
    );
  }
}
