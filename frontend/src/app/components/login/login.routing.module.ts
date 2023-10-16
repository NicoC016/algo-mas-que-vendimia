import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login.component';


const routes: Routes = [
    { path: '', component: LoginComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRouting {}
