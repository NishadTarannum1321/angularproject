import { NgModule } from "@angular/core";

import { Routes,RouterModule } from '@angular/router';


const routes:Routes=[
    {path:'EmployeeList',loadChildren:"./employeelist/employeelist.module#EmployeelistModule"},
]

 @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
 })
 export class AppRoutingModule{

 }