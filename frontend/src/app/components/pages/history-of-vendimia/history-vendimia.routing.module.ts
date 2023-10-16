import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HistoryOfVendimiaComponent } from './components/history-of-vendimia.component';


const routes: Routes = [
    { path: '', component: HistoryOfVendimiaComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HistoryVendimiaRouting {}
