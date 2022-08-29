import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UtilisateurDialogComponent } from './utilisateur-dialog/utilisateur-dialog.component';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { UtilisateurService } from './utilisateur.service';

export const routes = [
   { path: '', component: UtilisateurListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
   
  ],
  declarations: [
  UtilisateurDialogComponent,
  UtilisateurListComponent
  ],
  providers: [UtilisateurService]
})
export class UtilisateurModule { }
