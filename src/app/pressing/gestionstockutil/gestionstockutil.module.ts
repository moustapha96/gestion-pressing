import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GestionstockutilDialogComponent } from './gestionstockutil-dialog/gestionstockutil-dialog.component';
import {GestionstockutilListComponent } from './Gestionstockutil-list/Gestionstockutil-list.component';
import {GestionstockutilService } from './Gestionstockutil.service';

export const routes = [
  { path: '', GestionstockutilListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
   
  ],
  declarations: [
  
  
   GestionstockutilListComponent,
   GestionstockutilDialogComponent,
   
  ],
  providers: [GestionstockutilService]
})
export class GestionstockutilModule { }
