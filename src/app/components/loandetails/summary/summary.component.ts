import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BalanceSheetApiService } from '../../../webservice/balancesheetapi/balancesheetapi.service';
import { MatTableDataSource } from '@angular/material';
import { EditableModel, EditableAttribute } from '../../../models/test.models';
import { element } from 'protractor';
import { keyvalueattriute } from './../../../models/test.models';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  loanID: number;
  items: EditableModel = new EditableModel();
  displayedColumns = [{key:'Name',canedit:false,aggregate:false}, {key:'Assets',canedit:true,aggregate:false},{key:'Discount',canedit:false,aggregate:false},{key:'Adjusted Value',canedit:false,aggregate:true},{key:'Liability',canedit:true,aggregate:false},{key:'Adjusted Net worth',canedit:false,aggregate:true}];
  constructor(private balancesheetservice: BalanceSheetApiService,  private toast:ToastsManager,
    private vRef:ViewContainerRef,) { 

      this.toast.setRootViewContainerRef(vRef);
    }

  ngOnInit() {

  }

  getBalanceSheetItemsforLoan() {
    this.items = new EditableModel();
    this.balancesheetservice.getRecordsByloanId(this.loanID).subscribe(res => {
      res.data.forEach((element,mainindex) => {
        let ea1: EditableAttribute[]=new Array(this.displayedColumns.length)
        for (var k in element) {
          let index=this.displayedColumns.findIndex(p=>p.key.toLowerCase()==k.toLowerCase());
          if (element.hasOwnProperty(k) && index!=-1) {
            let ea: EditableAttribute = new EditableAttribute();
            ea.key = k;
            ea.value = element[k];
            ea.editmode = false;
            ea.canedit=this.displayedColumns[index].canedit;
            ea.valuechanged.subscribe(res=>this.subjectvaluechanged(res,mainindex));
            ea1[index]=ea;
          }
        }
        //Aggregate Columns
        this.displayedColumns.filter(p=>p.aggregate==true).forEach(p=>{
          let aggregateindex=this.displayedColumns.findIndex(ag=>ag.key.toLowerCase()==p.key.toLowerCase());
          if(p.key=='Adjusted Value'){
            let ea: EditableAttribute = new EditableAttribute();
            ea.key = p.key.toLowerCase();
            ea.value = this.calculateAdjustedvalue(element['assets'],element['discount']);
            ea.editmode = false;
            ea.canedit=false;
            ea1[aggregateindex]=ea;
          }
          if(p.key=='Adjusted Net worth'){
            debugger
            let ea: EditableAttribute = new EditableAttribute();
            ea.key = p.key.toLowerCase();
            ea.value = this.calculateAdjustednetworth(ea1.filter(g=>g.key=='adjusted value')[0].value,element['liability']);
            ea.editmode = false;
            ea.canedit=false;
            ea1[aggregateindex]=ea;
          }
        })
        this.items.data.push(ea1);
      });

    });

  }

  subjectvaluechanged(val:keyvalueattriute,index:number){
    
    let item=this.items.data[index];
    if(val.key=='liability' || val.key=='assets'){
      if(parseInt(item.filter(p=>p.key=='liability')[0].value)>parseInt(item.filter(p=>p.key=='assets')[0].value))
      {
        this.toast.warning("Liabilty greater than Assets")
      item.filter(p=>p.key==val.key)[0].value=val.oldvalue;
    return;  
    }


    }
    
  
   item.filter(p=>p.key=='adjusted value')[0].value=this.calculateAdjustedvalue(item.filter(p=>p.key=='assets')[0].value,item.filter(p=>p.key=='discount')[0].value)
   item.filter(p=>p.key=='adjusted net worth')[0].value=this.calculateAdjustednetworth(item.filter(p=>p.key=='adjusted value')[0].value,item.filter(p=>p.key=='liability')[0].value)
  
  }

  calculateAdjustedvalue(Assets:number,Discount:number):number{
    return Assets-(Assets*Discount/100); 
  }

  calculateAdjustednetworth(adjvalue:number,liability:number):number{
    return adjvalue-liability; 
  }



}
