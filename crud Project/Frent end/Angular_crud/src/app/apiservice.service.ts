import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {

  constructor(private http:HttpClient) { }
   
  
  getingall(){
    return this.http.get(environment.url+'/user')
   }

  addinguser(data:any){
    return this.http.post(environment.url+'/insert',data)
  }
  getId(id: any){
    return this.http.get(environment.url+'/userId/'+id)
  }
  edituser(userData:any){
    return this.http.put(environment.url+'/update/' + userData.id , userData)
  }
  deletinguser(id:any){
    return this.http.delete(environment.url+'/delete/' +id)
  }
}
