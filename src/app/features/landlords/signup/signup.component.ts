import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


import { ILandlord, Landlord } from '../../../shared/models/landlord';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  landlordArray: ILandlord[] = [];
  form;

  user: any[] = [];


  constructor(fb: FormBuilder, public afAuth: AngularFireAuth) {

    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.afAuth.auth.signOut();
    this.afAuth.auth.onAuthStateChanged(function (user) {
      if (user) {
        this.user = user;
        console.log('user logged in');
        console.log(user);
        user.sendEmailVerification().then(function () {
          console.log('email sent');
        }).catch(function (error) {
          console.log('error');
        });
      } else {
        console.log('no user');
      }
    })


  }


  ngOnInit() {
    console.log('signup');
  }


  signup() {
    console.log('logger');
    console.log(this.form.value);
    //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());

    var user = this.afAuth.auth.createUserWithEmailAndPassword(this.form.value.email, this.form.value.password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    })
  }



}
