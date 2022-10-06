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
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';



const ngx:NgxUiLoaderConfig ={
"bgsColor": "red",
"bgsOpacity": 0.5,
"bgsPosition": "bottom-right",
"bgsSize": 60,
"bgsType": "ball-spin-clockwise",
"blur": 5,
"delay": 0,
"fastFadeOut": true,
"fgsColor": "red",
"fgsPosition": "center-center",
"fgsSize": 60,
"fgsType": "ball-spin-clockwise",
"gap": 24,
"logoPosition": "center-center",
"logoSize": 220,
"logoUrl": "",
"masterLoaderId": "master",
"overlayBorderRadius": "0",
"overlayColor": "rgba(40, 40, 40, 0.8)",
"pbColor": "red",
"pbDirection": "ltr",
"pbThickness": 3,
"hasProgressBar": true,
"text": "",
"textColor": "#FFFFFF",
"textPosition": "center-center","maxTime": -1,"minTime": 300
}
NgxUiLoaderModule.forRoot(ngx),
NgxUiLoaderHttpModule.forRoot({showForeground:true});



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SignInComponent,
    SignUpComponent,
    HomepageComponent,
    VerifyComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule, 
    HttpClientModule,
    ToastModule,
   
     NgxUiLoaderHttpModule,
      NgxUiLoaderModule 
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
