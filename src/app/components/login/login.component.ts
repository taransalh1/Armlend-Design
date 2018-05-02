import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager,Toast } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public username:string;
 public password:string;
 public showSpinner:boolean;
 items: MenuItem[];
  constructor(
    private toast:ToastsManager,
    private vRef:ViewContainerRef,
    private router: Router
  ) {
    this.toast.setRootViewContainerRef(vRef);
   }

  ngOnInit() {
    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New',
                  icon: 'fa-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'fa-edit',
          items: [
              {label: 'Undo', icon: 'fa-mail-forward'},
              {label: 'Redo', icon: 'fa-mail-reply'}
          ]
      }
  ];
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
