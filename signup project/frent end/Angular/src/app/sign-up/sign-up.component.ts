import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  profileForm: any;
  message:any;
  
  constructor(private service:ServiceService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: [null,[Validators.required,Validators.maxLength(20)]],
      email:[null,[Validators.required]],
      password:[null,[Validators.required,Validators.maxLength(8)]]
    });
  }
  
  get form() {
    return this.profileForm.controls;
  } 
  adduser(){
    console.log(this.profileForm.value)
    this.service.addinguser({ name:this.profileForm.value.name,email:this.profileForm.value.email,password:this.profileForm.value.password}).subscribe((newUser:any) => {
       console.log(newUser.message)
       this. message=newUser.message
      
  })
  }
  
    
  
}
