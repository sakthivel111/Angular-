import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { VerifyComponent } from './verify/verify.component';
import {ToastModule} from 'primeng/toast';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SignInComponent,
    SignUpComponent,
    HomepageComponent,
    VerifyComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule, 
   HttpClientModule,
   ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
