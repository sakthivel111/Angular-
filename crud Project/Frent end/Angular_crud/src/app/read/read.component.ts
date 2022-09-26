import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  data:any;
  constructor(private service:ApiserviceService) { }
  

  ngOnInit(): void {
    this .service.getall().subscribe((res)=>{
      console.log(res,'respone')
      this.data=res
      console.log(this.data,"data taaaaaa")
    })
  }

} 
