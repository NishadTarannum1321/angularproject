import { Injectable } from '@angular/core';

import { EmployeeList} from '../shared/interface';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()

export class DataService{
constructor(private http:HttpClient){

}

insertCustomer(employeelist:EmployeeList): Observable<EmployeeList> {
    return this.http.post<EmployeeList>('',employeelist);
}
}
