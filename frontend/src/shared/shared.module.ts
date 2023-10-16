import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsLabelComponent } from './brands-label/brands-label.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
    declarations: [
        BrandsLabelComponent,
        NavbarComponent,
    ],
    imports: [ 
        CommonModule,
        CKEditorModule, 
    ],
    exports: [
        BrandsLabelComponent,
        NavbarComponent,
        CKEditorModule,
    ],
    providers: [],
})
export class SharedModule {}