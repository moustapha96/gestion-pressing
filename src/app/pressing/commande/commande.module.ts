import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommandeDialogComponent } from './Commande-dialog/Commande-dialog.component';
import { CommandeListComponent } from './Commande-list/Commande-list.component';
import { CommandeService } from './commande.service';

export const routes = [
  { path: '', component: CommandeListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
   
  ],
  declarations: [
  
  
    CommandeListComponent,
    CommandeDialogComponent
  ],
  providers: [CommandeService]
})
export class commandeModule { }
