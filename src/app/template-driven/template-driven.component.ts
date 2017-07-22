import { Component, OnInit } from '@angular/core';

export class User {
  name: string;
  city: string;
}


@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit() {
    this.user = {
      name: 'Hemant',
      city: 'Mumbai'
    }
  }

  get diagnostic() {
    return JSON.stringify(this.user);
  }

  saveUser() {
    console.log(this.user);
  }
}
