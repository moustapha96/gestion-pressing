import { Routes } from '@angular/router';
import { AcceuilComponent } from 'src/app/pages/acceuil/acceuil.component';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';


export const AuthLayoutRoutes: Routes = [
    /* { path: 'login',          component: LoginComponent },
     { path: 'register',       component: RegisterComponent } */
    // { path: 'auth/acceuil', component: AcceuilComponent }
    { path: 'acceuil', component: AcceuilComponent },
];
