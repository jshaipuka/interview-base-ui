import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Config} from '../app.config';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {roles, role1} from '../data';

@Injectable()
export class RoleService {
  private base_url = `${Config.API_URL}?query=%7BallLinks%7Burl%7D%7D`;

  constructor(private http: Http) {
  }

  list(): Observable<any> {
    return Observable.create(observer => {
      observer.next(roles);
      observer.complete();
    });
  }

  get(id: number | string): Observable<any> {
    return Observable.create(observer => {
      observer.next(role1);
      observer.complete();
    });
  }

  listReal(): Observable<any> {
    return this.http.get(this.base_url)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  getReal(id: number | string): Observable<any> {
    return this.http.get(this.base_url)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  create(role: any): Promise<any> {
    return this.http.post(this.base_url, role).toPromise()
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

