import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-okbutton',
  template: `
  <div class="form-group">
  <button
    type= "type || button" class="btn btn-primary" (click)="onClickEvent.emit($event)"
    disabled= "false">
          Save
  </button>
  </div>
  `,
  styleUrls: []
})
export class OkbuttonComponent implements OnInit {

  @Input() className: string;
  @Input() type: string;
  @Input() disabled: boolean = false;
  @Output() onClickEvent: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup

  constructor() { }

  ngOnInit() {
   // this.isDisabled();
  }

 /* isDisabled() {
      if (this.form.valid) {
          this.disabled = false;
      }
  }*/
}
