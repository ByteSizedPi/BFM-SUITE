import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  { path: 'landing', component: LandingViewComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
