import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'form-actions',
  templateUrl: './form-actions.component.html',
  styleUrls: ['./form-actions.component.css'],
})
export class FormActionsComponent implements OnInit {

  @Input() className: string;
  @Input() type: string;
  @Input() disabled: boolean = false;
  @Input() saveRequired: boolean = false;
  @Input() cancelRequired: boolean = false;
  @Input() backRequired: boolean = false;
  @Input() editRequired: boolean = false;
  @Input() insertRequired: boolean = false;
  @Input() saveUrl: string;
  @Input() backUrl: string;
  @Input() saveButtonClass: string;
  @Output() onReset: EventEmitter<string> = new EventEmitter<string>();
  @Output() onBack: EventEmitter<string> = new EventEmitter<string>();
  @Output() onInsert: EventEmitter<string> = new EventEmitter<string>();
  @Output() onEdit: EventEmitter<string> = new EventEmitter<string>();

   /*@Input() resetButtonClick: any;
   @Input() backButtonClick: any;
   @Input() insertButtonClick: any;
   @Input() editButtonClick: any;*/
  constructor() { }

  ngOnInit() {
  }

  resetButtonClick() {
        this.onReset.emit('');
  }

  backButtonClick() {
     this.onBack.emit('');
  }

   insertButtonClick() {
     this.onInsert.emit('');
  }

   editButtonClick() {
     this.onEdit.emit('');
  }
}
