import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListRouting } from './employeelistrouting.module';
import { EmployeelistComponent } from './employeelist.component';

@NgModule({
  declarations: [EmployeelistComponent],
  imports: [
    CommonModule,
    EmployeeListRouting
  ]
})
export class EmployeelistModule { }
