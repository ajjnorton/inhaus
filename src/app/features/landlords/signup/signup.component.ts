import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ILandlord, Landlord } from '../../../shared/models/landlord';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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

  ngOnInit() {
    console.log('signup');
  }

  signup() {
    console.log('logger');
    console.log(this.form.value);
  }

}
