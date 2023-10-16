import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActoCentralModule } from './pages/acto-central/page-acto-central.module';
import { NotesModule } from './pages/notes/notes.module';
import { HistoryVendimiaModule } from './pages/history-of-vendimia/history-vendimia.module';
import { AboutModule } from './pages/about/about.module';
import { ProfileModule } from './pages/profile/profile.module';
import { ReinasModule } from './pages/reinas/reinas.module';
import { HomeModule } from './pages/home/home.module';
import { PagesRouting } from './pages.routing.module';



@NgModule({

  imports: [
    CommonModule,
    PagesRouting,
    HomeModule,
    NotesModule,
    ActoCentralModule,
    HistoryVendimiaModule,
    AboutModule,
    ProfileModule,
    ReinasModule,
  
  ],
  exports:[
    HistoryVendimiaModule,
  ],
  
})
export class PagesModule { }
