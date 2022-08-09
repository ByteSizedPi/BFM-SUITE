import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { NewTemplateViewComponent } from './views/new-template-view/new-template-view.component';
import { SelectTemplateViewComponent } from './views/select-template-view/select-template-view.component';
import { MarkingViewComponent } from './views/marking-view/marking-view.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    LandingViewComponent,
    NewTemplateViewComponent,
    SelectTemplateViewComponent,
    MarkingViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
