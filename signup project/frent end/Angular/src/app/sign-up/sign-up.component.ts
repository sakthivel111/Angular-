import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, MinLengthValidator } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  profileForm: any
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: [null,[Validators.required]],
      email:[null,[Validators.required]],
      password:[null,[Validators.required,Validators.maxLength(8),Validators.minLength(8)]]
    });
  }

   get form() {
    return this.profileForm.controls;
  } 

}
