import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gestionstock } from './gestionstock.model';

@Injectable()
export class GestionstockService {
 
  readonly url: string = `localhost:8000/api/gestionstocks`;

  constructor(public http: HttpClient) { }

  findAll(): Observable<Gestionstock[]> {
    return this.http.get<Gestionstock[]>(this.url);
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
