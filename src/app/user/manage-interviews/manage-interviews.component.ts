import { Component, OnInit } from '@angular/core';
import {InterviewService} from '../../services/interview.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-manage-interviews',
  templateUrl: './manage-interviews.component.html',
  styleUrls: ['./manage-interviews.component.css']
})
export class ManageInterviewsComponent implements OnInit {
  interviews: any[];
  errorMessage: string;

  constructor(private interviewService: InterviewService) { }

  ngOnInit() {
    this.setup();
  }

  private setup() {
    this.interviewService.list().subscribe(
      data => {
        this.interviews = data;
      },
      error => this.errorMessage = <any>error
    );
  }

  deleteQuestion(id) {
    this.interviewService.deleteInterview(id).subscribe(data => data, error => this.errorMessage = <any>error);
  }
}
