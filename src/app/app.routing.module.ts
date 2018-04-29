import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router"
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { TestComponent } from "./components/test/test.component";
import { LoanDetailsComponent } from './components/loandetails/loandetails.component';
import { SummaryComponent } from "./components/loandetails/summary/summary.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent},
  {path : 'home', component : HomeComponent,children:[
    {
      path:'test',component:TestComponent
    },
    {
      path:'loandetails',component:LoanDetailsComponent,children:[
        {
          path:'',component:SummaryComponent
        },
         {
          path:'summary',component:SummaryComponent
        },
      ]
    }
  ]}
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }