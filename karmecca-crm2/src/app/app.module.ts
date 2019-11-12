import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule, MatToolbarModule, MatCardModule, MatSortModule, MatButtonModule, MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatTableModule } from '@angular/material';
import {UserTableComponent} from './components/user-table/user-table.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import {FormsModule} from '@angular/forms';
import { MatCard} from '@angular/material';
// import {MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule} from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { ViewAppsComponent } from './view-apps/view-apps.component';
import { EmailButtonComponent } from './email-button/email-button.component';
import { RegisterComponent } from './register/register.component';


/** TODO: remove when this is no longer needed */
import 'hammerjs';


import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
import { ApplicationtableComponent } from './applicationtable/applicationtable.component';
// import { HeaderComponent } from './header/header.component';
import { RegisterconfirmComponent } from './registerconfirm/registerconfirm.component';



@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    LoginComponent,
    AdminComponent,
    UserTableComponent,
    HomeComponent,

    RegisterComponent,
    ApplicationtableComponent,
    RegisterconfirmComponent,



    ViewAppsComponent,
    EmailButtonComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatCard,
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
        path: 'applicationtable',
        component: ApplicationtableComponent
      },
      {
        path: 'registerconfirm',
        component: RegisterconfirmComponent
      },
      {
        // ANY NEW COMPONENTS NEED TO BE PLACED BEFORE THIS ONE
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

    MatPaginatorModule,
    MatSortModule,

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
