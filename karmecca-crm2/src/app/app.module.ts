import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule, MatToolbarModule, MatCardModule, MatSortModule, MatButtonModule, MatInputModule } from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ViewAppsComponent } from './view-apps/view-apps.component';
import { EmailButtonComponent } from './email-button/email-button.component';
import { RegisterComponent } from './register/register.component';

/** TODO: remove when this is no longer needed */
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    HeaderComponent,
    ViewAppsComponent,
    EmailButtonComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        //ANY NEW COMPONENTS NEED TO BE PLACED BEFORE THIS ONE
        path: '',
        component: HomeComponent
      },
      {
        path: 'viewApps',
        component: ViewAppsComponent
      }
    ]),
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }