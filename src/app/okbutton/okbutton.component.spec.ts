import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkbuttonComponent } from './okbutton.component';

describe('OkbuttonComponent', () => {
  let component: OkbuttonComponent;
  let fixture: ComponentFixture<OkbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
