import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { InterviewService } from '../../services/interview.service';
import { QuestionService } from '../../services/question.service';

import { Interview } from '../../models/interview';
import { Question } from '../../models/question';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-manage-interview-detail',
  templateUrl: './manage-interview-detail.component.html',
  styleUrls: ['./manage-interview-detail.component.css']
})
export class ManageInterviewDetailComponent implements OnInit, OnChanges {
  mode: string;
  interview: Interview;
  errorMessage: string;
  interviewForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private interviewService: InterviewService,
    private questionService: QuestionService
  ) {
  }

  ngOnInit() {
    this.route.data.forEach(d => {
      if (d.mode) {
        this.mode = d.mode;
      }
    });
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

  private getData() {
    if (this.mode === 'new') return;
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
    if (this.mode === 'read') return;
    this.interviewForm = this.formBuilder.group({
      name: [(this.interview && this.interview.name) || '', Validators.required],
      questions: this.formBuilder.array(this.interview && this.interview.questions || [])
    });
  }

  setQuestions(questions: Question[] = []) {
    if (this.mode === 'read') return;
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

  persistQuestions(questions: Question[]) {
    questions.forEach( question => this.questionService.create(question).catch(error => this.errorMessage = <any>error) );
  }

  persistInterview(name: string) {
    this.interviewService.create({ name }).catch(error => this.errorMessage = <any>error);
  }

  submit() {
    const interviewData = this.interviewForm.value;
    if (this.interview) Object.assign(interviewData, { id: this.interview.id });

    this.persistQuestions(interviewData.questions);
    this.persistInterview(interviewData.name);
    this.router.navigate(['/interviews']);
  }
}
