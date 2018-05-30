import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

import { SignupComponent } from './signup/signup.component'


const routes: Routes = [
  {
    path: '',
    component: SignupComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class LandlordsRoutingModule { }

export const routedComponents = [
  SignupComponent
];
