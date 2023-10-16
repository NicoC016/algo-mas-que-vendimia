import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  {path:'', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)},
  {path:'pages', loadChildren: () => import('./components/pages.module').then(m => m.PagesModule) },

  {path: '', pathMatch:'full', redirectTo: '/'},
  {path: '**', pathMatch:'full', redirectTo: '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
