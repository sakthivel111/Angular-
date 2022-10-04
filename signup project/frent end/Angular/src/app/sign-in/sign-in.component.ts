import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  // name = ''
  profileForm: any
 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // console.log('!!!!!!!!!!!!!', this.profileForm.value)
    this.profileForm = this.fb.group({
      email:[null,[Validators.required]],
      password:[null,[Validators.required,Validators.maxLength(8)]]
    });
  }
  next() {
    
    console.log(this.profileForm.value)
  }

  //this is a sort form of var.constructer
  get form() {
    return this.profileForm.controls;
  }   
}
