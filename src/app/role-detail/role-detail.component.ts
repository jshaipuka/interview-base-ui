import { Component, OnInit } from '@angular/core';
import { role1 } from '../data';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {
  role: any;

  constructor() {
    this.role = role1;
  }

  ngOnInit() {
  }

}
