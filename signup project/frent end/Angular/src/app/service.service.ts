import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }  
  addinguser(data:any){
    return this.http.post(environment.url+'/insert',data)
  }
  gettoken(token: any){
    console.log(token,"hbx-----------------");
    return this.http.get(environment.url+'/verify?token='+token)
  }
}
