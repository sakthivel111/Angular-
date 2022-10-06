import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
// import {MessageService} from 'primeng/api';
// import {Component} from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  // name = ''
  profileForm: any;
  message: any;

  constructor(private fb: FormBuilder, private service: ServiceService, private router: Router, private aRoute: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit(): void {
    // console.log('!!!!!!!!!!!!!', this.profileForm.value)
    this.profileForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }


  //this is a sort form of var.constructer
  get form() {
    return this.profileForm.controls;
  }

  next() {
    // console.log(this.profileForm.value)
    this.service.login({ email: this.profileForm.value.email, password: this.profileForm.value.password }).subscribe((newUser: any) => {
      // console.log(newUser.message)
      this.message = newUser.message

      if (this.message == 'login success') {
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Login success' });
        this.router.navigate(['/homepage'])
      }
      else if (this.message == 'Password incurect') {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Password incurect' });
      }
      else if (this.message == 'sign up') {
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Go to sign up page' });
      }
      else {
        console.log('login unsuccess')
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'something went wrong' });
      }
    })
  }
}

