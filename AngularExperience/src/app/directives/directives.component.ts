import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
 
  testingif=null;//Texting of If
  users:any[] = [{ id:1,name: 'sakthi', age: 22 },
                 {id:2,name: 'vel', age: 22 }];  //Texting of for
  constructor() { }

  ngOnInit(): void {
  }

}
