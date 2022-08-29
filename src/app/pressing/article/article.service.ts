import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article.model';

@Injectable()
export class ArticleService {
 
  readonly url: string = `localhost:8000/api/articles`;

  constructor(public http: HttpClient) { }

  findAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

  findOne(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  update(form: any) {
    return this.http.put(`${this.url}/${form.id}`, form);
  }
  
 create(formData){
  return this.http.post(this.url,formData);
 }

}
