import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PersonalComponent } from './personal/personal.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const pagesRoutes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: 'progress', component: ProgressComponent},
            { path: 'personal', component: PersonalComponent },
            { path: 'acc-settings', component: AccountSettingsComponent },
            { path: '', pathMatch: 'full', redirectTo: '/dashboard'}
        ] 
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);