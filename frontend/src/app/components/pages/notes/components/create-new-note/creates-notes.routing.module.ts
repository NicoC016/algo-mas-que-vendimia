import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreateNewNoteComponent } from './components/create-new-note.component';



const routes: Routes = [
    { path: '', component: CreateNewNoteComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateNotesRouting {}
