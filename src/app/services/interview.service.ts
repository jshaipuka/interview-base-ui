import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Config} from '../app.config';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {interviews} from '../data';

import {Interview} from '../models/interview';

@Injectable()
export class InterviewService {
  private base_url = `${Config.API_URL}/interviews`;

  constructor(private http: Http) {
  }

  list(): Observable<Interview[]> {
    return Observable.create(observer => {
      observer.next(interviews);
      observer.complete();
    });
  }

  get(id: number): Observable<Interview> {
    const interview = interviews.find(i => i.id === id);
    return Observable.create(observer => {
      observer.next(interview);
      observer.complete();
    });
  }

  update(interview: Interview): Observable<any> {
    return Observable.create(observer => {
      if (!interview.id) interview.id = 9;
      interviews.push(interviews[0]);
      observer.next(interviews);
      observer.complete();
    });
  }

  deleteInterview(id): Observable<any> {
    return Observable.create(observer => {
      const index = interviews.map(q => q.id).indexOf(id);
      interviews.splice(index, 1);
      observer.next(interviews);
      observer.complete();
    });
  }

  listReal(): Observable<Interview[]> {
    return this.http.get(this.base_url)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  getReal(id: number): Observable<Interview> {
    return this.http.get(`${this.base_url}/${id}`)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  updateReal(interview: any): Observable<any> {
    return this.http.post(this.base_url, interview)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  create(interview: any): Promise<any> {
    return this.http.post(this.base_url, interview).toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    return response.json() || {};
  }

  private handleError(error: any): Promise<any> {
    const {status, statusText, message} = error;
    return Promise.reject({status, statusText, message});
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

