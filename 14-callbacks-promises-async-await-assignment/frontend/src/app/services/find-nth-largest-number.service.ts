import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindNthLargestNumberService {

  private apiURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  findNthLargestNumber(inputNumber: number): Observable<number> {
    const url = `${this.apiURL}/find-nth-largest-number`;
    return this.http.post<number>(url, { inputNumber });
  }
}
