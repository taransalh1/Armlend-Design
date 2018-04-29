import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ResponseModel } from '../../models/test.models';
const API_URL = environment.apiUrl;

@Injectable()
export class BalanceSheetApiService {

  
  constructor( private http: Http) { }

  getRecordsByloanId(loanid:number):Observable<ResponseModel>{
    debugger
   return this.http
      .get(API_URL + '/api/BalanceSheet/GetbyLoanId/'+loanid)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }
   private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
