import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddLandlordComponent } from './features/landlords/add-landlord/add-landlord.component';
import { LandlordSignupComponent } from './features/landlords/landlord-signup/landlord-signup.component';
import { AppRoutingModule} from './app-routing.module';
import { RouterLink } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';





@NgModule({
  declarations: [
    AppComponent,
    AddLandlordComponent,
    LandlordSignupComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    NgReduxModule
  

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

