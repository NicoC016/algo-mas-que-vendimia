import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActoCentralComponent } from './components/acto-central.component';
import { ActoCentralRouting } from './acto-central.routing.module';

@NgModule({
    declarations: [ActoCentralComponent],
    imports: [ 
        CommonModule ,
        ActoCentralRouting,
    ],
    exports: [],
    providers: [],
})
export class ActoCentralModule {}