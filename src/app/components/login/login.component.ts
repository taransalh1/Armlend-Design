import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager,Toast } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 private username:string;
 private password:string;
 private showSpinner:boolean;
  constructor(
    private toast:ToastsManager,
    private vRef:ViewContainerRef,
    private router: Router
  ) {
    this.toast.setRootViewContainerRef(vRef);
   }

  ngOnInit() {
  }

  login(){
    if(this.username==='admin' && this.password==='admin'){
      this.toast.success ("Logging you in", 'Success');
      this.router.navigate(['home'])
    }
    else{
      this.toast.warning ("Incorrect Credentials !", 'Error');
    }
  }
}
