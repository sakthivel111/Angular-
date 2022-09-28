import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { AppService } from '../app.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  data: any;
 // id: any;

  constructor(private service: ApiserviceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getall().subscribe((res) => {
      console.log(res, 'respone')
      this.data = res
      //console.log(this.data,"data taaaaaa")
    })
  }

  edit(userId: any) {

    console.log('hfhfhhf', userId)
    this.router.navigate(['creat'], { queryParams: { userId } })

  }

  delet(userId: any) {

    console.log('hfhfhhf', userId)
    this.router.navigate(['creat'], { queryParams: { userId } })
    
  }




}
