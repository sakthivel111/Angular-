import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
   
   url='http://localhost:3000/user'

   getall(){
    return this.http.get(`${this.url}`)
   }

   creatall(data:any){

    return this.http.post(`${this.url}`,data)
   }
}
