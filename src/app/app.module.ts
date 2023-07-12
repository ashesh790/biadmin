import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { PropBoxComponent } from './prop-box/prop-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    PropBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
