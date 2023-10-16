import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NosotrosComponent } from './components/nosotros.component';

const routes: Routes = [
    { path: '', component: NosotrosComponent },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutRouting {}
