import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landlord-signup',
  templateUrl: './landlord-signup.component.html',
  styleUrls: ['./landlord-signup.component.scss']
})
export class LandlordSignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('signup');
  }

}
