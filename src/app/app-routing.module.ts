import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandlordSignupComponent } from './features/landlords/landlord-signup/landlord-signup.component'
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: 'login', component: LandlordSignupComponent },
  { path: 'home', component: HomeComponent },
  // Lazy load landlord signup module
  { path: 'landlordSignup', loadChildren: 'app/features/landlords/landlord-signup/landlord-signup.module#LandlordSignupRoutingModule' },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
