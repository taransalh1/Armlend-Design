import { Component, OnInit } from '@angular/core';
import { Loan_selectcontrol } from '../../models/test.models';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: []
})
export class TestComponent implements OnInit {
  public Loans: Array<Loan_selectcontrol> = new Array<Loan_selectcontrol>();
  public LoanObject: string = "";
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadModelsAvailable();
  }

  loadModelsAvailable() {
    debugger
    jsonFiles.forEach((item, index) => {
      let newitem: Loan_selectcontrol = new Loan_selectcontrol();
      newitem.id = index + 1;
      newitem.name = item;
      this.Loans.push(newitem);
    })
  }

  onChange(event: any) {
    this.getJSON(event.value).subscribe(p => { });
  }

  getJSON(name: string): Observable<any> {
    return this.http.get("./assets/staticdata/" + name)
      .map((res: any) => {
        debugger
        this.LoanObject = res
      })
      .catch((error: any) => { return new Observable<any>() });

  }

  

}
