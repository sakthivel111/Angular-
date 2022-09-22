import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ComponentComponent } from './component/component.component';
import { ContectComponent } from './contect/contect.component';
import { InputstoreComponent } from './inputstore/inputstore.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
      {
        path:'about', 
        component:AboutComponent,
        children:[
          {
            path:'inputstore',
            component:InputstoreComponent
          },
          {
            path:':ksdkskdks',
            component:ComponentComponent
          }
        ]},
        {
          path:'contect', 
          component:ContectComponent,
          
        }
        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
