import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ActoCentralComponent } from './components/acto-central.component';

const routes: Routes = [
    { path: '', component: ActoCentralComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActoCentralRouting {}
