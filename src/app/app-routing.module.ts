import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: 'signup', loadChildren: 'src/app/features/landlords/landlords.module#LandlordsModule' },
  { path: 'signup2', loadChildren: 'src/app/features/signup/signup.module#SignupModule' },
  { path: 'home', component: HomeComponent }
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
