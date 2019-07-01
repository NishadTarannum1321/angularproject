import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators, AbstractControl } from '@angular/forms';
import { DataService } from '../core/dataService';
import { EmployeeList } from '../shared/interface';
import { Router } from '@angular/router';

//----MOBILE LENGTH VALIDATION
function phoneLengthValidation (c:AbstractControl):{[key:string]:boolean} | null{
  if( c.value.toString().length == 10 ){
    return null;
  }else{
    return {
      match:true
    }
  }
}
@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  employeeForm:FormGroup
  employeelist:EmployeeList={
  Employeeid:0,
    Employeename:'',
    Designatiomn:'',
    Salary:0,
    Email:'',
    Mobile:0,
    Gender:'',
    Languagesknown:'',
    Qualification:''
  }
  constructor(private dataService:DataService,private router:Router) { }
  

  ngOnInit() {
    this.employeeForm= new FormGroup({
      Id: new FormControl(''),
      Employeename:new FormControl('',Validators.required),
      Designation:new FormControl(''),
      Salary:new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$')]),
      Email:new FormControl('',[Validators.required,Validators.email]),
      Mobile:new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$'),phoneLengthValidation]),
      genderGroup: new FormGroup({
        Female: new FormControl(''),
        Male: new FormControl(''),
        Others: new FormControl('')},Validators.required),
        Checkbox: new FormGroup({
          English: new FormControl(''),
          Hindi: new FormControl(''),
          Telugu: new FormControl(''),
          Urdu: new FormControl('')}),
      Qualification:new FormControl('')
    })
  }

  sendData(){
    console.log(this.employeeForm);
  }
  saveData(val){
    console.log(val);
  }
  submit(){

this.dataService.insertCustomer(this.employeelist).subscribe((insertCustomer: EmployeeList) => {
  if (insertCustomer) {
     
   this.router.navigate(['/EmployeeList']);
  } else {
     
  }
  })
    
}
}
