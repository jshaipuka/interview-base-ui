import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { InterviewService } from '../../services/interview.service';
import { QuestionService } from '../../services/question.service';

import { Interview } from '../../models/interview';
import { Question } from '../../models/question';

import { ViewMode } from '../view-mode.enum';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-manage-interview-detail',
  templateUrl: './manage-interview-detail.component.html',
  styleUrls: ['./manage-interview-detail.component.css']
})
export class ManageInterviewDetailComponent implements OnInit, OnChanges {
  interview: Interview;
  errorMessage: string;
  interviewForm: FormGroup;
  readMode: boolean;
  private viewMode: ViewMode;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private interviewService: InterviewService,
    private questionService: QuestionService
  ) {
  }

  ngOnInit() {
    this.setViewMode();
    this.getData();
    this.createForm();
    this.setQuestions(this.interview && this.interview.questions);
  }

  ngOnChanges() {
    this.interviewForm.reset({
      name: this.interview.name
    });
    this.setQuestions(this.interview && this.interview.questions);
  }

  private setViewMode() {
    this.route.data.forEach(d => {
      if (d.viewMode) {
        this.viewMode = d.viewMode;
        this.readMode = this.viewMode === ViewMode.READ;
      }
    });
  }

  private getData() {
    if (this.viewMode === ViewMode.CREATE) {
      return;
    }

    this.route.params.subscribe(params => {
      this.interviewService.get(+params['id']).subscribe(
        data => {
          this.interview = data;
        },
        error => this.errorMessage = <any>error
      );
    });
  }

  createForm() {
    if (this.readMode) {
      return;
    }

    this.interviewForm = this.formBuilder.group({
      name: [(this.interview && this.interview.name) || '', Validators.required],
      questions: this.formBuilder.array(this.interview && this.interview.questions || [])
    });
  }

  setQuestions(questions: Question[] = []) {
    if (this.readMode) {
      return;
    }

    const questionsFormsGroups = questions.map(question => this.formBuilder.group(question));
    const questionFormArray = this.formBuilder.array(questionsFormsGroups);
    this.interviewForm.setControl('questions', questionFormArray);
  }

  addQuestion() {
    this.questions.push(this.formBuilder.group(new Question()));
  }

  get questions(): FormArray {
    return this.interviewForm.get('questions') as FormArray;
  };

  revert() { this.ngOnChanges(); }

  persistInterview(interview: Interview) {
    this.interviewService.create(interview).catch(error => this.errorMessage = <any>error);
  }

  submit() {
    const interviewData = this.interviewForm.value;
    if (this.interview) {
      Object.assign(interviewData, { id: this.interview.id });
    }

    this.persistInterview(interviewData);
    this.router.navigate(['']);
  }
}
