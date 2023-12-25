import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './main-components/login-form/login-form.component';
import { MyPageComponent } from './main-components/my-page/my-page.component';
import { HomeComponent } from './main-components/home/home.component';
import { UserSearchComponent } from './main-components/user-search/user-search.component';
import { ImportUserComponent } from './main-components/import-user/import-user.component';
import { GetAllUsersComponent } from './main-components/get-all-users/get-all-users.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path: "login", component: LoginFormComponent },
  { path: "me", component: MyPageComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "search-user", component: UserSearchComponent, canActivate: [AdminGuard] },
  { path: "import-user", component: ImportUserComponent },
  { path: "get-all-users", component: GetAllUsersComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
