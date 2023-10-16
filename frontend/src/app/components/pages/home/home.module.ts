import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { HomeRouting } from './home.routing.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [ 
        CommonModule,
        HomeRouting,
        SharedModule,
    ],
    exports: [],
    providers: [],
})
export class HomeModule {}