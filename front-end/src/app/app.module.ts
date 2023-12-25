import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './main-components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyPageComponent } from './main-components/my-page/my-page.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserSearchComponent } from './main-components/user-search/user-search.component';
import { HomeComponent } from './main-components/home/home.component';
import { ImportUserComponent } from './main-components/import-user/import-user.component';
import { GetAllUsersComponent } from './main-components/get-all-users/get-all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    NavBarComponent,
    LoginFormComponent,
    MyPageComponent,
    UserDetailsComponent,
    UserSearchComponent,
    HomeComponent,
    ImportUserComponent,
    GetAllUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
