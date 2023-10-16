import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login.component';
import { LoginRouting } from './login.routing.module';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
    declarations: [LoginComponent],
    imports: [ 
        CommonModule, 
        LoginRouting,
        
    ],
    exports: [],
    providers: [],
})
export class LoginModule {}