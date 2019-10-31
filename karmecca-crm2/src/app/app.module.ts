import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import {UserTableComponent} from './components/user-table/user-table.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatCard} from '@angular/material';
/** TODO: remove when this is no longer needed */
import 'hammerjs';


import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ApplicationtableComponent } from './applicationtable/applicationtable.component';
import { HeaderComponent } from './header/header.component';
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
      }
    ]),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
