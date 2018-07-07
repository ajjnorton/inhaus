import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode, enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HomeComponent } from './web/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http'
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store/store';
import { environment } from '../environments/environment';
import { DashboardComponent } from './features/landlords/dashboard/dashboard.component';
import {
  AuthMethods,
  AuthProvider,
  AuthProviderWithCustomConfig,
  CredentialHelper,
  FirebaseUIAuthConfig,
  FirebaseUIModule
} from 'firebaseui-angular';
import { PrivacyComponent } from './web/privacy/privacy.component';
import { TermsComponent } from './web/terms/terms.component';
import { BetapageComponent } from './web/betapage/betapage.component';

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
    AuthProvider.Github,
    AuthProvider.Password,
    AuthProvider.Phone
  ],
  method: AuthMethods.Popup,
  tos: '<your-tos-link>',
  credentialHelper: CredentialHelper.AccountChooser,
  autoUpgradeAnonymousUsers: true,
  disableSignInSuccessCallback: true
};




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PrivacyComponent,
    TermsComponent,
    BetapageComponent
  ],
  imports: [
    AppRoutingModule,
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpModule,
    NgReduxModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
}

