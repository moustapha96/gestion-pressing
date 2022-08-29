import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryService } from './category.service';

export const routes = [
  { path: '', component: CategoryListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
   
  ],
  declarations: [
  
  
    CategoryListComponent,
    CategoryDialogComponent
  ],
  providers: [CategoryService]
})
export class categoryModule { }
