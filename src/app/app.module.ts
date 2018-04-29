
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule, MatCheckboxModule, MatButtonModule, MatProgressSpinnerModule, MatFormFieldModule, MatToolbarModule, MatInputModule, MatSelectModule, MatTableModule } from '@angular/material';
import {ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';
import { CustomOption } from './constants/toasteroptions';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { BalanceSheetApiService } from './webservice/balancesheetapi/balancesheetapi.service';
import { LoanDetailsComponent } from './components/loandetails/loandetails.component';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TestComponent,
    LoanDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatButtonModule, 
    MatTableModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    HttpModule,
    NgxJsonViewerModule,
    ReactiveFormsModule,
    ToastModule.forRoot()
  ],
  providers: [{provide: ToastOptions, useClass: CustomOption},BalanceSheetApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }