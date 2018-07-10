import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-betapage',
  templateUrl: './betapage.component.html',
  styleUrls: ['./betapage.component.scss']
})
export class BetapageComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }


  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

}
