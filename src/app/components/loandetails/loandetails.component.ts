import { Component, OnInit } from '@angular/core';
import { BalanceSheetApiService } from '../../webservice/balancesheetapi/balancesheetapi.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.css']
})
export class LoanDetailsComponent implements OnInit {
  loanID:number;
  items:Array<any>;
  dataSource =new MatTableDataSource(this.items);
  displayedColumns = ['assets', 'discount', 'liability'];
  constructor(private balancesheetservice: BalanceSheetApiService) { }

  ngOnInit() {

  }

  getBalanceSheetItemsforLoan(){
    this.balancesheetservice.getRecordsByloanId(this.loanID).subscribe(res=>{
      debugger
    this.items=res.data;
    this.dataSource.data=this.items;
    });
  }

}
