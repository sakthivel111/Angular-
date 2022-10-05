import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
  usertoken:any;
  message:any;
  constructor(private service: ServiceService, private router: Router, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.aRoute.queryParams.subscribe(params => {
      this.usertoken = params['token']; 

    this.service.gettoken(this.usertoken).subscribe((data)=>{
      console.log(data)
      //this.message=data.message;
    })
      this.router.navigate(['/sign-in'])
      console.log('jssssssssssssssssssssss',this.usertoken)
    })
  }

}
