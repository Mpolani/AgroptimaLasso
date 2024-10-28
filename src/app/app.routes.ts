import { Routes } from '@angular/router';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginRegisterComponent,
        canActivate: []
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: []
    },
    { path: '**', pathMatch: 'full', redirectTo: 'login' },
];
