import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClientDialogComponent } from './client-dialog/client-dialog.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientService } from './client.service';


export const routes = [
  { path: '', ClientListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
  
  
   ClientListComponent,
   ClientDialogComponent
  ],
  providers: [ClientService]
})
export class ClientModule { }
