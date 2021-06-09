import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LetterRepetitionCounterService {

  private apiURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  letterCounter(sentence: string): Promise<any> {
    const url = `${this.apiURL}/count-letter-repetition`;
    return this.http.post(url, { sentence }).toPromise();
  }
}
