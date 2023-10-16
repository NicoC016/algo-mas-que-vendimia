import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReinasComponent } from './components/reinas.component';
import { ReinasRouting } from './reinas.routing.module';

@NgModule({
    declarations: [ReinasComponent],
    imports: [
        CommonModule,
        ReinasRouting,
    ],
    exports: [],
    providers: [],
})
export class ReinasModule {}