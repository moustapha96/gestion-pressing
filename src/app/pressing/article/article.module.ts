import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticleService } from './article.service';
import { ArticleListeComponent } from './article-liste/article-liste.component';
import { ArticleCreateComponent } from './article-create/article-create.component';

export const routes = [
  { path: '', component: ArticleListeComponent, pathMatch: 'full' },
  { path: 'create', component: ArticleCreateComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
   
  ],
  declarations: [
  
  
    ArticleListeComponent,
          ArticleCreateComponent
  ],
  providers: [ArticleService]
})
export class ArticleModule { }
