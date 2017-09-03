import { Component, OnInit } from '@angular/core';
import { roles } from '../data';

@Component({
  selector: 'app-role-board',
  templateUrl: './role-board.component.html',
  styleUrls: ['./role-board.component.css']
})
export class RoleBoardComponent implements OnInit {
  roles: any[];

  constructor() {
    this.roles = roles;
  }

  ngOnInit() {
  }

}
