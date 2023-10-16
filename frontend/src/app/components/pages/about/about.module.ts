import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRouting } from './about.routing.module';
import { NosotrosComponent } from './components/nosotros.component';

@NgModule({
    declarations: [NosotrosComponent],
    imports: [ 
        CommonModule,
        AboutRouting,
    ],
    exports: [],
    providers: [],
})
export class AboutModule {}