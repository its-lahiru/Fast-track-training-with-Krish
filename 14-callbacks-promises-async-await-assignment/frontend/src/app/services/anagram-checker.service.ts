import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnagramCheckerService {

  private apiURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  checkForAnagrams(firstWord: string, secondWord: string) {
    const data = {
      wordOne: firstWord, wordTwo: secondWord,
    };
    const url = `${this.apiURL}/anagramChecker`;
    return this.http.post(url, data);
  }
}
