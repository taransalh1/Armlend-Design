import { Component, OnInit } from '@angular/core';
import { BalanceSheetApiService } from '../../webservice/balancesheetapi/balancesheetapi.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.css']
})
export class LoanDetailsComponent implements OnInit {
  navitems=['Overview','Summary'];
  
  constructor() { }

  ngOnInit() {

  }

  

}
