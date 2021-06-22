import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api';

  uploadFile(data: FormData) {
    const url = `${this.apiUrl}/upload`;
    return this.http.post(url, data);
  }
}
