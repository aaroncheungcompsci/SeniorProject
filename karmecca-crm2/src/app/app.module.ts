import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule, MatToolbarModule, MatCardModule, MatSortModule, MatButtonModule, MatInputModule, MatIconModule, MatCheckboxModule } from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {UserTableComponent} from './components/user-table/user-table.component';
import {UsertableComponent} from './components/usertable/usertable.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ViewAppsComponent } from './view-apps/view-apps.component';
import { EmailButtonComponent } from './email-button/email-button.component';
import { EmailTestComponent } from './email-button-test/email-button-test.component';
import { HttpService } from './Shared/http.service';



/** TODO: remove when this is no longer needed */
import 'hammerjs';


import { MatPaginatorModule } from '@angular/material/paginator';

import { ApplicationtableComponent } from './applicationtable/applicationtable.component';
// import { HeaderComponent } from './header/header.component';

import { MaterialModule } from '../material.module';
import { ModalComponent } from './modal/modal.component';

import { ReviewApplicantComponent} from '../app/reviewapplicant/reviewapplicant.component';
import { HopbarComponent } from './hopbar/hopbar.component';

import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddFormComponent } from './add-form/add-form.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    LoginComponent,
    UsertableComponent,
    HomeComponent,
    ApplicationtableComponent,

    ViewAppsComponent,
    EmailButtonComponent,
    EmailTestComponent,
    ReviewApplicantComponent,
    ModalComponent,
    HopbarComponent,
    AboutusComponent,
    AddFormComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonToggleModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
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
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'aboutus',
        component: AboutusComponent
      },
      {
        // ANY NEW COMPONENTS NEED TO BE PLACED BEFORE THIS ONE
        path: '',
        component: LoginComponent
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
  entryComponents: [ModalComponent, AddFormComponent]
})
export class AppModule { }
