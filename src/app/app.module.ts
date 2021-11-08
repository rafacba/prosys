// ======================================================
// Common
// ======================================================
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTES } from './app.routes';

// ======================================================
// Pages
// ======================================================

import { AppComponent } from './app.component';

// ======================================================
// Modules
// ======================================================
import { PagesModule } from './pages/pages.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
