import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../../services/question.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-manage-question-detail',
  templateUrl: './manage-question-detail.component.html',
  styleUrls: ['./manage-question-detail.component.css']
})
export class ManageQuestionDetailComponent implements OnInit {
  mode: string;
  question: any;
  errorMessage: string;
  questionForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private questionService: QuestionService) { }

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
      this.questionService.get(params['id']).subscribe(
        data => {
          this.question = data;
        },
        error => this.errorMessage = <any>error
      );
    });
  }

  private addForm() {
    if (this.mode === 'read') return;
    this.questionForm = new FormGroup({
      title: new FormControl((this.question && this.question.title) || '', Validators.required),
      text: new FormControl((this.question && this.question.text) || ''),
      answer: new FormControl((this.question && this.question.answer) || '')
    });
  }

  submit() {
    const questionData = this.questionForm.value;
    if (this.question) Object.assign(questionData, { id: this.question.id });
    console.log(questionData);
    this.questionService.update(questionData).subscribe(error => this.errorMessage = <any>error);
    this.router.navigate(['/dashboard/questions']);
  }
}
