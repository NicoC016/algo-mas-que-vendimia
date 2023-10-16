import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryVendimiaRouting } from './history-vendimia.routing.module';
import { HistoryOfVendimiaComponent } from './components/history-of-vendimia.component';

@NgModule({
    declarations: [HistoryOfVendimiaComponent],
    imports: [ 
        CommonModule,
        HistoryVendimiaRouting, 
    ],
    exports: [],
    providers: [],
})
export class HistoryVendimiaModule {}