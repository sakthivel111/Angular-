import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  data: any;
 id: any;

  constructor(private service: ApiserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getall()
  }


  getall() {
    
    this.service.getingall().subscribe((res) => {
      console.log(res, 'respone')
      this.data = res
      //console.log(this.data,"data taaaaaa")
    })
  }

  edit(userId: any) {
    this.router.navigate(['creat'], { queryParams: { userId } })
  }

  delet(userId: any) {
    this.service.deletinguser(userId).subscribe((newUser) => {
       this.getall()
    })
    
  }

}
