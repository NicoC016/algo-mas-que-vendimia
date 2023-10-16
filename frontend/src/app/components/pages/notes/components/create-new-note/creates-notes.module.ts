import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNotesRouting } from './creates-notes.routing.module';
import { CreateNewNoteComponent } from './components/create-new-note.component';
import { SharedModule } from 'src/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [CreateNewNoteComponent],
    imports: [ 
        CommonModule,
        CreateNotesRouting,
        SharedModule,
        ReactiveFormsModule,
    ],
})
export class CreateNotesModule {}