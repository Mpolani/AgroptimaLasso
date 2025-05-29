import { Routes } from '@angular/router';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FarmsComponent } from './components/farms/farms.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ProfilesRatingComponent } from './components/profiles-rating/profiles-rating.component';
import { PhasesAppComponent } from './components/phases-app/phases-app.component';
import { RecordComponent } from './components/record/record.component';
import { PracticeComponent } from './components/practice/practice.component';

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
    {
        path: 'farms',
        component: FarmsComponent,
        canActivate: []
    },
    {
        path: 'profiles',
        component: ProfilesComponent,
        canActivate: []
    },
    {
        path: 'rating',
        component: ProfilesRatingComponent,
        canActivate: []
    },
    {
        path: 'phases', 
        component: PhasesAppComponent,
        canActivate:[]
    }, 
    {
        path: 'record', 
        component: RecordComponent, 
        canActivate:[]
    },
    { 
        path:'practice',
        component:PracticeComponent,
        canActivate:[]

    },
    { path: '**', pathMatch: 'full', redirectTo: 'login' },
];
