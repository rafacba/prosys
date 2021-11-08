// ======================================================
// Common
// ======================================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// ======================================================
// Pages
// ======================================================
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PersonalComponent } from './personal/personal.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// ======================================================
// Routes
// ======================================================
import { PAGES_ROUTES } from './pages.routes';
import { ComponentModule } from '../components/component.module';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        PersonalComponent,
        AccountSettingsComponent,
    ],
    imports: [ 
        CommonModule,
        SharedModule,
        ComponentModule,
        PAGES_ROUTES,
        FormsModule,
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    providers: [],
})
export class PagesModule {}