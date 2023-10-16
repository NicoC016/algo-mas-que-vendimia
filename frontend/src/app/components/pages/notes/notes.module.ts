import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNotesModule } from './components/create-new-note/creates-notes.module';
import { NotesRouting } from './notes.routing.module';
import { NotesService } from './services/service-notes.service';
import { EditNoteModule } from './components/edit-notes/edit-notes.module';
import { CompletesNotes } from './components/notes-completes/completes-notes.module';

@NgModule({
    imports: [ 
        CommonModule,
        CreateNotesModule,
        EditNoteModule,
        CompletesNotes,
        NotesRouting,
    ],
    providers: [NotesService],
})
export class NotesModule {}