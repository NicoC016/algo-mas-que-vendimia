import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile.component';
import { ProfileRouting } from './profile.routing.module';

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        ProfileRouting, 
    ],
    exports: [],
    providers: [],
})
export class ProfileModule {}