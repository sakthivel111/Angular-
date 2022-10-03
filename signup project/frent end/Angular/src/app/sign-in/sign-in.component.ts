import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  
  profileForm = new FormGroup({
  name: new FormControl('',Validators.required),
  email: new FormControl('',Validators.required),
  pass: new FormControl('',Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  } 
  next(){
    console.log(this.profileForm)
    console.log('sakthivel')
  }

}
