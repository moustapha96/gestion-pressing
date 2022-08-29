import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client.model';

@Injectable()
export class ClientService {
 
  readonly url: string = `localhost:8000/api/clients`;

  constructor(public http: HttpClient) { }

  findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url);
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
