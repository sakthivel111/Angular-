import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.scss']
})
export class CreatComponent implements OnInit {
  update: any = false;
  changingname: string = 'submit';
  username: any;
  userage: any;
  userjob: any;
  userId: any;
  bainding: any
  delet:any;
  constructor(private service: ApiserviceService, private router: Router, private aRoute: ActivatedRoute) {
    //appi using method
    aRoute.queryParams.subscribe(params => {
      this.userId = params['userId'];
      //console.log('QQQQQQQQQQQQQQ', this.userId);
      this.service.getId(this.userId).subscribe((res: any) => {
        // console.log(res, 'respone')
        this.update = true;
        this.changingname = 'update';
        this.userId = res[0].id;
        this.username = res[0].name;
        this.userage = res[0].age;
        this.userjob = res[0].job;
      })
    });

    aRoute.queryParams.subscribe(params => {
      this.delet = params['deletId'];

    })

    //1) method  (not use for api)
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
 
  adduser() {
    if (this.update == false) {
      //console.log({name:this.username,age:this.userage,job:this.userjob}, 'ssssss')
      this.service.addinguser({ name: this.username, age: this.userage, job: this.userjob }).subscribe((newUser) => {
        // console.log(newUser)
        this.router.navigate(['/read'])
      })
    } else {
      this.service.edituser({ id: this.userId, name: this.username, age: this.userage, job: this.userjob }).subscribe((newUser) => {
        // console.log(newUser)
        this.router.navigate(['/read'])
      })
    }
  }

}
