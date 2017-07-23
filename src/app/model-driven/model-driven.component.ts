import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  form: FormGroup;
  nameError: string;
  cityError: string;

  disabled: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // create form
    /* this.form = new FormGroup({
         name: new FormControl(''),
         city: new FormControl('')
     });*/



    this.buildForm();

    // watch for changes and validate
    this.form.valueChanges.subscribe(data => { this.validateForm() });
//     this.isDisabled();
  }

  buildForm() {
    this.form = this.fb.group({
      name: [''],
      city: ['']
    })

    console.log(this.form);

  }
  validateForm() {
    // validate each field
    this.nameError = '';
    this.cityError = '';
    let name = this.form.get('name');
    let city = this.form.get('city');

    if (name.invalid && name.dirty) {
      this.nameError = 'Name is required';
    }

    if (city.invalid && city.dirty) {
      this.cityError = 'City is required';
    }
  }
  saveUser() {
    console.log('save user', this.form.value);

  }

  isDisabled() {
    if (this.form.valid) {
      this.disabled = false;
    }
  }
}
