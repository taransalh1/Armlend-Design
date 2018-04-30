import { EventEmitter } from "@angular/core";

export class Loan_selectcontrol{
    public id:number;
    public name:string; 
}

export class ResponseModel{
    data:any;
    message:string;
    resCode:number;
}
export class keyvalueattriute{
    key:string;
    newvalue:any;
    oldvalue:any;
}
export class EditableAttribute{
    private emitagent:keyvalueattriute=new keyvalueattriute();
    public valuechanged:EventEmitter<keyvalueattriute>=new EventEmitter<keyvalueattriute>();
    get value():any{
        return this._value;
    }
    set value(value: any) {
        this.emitagent.oldvalue=this._value;
        this._value = value
        this.emitagent.key=this.key;
        this.emitagent.newvalue=value;
        
        this.valuechanged.emit(this.emitagent);
    }
    private _value:any;
    key:string
    editmode:boolean;
    canedit:boolean
}
export class EditableModel{
    data:Array<Array<EditableAttribute>>=new Array<Array<EditableAttribute>>();
}
