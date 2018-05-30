import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLandlordComponent } from './add-landlord/add-landlord.component';

import { LandlordsRoutingModule, routedComponents } from './landlords-routing.module'



@NgModule({
  imports: [
    CommonModule,
    LandlordsRoutingModule
  ],
  declarations: [
    AddLandlordComponent,
    routedComponents
  ]
})
export class LandlordsModule { }
