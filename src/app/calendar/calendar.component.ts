import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent  extends DefaultEditor implements OnInit {
  @Output() date: EventEmitter<any> = new EventEmitter();
  constructor() {
    super()
   }

  ngOnInit(): void {
  }
  updateValue(d){
    this.cell.newValue=d.value
   this.date.emit(this.cell.newValue)
  }
}
