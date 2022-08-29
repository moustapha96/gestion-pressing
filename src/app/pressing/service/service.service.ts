import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from './sevice.model';

@Injectable()
export class EntityService {
 
  readonly url: string = `localhost:8000/api/services`;

  constructor(public http: HttpClient) { }

  findAll(): Observable<Service[]> {
    return this.http.get<Service[]>(this.url);
  }

  findOneProduit(id: string) {
    return this.http.get(this.url + "/" + id);
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
