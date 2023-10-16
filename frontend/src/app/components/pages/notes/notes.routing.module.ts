import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: 'new', loadChildren: () => import('./components/create-new-note/creates-notes.module').then(m => m.CreateNotesModule) },
    { path: 'view/:id', loadChildren: () => import('./components/notes-completes/completes-notes.module').then(m => m.CompletesNotes) },
    { path: 'edit/:id', loadChildren: () => import('./components/edit-notes/edit-notes.module').then(m => m.EditNoteModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotesRouting {}
