import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {GestionstockDialogComponent } from './Gestionstock-dialog/Gestionstock-dialog.component';
import {GestionstockListComponent } from './Gestionstock-list/Gestionstock-list.component';
import {GestionstockService } from './Gestionstock.service';

export const routes = [
  { path: '', component:GestionstockListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
   
  ],
  declarations: [
  
  
   GestionstockListComponent,
   GestionstockDialogComponent
  ],
  providers: [GestionstockService]
})
export class GestionStockModule { }
