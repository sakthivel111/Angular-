import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyComponent } from './verify/verify.component';


const routes: Routes = [
//   {
//     path:"",
//     component:NavComponent,
//  },
  {
    path:"sign-in",
    component:SignInComponent
  },

  {
    path:"sign-up",
    component:SignUpComponent
  },
{
  path:'verify',
  component:VerifyComponent
},
{
  path:'homepage',
  component:HomepageComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

