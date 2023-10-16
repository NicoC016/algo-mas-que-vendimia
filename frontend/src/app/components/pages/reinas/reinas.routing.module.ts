import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReinasComponent } from './components/reinas.component';

const routes: Routes = [
    { path: '', component: ReinasComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReinasRouting {}
