import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { LandlordSignupComponent} from './landlord-signup.component' 


const routes: Routes = [
    {
      path: '',
      component: LandlordSignupComponent
    }
  ];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class LandlordSignupRoutingModule { }
