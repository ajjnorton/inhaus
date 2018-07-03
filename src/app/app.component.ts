import { Component } from '@angular/core';
import { ILandlord, Landlord } from './shared/models/landlord';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  landingPage=false;



  constructor() {
 

  }

  //data: ILandlord;
  data: ILandlord = {
    first_name: null,
    last_name: null,
    email: null
  };


}


