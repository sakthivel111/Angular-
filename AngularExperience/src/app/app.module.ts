import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { InputdataComponent } from './inputdata/inputdata.component';
import { InputstoreComponent } from './inputstore/inputstore.component';
import { AboutComponent } from './about/about.component';
import { ContectComponent } from './contect/contect.component';
import { ComponentComponent } from './component/component.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    DirectivesComponent,
    UserlistComponent,
    UserdetailComponent,
    InputdataComponent,
    InputstoreComponent,
    AboutComponent,
    ContectComponent,
    ComponentComponent,
    PagenotfoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
