import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LandlordsRoutingModule, routedComponents } from './landlords-routing.module';
import { AngularMaterialModule } from '../../shared/angular-material.module';

import {
  AuthMethods,
  AuthProvider,
  AuthProviderWithCustomConfig,
  CredentialHelper,
  FirebaseUIAuthConfig,
  FirebaseUIModule
} from 'firebaseui-angular';

const facebookCustomConfig: AuthProviderWithCustomConfig = {
  provider: AuthProvider.Facebook,
  customConfig: {
    scopes: [
      'public_profile',
      'email',
      'user_likes',
      'user_friends'
    ],
    customParameters: {
      // Forces password re-entry.
      auth_type: 'reauthenticate'
    }
  }
};

const firebaseUiAuthConfig: FirebaseUIAuthConfig = {
  providers: [
    AuthProvider.Google,
    facebookCustomConfig,
    AuthProvider.Twitter,
    //AuthProvider.Github,
    AuthProvider.Password,
    AuthProvider.Phone
  ],
  method: AuthMethods.Popup,
  tos: '/termsofservice',
  privacyPolicyUrl: '/privacy',
  credentialHelper: CredentialHelper.AccountChooser,
  autoUpgradeAnonymousUsers: true,
  disableSignInSuccessCallback: true
};


@NgModule({
  imports: [
    CommonModule,
    LandlordsRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  declarations: [
    routedComponents
  ]
})
export class LandlordsModule { }
