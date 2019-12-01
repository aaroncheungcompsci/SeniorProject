import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule, MatToolbarModule, MatCardModule, MatSortModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {UserTableComponent} from './components/user-table/user-table.component';
import {UsertableComponent} from './components/usertable/usertable.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import {FormsModule} from '@angular/forms';

import { ViewAppsComponent } from './view-apps/view-apps.component';
import { EmailButtonComponent } from './email-button/email-button.component';
import { RegisterComponent } from './register/register.component';
import { HttpService } from './Shared/http.service';



/** TODO: remove when this is no longer needed */
import 'hammerjs';


import { MatPaginatorModule } from '@angular/material/paginator';

import { ApplicationtableComponent } from './applicationtable/applicationtable.component';
// import { HeaderComponent } from './header/header.component';
import { RegisterconfirmComponent } from './registerconfirm/registerconfirm.component';

import { MaterialModule } from '../material.module';
import { ModalComponent } from './modal/modal.component';

import { ReviewApplicantComponent} from '../app/reviewapplicant/reviewapplicant.component';
import { HopbarComponent } from './hopbar/hopbar.component';

import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    LoginComponent,
    AdminComponent,
    UsertableComponent,
    HomeComponent,

    RegisterComponent,
    ApplicationtableComponent,
    RegisterconfirmComponent,



    ViewAppsComponent,
    EmailButtonComponent,
    ReviewApplicantComponent,
    ModalComponent,
    HopbarComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    AppRoutingModule,
    MatIconModule,
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
        path: 'applicationtable',
        component: ApplicationtableComponent
      },
      {
        path: 'usertable',
        component: UsertableComponent
      },
      {
        path: 'registerconfirm',
        component: RegisterconfirmComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        // ANY NEW COMPONENTS NEED TO BE PLACED BEFORE THIS ONE
        path: '',
        component: HomeComponent
      },
      {
        path: 'viewApps',
        component: ViewAppsComponent
      },
      {
        path: 'reviewapplicant',
        component: ReviewApplicantComponent
      },
      {
        path: 'header',
        component: HeaderComponent
      }
    ]),
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatCardModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
