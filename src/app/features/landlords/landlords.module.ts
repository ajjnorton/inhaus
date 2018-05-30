import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AddLandlordComponent } from './add-landlord/add-landlord.component';
import { LandlordsRoutingModule, routedComponents } from './landlords-routing.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';



@NgModule({
  imports: [
    CommonModule,
    LandlordsRoutingModule,
    AngularMaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [
    AddLandlordComponent,
    routedComponents
  ]
})
export class LandlordsModule { }
