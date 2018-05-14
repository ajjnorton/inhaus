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

  landlordArray: ILandlord[] = [];


  form;


  constructor(fb: FormBuilder) {
    this.form = fb.group({
      landlordsName: fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
      }),
      email: ['', [Validators.required, Validators.email]]
    });
  }

  //data: ILandlord;
  data: ILandlord = {
    first_name: null,
    last_name: null,
    email: null
  };

  addLandlord() {
    console.log(this.data);
    console.log();
    /*
    this.data.
    let newLandlord = new Landlord();
    newLandlord = Object.assign(newLandlord, data);
    this.landlordArray.push(newLandlord);
    console.log(newLandlord);
    */

  }

  login() {
    console.log('logger');
    console.log(this.form.value);
  }


}


