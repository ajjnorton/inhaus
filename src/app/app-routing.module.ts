import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import {PrivacyComponent} from './web/privacy/privacy.component';
import { TermsComponent } from './web/terms/terms.component';


const routes: Routes = [
  { path: 'signup', loadChildren: 'src/app/features/landlords/landlords.module#LandlordsModule' },
  { path: 'home', component: HomeComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'termsofservice', component: TermsComponent }
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: '**', redirectTo: 'home', pathMatch: 'full' }

];
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
