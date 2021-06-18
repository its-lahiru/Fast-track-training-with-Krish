import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../models/Pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private apiUrl = 'http://localhost:3000/api/pets';

  constructor(private http: HttpClient) { }

  update(id: string, pet: Pet) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch<Pet>(url, pet, { observe: 'response' });
  }

  delete(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, { observe: 'response' });
  }

  create(pet: Pet) {
    const url = `${this.apiUrl}`;
    return this.http.post<Pet>(url, pet, { observe: 'response' });
  }

  getAll() {
    const url = `${this.apiUrl}`;
    return this.http.get<Pet[]>(url);
  }

  getOne(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pet>(url);
  }
}
