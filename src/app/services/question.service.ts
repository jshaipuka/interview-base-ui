import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Config } from '../app.config';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { questions } from '../data';

@Injectable()
export class QuestionService {
  private base_url = `${Config.API_URL}/interviews`;

  constructor(private http: Http) {
  }

  list(): Observable<any> {
    return Observable.create(observer => {
      observer.next(questions);
      observer.complete();
    });
  }

  get(id: number | string): Observable<any> {
    const question = questions.find(i => i.id == id);
    return Observable.create(observer => {
      observer.next(question);
      observer.complete();
    });
  }

  update(question: any): Observable<any> {
    return Observable.create(observer => {
      if (!question.id) question.id = 9;
      questions.push(question);
      observer.next(questions);
      observer.complete();
    });
  }

  deleteQuestion(id): Observable<any> {
    return Observable.create(observer => {
      const index = questions.map(q => q.id).indexOf(id);
      questions.splice(index, 1);
      observer.next(questions);
      observer.complete();
    });
  }

  list2(): Observable<any> {
    return this.http.get(`${this.base_url}/1/questions`)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  getReal(id: number | string): Observable<any> {
    return this.http.get(this.base_url)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  updateReal(question: any): Observable<any> {
    return this.http.post(this.base_url, question)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  create(question: any): Promise<any> {
    return this.http.post(this.base_url, question).toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    return response.json() || {};
  }

  private handleError(error: any): Promise<any> {
    const { status, statusText, message } = error;
    return Promise.reject({ status, statusText, message });
  }

  private handleErrorObservable(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}

