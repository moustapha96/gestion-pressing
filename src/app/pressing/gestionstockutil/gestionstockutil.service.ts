import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gestionstockutil } from './gestionstockutil.model';

@Injectable()
export class GestionstockutilService {
 
  readonly url: string = `localhost:8000/api/gestionstockutils`;

  constructor(public http: HttpClient) { }

  findAll(): Observable<Gestionstockutil[]> {
    return this.http.get<Gestionstockutil[]>(this.url);
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
