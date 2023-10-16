import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotesCompletesComponent } from './components/notes-completes.component';


const routes: Routes = [
    { path: '', component: NotesCompletesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompleteNotesRouting {}
