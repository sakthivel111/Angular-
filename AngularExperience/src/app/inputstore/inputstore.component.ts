import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputstore',
  templateUrl: './inputstore.component.html',
  styleUrls: ['./inputstore.component.scss']
})
export class InputstoreComponent implements OnInit {
  @Input('inputText')inputText:any;

  isActive:boolean=true;

  constructor() { }
  ngOnInit(): void {
  }
  
veiw(){
  console.log('klllllllllllllllllll',this.inputText)
}
strick( _$event:any){

   this.isActive=!this.isActive
}
}
