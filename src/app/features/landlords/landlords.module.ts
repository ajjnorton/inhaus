import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLandlordComponent} from './add-landlord/add-landlord.component';
import { SignupComponent} from './signup/signup.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddLandlordComponent,
    SignupComponent
  ]
})
export class LandlordsModule { }
