import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyComponent } from './verify/verify.component';


const routes: Routes = [
//   {
//     path:"",
//     component:HomeComponent,
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

