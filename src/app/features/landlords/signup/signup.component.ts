import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


import { ILandlord, Landlord } from '../../../shared/models/landlord';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { MatSnackBar } from '@angular/material';
import { FirebaseUISignInSuccess } from 'firebaseui-angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  landlordArray: ILandlord[] = [];
  form: FormGroup;

  user: any[] = [];


  constructor(public fb: FormBuilder, public afAuth: AngularFireAuth, public snackBar: MatSnackBar) {

    this.createForm();

    // this should sign a user in if they are already logged in.
    this.afAuth.auth.signOut();
    // keep track of the user state upon signout we should navigate to the front page.
    this.afAuth.auth.onAuthStateChanged(function (user) {
      if (user) {
        this.user = user;
        console.log('user logged in');
        console.log(user);
        console.log(user.providerData[0].providerId);
        user.providerData.forEach(function (profile) {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);
        });
        // if the signon provider 
        if (user.providerData[0].providerId == "password") {
          user.sendEmailVerification().then(function () {
            console.log('email sent');
          }).catch(function (error) {
            console.log('error');
          });
        } else {
          console.log("Not a email user so need to verify email");
          user.updateProfile({
            displayName: "Jane Q. User",
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(function () {
            // Update successful.
          }).catch(function (error) {
            // An error happened.
          });
        }
      } else {
        console.log('no user');
      }
    });


  }


  ngOnInit() {
    console.log('signup');
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  /*
    signup() {
      console.log('logger');
      console.log(this.form.value);
      const self = this;
  
      //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  
      const user = this.afAuth.auth.createUserWithEmailAndPassword(this.form.value.email, this.form.value.password).catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        self.handleSignupErrors(errorCode);
      });
  
    }
    */





  handleSignupErrors(errorCode: string) {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        // Thrown if there already exists an account with the given email address.
        this.snackBar.open('Sorry this email address is already in use! Please try again.', 'Goto Login?', {
          duration: 6000,
        });
        this.resetForm();
        break;
      case 'auth/invalid-email':
        // Thrown if the email address is not valid.
        this.snackBar.open('Sorry this is not a valid email address!', undefined, {
          duration: 6000,
        });
        break;
      case 'auth/operation-not-allowed':
        // Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.
        break;
      case 'auth/weak-password':
        // Thrown if the password is not strong enough
        break;
      default:
      // unknown error has occured
    }
  }

  resetForm() {
    this.form.markAsPristine();
    this.form.updateValueAndValidity();
    this.form.markAsUntouched();
    this.form.reset();
    Object.keys(this.form.controls).forEach(key => {
      this.form.controls[key].setErrors(null);
    });
  }



}
