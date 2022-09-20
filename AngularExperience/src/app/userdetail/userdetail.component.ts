import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {
@Input('userdetails')user:any;
@Input() userIndex:any;
@Output() removeUserEvent:any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  removeUser(){
    console.log(this.userIndex)
    this.removeUserEvent.emit(this.userIndex)
  }

}
