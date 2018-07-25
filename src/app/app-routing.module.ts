import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { PrivacyComponent } from './web/privacy/privacy.component';
import { TermsComponent } from './web/terms/terms.component';
import { BetapageComponent} from './web/betapage/betapage.component';
import { ResponsepageComponent} from './web/responsepage/responsepage.component';
import { AuthGuard } from './shared/auth.guard';
import { DashboardComponent} from './features/landlords/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'signup', loadChildren: 'src/app/features/landlords/signup/signup.module#SignupModule' },
  { 
    path: 'inhaus', 
    canActivate:[AuthGuard],
    loadChildren: 'src/app/features/landlords/shell/shell.module#ShellModule' },
  { path: 'home', component: HomeComponent },
  { path: 'welcome', component: BetapageComponent },
  { path: 'responses', component: ResponsepageComponent },
  { path: 'dashboard', component:DashboardComponent},
  { path: 'privacy', component: PrivacyComponent },
  { path: 'termsofservice', component: TermsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

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
