import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { PropBoxComponent } from './prop-box/prop-box.component';
import { AddUpdatePropertyFormComponent } from './add-update-property-form/add-update-property-form.component';
import { FormsModule } from '@angular/forms';
import { Serv1Component } from './serv1/serv1.component';
@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    PropBoxComponent,
    AddUpdatePropertyFormComponent,
    Serv1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
