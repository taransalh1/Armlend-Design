
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './components/login/login.component';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { CustomOption } from './constants/toasteroptions';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { BalanceSheetApiService } from './webservice/balancesheetapi/balancesheetapi.service';
import { LoanDetailsComponent } from './components/loandetails/loandetails.component';
import { SummaryComponent } from './components/loandetails/summary/summary.component';
import { HttpModule } from '@angular/http';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TestComponent,
    LoanDetailsComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgxJsonViewerModule,
    ReactiveFormsModule,
    MenubarModule,
    ToastModule.forRoot(),
    ButtonModule 
  ],
  providers: [{ provide: ToastOptions, useClass: CustomOption }, BalanceSheetApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
