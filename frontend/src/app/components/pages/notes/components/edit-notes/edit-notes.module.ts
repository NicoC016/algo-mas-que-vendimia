import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditNotesComponent } from './components/edit-notes.component';
import { EditNotesRouting } from './edit-notes.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
    declarations: [EditNotesComponent],
    imports: [ 
        CommonModule,
        EditNotesRouting,
        SharedModule,
        ReactiveFormsModule,
    ],
    exports: [],
    providers: [],
})
export class EditNoteModule {}