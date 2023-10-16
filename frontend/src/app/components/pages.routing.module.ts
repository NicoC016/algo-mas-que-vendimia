import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    
    {
        path:'login', 
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
    },
    {
        path:'notes', 
        loadChildren: () => import('./pages/notes/notes.module').then(m => m.NotesModule) 
    },
    {
        path:'historia-de-vendimia',
        loadChildren: () => import('./pages/history-of-vendimia/history-vendimia.module').then(m => m.HistoryVendimiaModule)
    },
    {
        path:'acto-central', 
        loadChildren: () => import('./pages/acto-central/page-acto-central.module').then(m => m.ActoCentralModule)
    },
    {
        path:'reinas',
        loadChildren: () => import('./pages/reinas/reinas.module').then(m => m.ReinasModule)
    },
    {
        path:'profile', 
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
    },
    {
        path:'about', 
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
    },
        
    {
        path: '**', pathMatch:'full', redirectTo: '/'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRouting {}
