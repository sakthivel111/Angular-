import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AngularExperience';
   a:any[] = [];
   //username: any;
  
  use(event: string): void {
    console.log('SSSSSSSSSSSSSSSS',event)
    //const result = event
    this.a.push(event)
    console.log('iiiiiiiiiiiiiiii',this.a)
  }
}
