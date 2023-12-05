import { Routes } from '@angular/router';
import {UsersSigninPageComponent} from '@users/pages/users-signin-page/users-signin-page.component';
import {UsersSigninWithOtpComponent} from '@users/pages/users-signin-with-otp/users-signin-with-otp.component';
import {UsersSignupPageComponent} from '@users/pages/users-signup-page/users-signup-page.component';

export const USER_ROUTES: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: 'signin', component: UsersSigninPageComponent},
    {path: 'signinwithotp', component: UsersSigninWithOtpComponent},
    {path: 'signup', component: UsersSignupPageComponent}
];
