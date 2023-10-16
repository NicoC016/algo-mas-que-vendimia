import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EditNotesComponent } from './components/edit-notes.component';


const routes: Routes = [
    { path: '', component: EditNotesComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditNotesRouting {}
