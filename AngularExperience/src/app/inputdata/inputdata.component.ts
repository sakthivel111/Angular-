import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inputdata',
  templateUrl: './inputdata.component.html',
  styleUrls: ['./inputdata.component.scss']
})
export class InputdataComponent implements OnInit { 
  @Output() newItemEvent = new EventEmitter();
  username=''
  disable:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  clear(event:any){
    if (this.username =='') {
      this.disable = true;
      
    } else {
      this.disable = false;
    }
  }
  veiw() {
    this.newItemEvent.emit(this.username);
    this.username = '';
    this.disable = true;

    }
  }


