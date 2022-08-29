import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServiceDialogComponent } from './service-dialog/service-dialog.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { EntityService,  } from './service.service';

export const routes = [
  { path: '', component:ServiceListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
   
  ],
  declarations: [
  
  
   ServiceListComponent,
   ServiceDialogComponent
  ],
  providers: [EntityService]
})
export class    ServiceModule { }
