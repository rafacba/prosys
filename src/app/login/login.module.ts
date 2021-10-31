import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [ CommonModule ],
    exports: [
        LoginComponent,
        RegisterComponent
    ],
    providers: [],
})
export class LoginModule {}