import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-okbutton',
  template: `
  <div class="form-group">
  <button
    type= "type || button" class="btn btn-primary {{className}}" (click)="onClickEvent.emit($event)" >
          Save
  </button>
  </div>
  `,
  styleUrls: []
})
export class OkbuttonComponent implements OnInit {

  @Input() className: string;
  @Input() type: string;
  @Input() disabled: boolean;
  @Output() onClickEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
}
