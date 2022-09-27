import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.scss']
})
export class CreatComponent implements OnInit {
username:any;
userage:any;
userjob:any;
userId :any;
  constructor( private service:ApiserviceService,private router:Router,private aRoute:ActivatedRoute) { 
    aRoute.queryParams.subscribe(params => {
      this.userId = params['userId'];
      console.log('QQQQQQQQQQQQQQ', this.userId)
      this.service.getId( this.userId ).subscribe((res) => {
        console.log(res, 'respone')
      })
  });
  
//1) method 
// aRoute.queryParams.subscribe(params => {
//     this.userId = params['id'];
//     this.username = params['name'];
//     this.userage = params['age'];
//     this.userjob = params['job'];
//     console.log('QQQQQQQQQQQQQQ', this.userId)
// })

  }

  ngOnInit(): void {
    
  }
  adduser(){
    //console.log({name:this.username,age:this.userage,job:this.userjob}, 'ssssss')
    this.service.adduser({name:this.username,age:this.userage,job:this.userjob}).subscribe((newUser)=>{
     // console.log(newUser)
      this.router.navigate(['/read'])
    })
  }

}
