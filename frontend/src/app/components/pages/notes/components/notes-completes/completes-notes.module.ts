import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteNotesRouting } from './completes-notes.routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NotesCompletesComponent } from './components/notes-completes.component';

@NgModule({
    declarations: [NotesCompletesComponent],
    imports: [ 
        CommonModule,
        CompleteNotesRouting,
        SharedModule,
        ReactiveFormsModule,
    ],
    exports: [],
    providers: [],
})
export class CompletesNotes {}