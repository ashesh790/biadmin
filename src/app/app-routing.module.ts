import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropBoxComponent } from './prop-box/prop-box.component';
import { Serv1Component } from './serv1/serv1.component';

const routes: Routes = [
  {
    path: 'login', component: PropBoxComponent
  },
  {
    path: 'services', component: Serv1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
