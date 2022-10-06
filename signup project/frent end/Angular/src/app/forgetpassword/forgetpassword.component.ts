import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  profileForm: any;
  message: any;

  constructor(private fb: FormBuilder, private service: ServiceService, private router: Router, private aRoute: ActivatedRoute,private messageService: MessageService) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }
  get form() {
    return this.profileForm.controls;
  }
  forgetpassword() {
    this.service.forget({ email: this.profileForm.value.email, password: this.profileForm.value.password }).subscribe((newUser: any) => {
      // console.log(newUser.message)
      this.message = newUser.message
      if(this.message='password is suscessfuly updated'){
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'password is suscessfuly updated' });
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'something went wrong' });
      }

    });
  }
}