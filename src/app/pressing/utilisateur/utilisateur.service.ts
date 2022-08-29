import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur.model';

@Injectable()
export class UtilisateurService {
 
  readonly url: string = `localhost:8000/api/utilisateurs`;

  constructor(public http: HttpClient) { }

  findAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.url);
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
