import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import * as path from 'path';
import { ComponentComponent } from './pressing/component/component.component';
import { AuthGuardService } from './core/auth-guard.service';
import { IndexComponent } from './pressing/dashboard/index/index.component';


const routes: Routes = [
  {
    path: '',
    // component: IndexComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', loadChildren: () => import('./pressing/dashboard/dashboard.module').then(m => m.Dashboard) },
      { path: 'article', loadChildren: () => import('./pressing/article/article.module').then(m => m.ArticleModule) },
    
      { path: 'categorie', loadChildren: () => import('./pressing/category/category.module').then(m => m.categoryModule) },
      { path: 'client', loadChildren: () => import('./pressing/client/client.module').then(m => m.ClientModule) },
      { path: 'gestionstock', loadChildren: () => import('./pressing/gestionstock/gestionstock.module').then(m => m.GestionStockModule) },
      { path: 'gestionstockutil', loadChildren: () => import('./pressing/gestionstockutil/gestionstockutil.module').then(m => m.GestionstockutilModule) },
      { path: 'service', loadChildren: () => import('./pressing/service/service.module').then(m => m.ServiceModule) },
      { path: 'utilisateur', loadChildren: () => import('./pressing/utilisateur/utilisateur.module').then(m => m.UtilisateurModule) },
     ]
  },
  { 
    path: 'login',component: AuthLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
        }
      ] 
  },
 
  { path: 'register', },
  { path: '**', component: LoginComponent },
 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
