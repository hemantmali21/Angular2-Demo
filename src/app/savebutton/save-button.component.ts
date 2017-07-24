import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-save-button',
  template: `
  <div class="form-group">
  <button
    type= "type || button" class="btn btn-primary" (click)="onClickEvent.emit($event)"
    [disabled]= "disabled">
          Save
  </button>
  </div>
  `,
  styleUrls: []
})
export class SaveButtonComponent implements OnInit {

  @Input() className: string;
  @Input() type: string;
  @Input() disabled: boolean = false;
  @Output() onClickEvent: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup

  constructor() { }

  ngOnInit() {
  }
}
