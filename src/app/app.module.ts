import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import {OkbuttonComponent} from './okbutton/okbutton.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventTumbnailComponent } from './event-tumbnail/event-tumbnail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormActionsComponent } from './form-actions/form-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    EventListComponent,
    EventTumbnailComponent,
    NavBarComponent,
    FormActionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
