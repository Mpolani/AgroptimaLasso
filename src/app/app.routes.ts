import { Routes } from '@angular/router';
import { LoginRegisterComponent } from './components/login-register/login-register.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginRegisterComponent,
        canActivate: []
    },
    { path: '**', pathMatch: 'full', redirectTo: 'login' },
];
