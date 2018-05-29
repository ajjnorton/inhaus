import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ILandlord, Landlord } from '../../../shared/models/landlord';

@Component({
  selector: 'app-landlord-signup',
  templateUrl: './landlord-signup.component.html',
  styleUrls: ['./landlord-signup.component.scss']
})
export class LandlordSignupComponent implements OnInit {

  form;
  landlordArray: ILandlord[] = [];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      landlordsName: fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
      }),
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    console.log('signup');
  }

  login() {
    console.log('logger');
    console.log(this.form.value);
  }

}
