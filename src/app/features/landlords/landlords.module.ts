import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LandlordsRoutingModule, routedComponents } from './landlords-routing.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';



@NgModule({
  imports: [
    CommonModule,
    LandlordsRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    routedComponents
  ]
})
export class LandlordsModule { }
