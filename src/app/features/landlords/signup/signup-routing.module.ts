import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { SignupComponent } from './signup.component'



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
export class SignupRoutingModule { }

export const routedComponents = [
  SignupComponent
];
