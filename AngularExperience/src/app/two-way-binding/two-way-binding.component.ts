import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {
  //step1
  user: any;
  //step2 
  user_name: string = '';
  disable: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  
  clearInput() {
    this.user_name = '';
    this.disable = true;
  }
  disablebutton(event: any) {
    if (event.target.value =='') {
      this.disable = true;
    } else {
      this.disable = false;
    }
  }

}
