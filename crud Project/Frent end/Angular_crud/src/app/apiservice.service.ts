import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {

  constructor(private http:HttpClient) { }
   
  
   getall(){
    return this.http.get(environment.url+'/user')
   }

  adduser(data:any){
    return this.http.post(environment.url+'/insert',data)
  }
  getId(id: any){
    return this.http.get(environment.url+'/userId/'+id)
  }
}
