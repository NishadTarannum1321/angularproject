import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './AppRouting.module';
import { CoreModule } from './core/core.module';
import { DataService } from './core/dataService';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,EmployeeformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
