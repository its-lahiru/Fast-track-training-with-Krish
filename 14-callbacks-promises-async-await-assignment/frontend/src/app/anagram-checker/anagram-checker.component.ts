import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AnagramCheckerService } from '../services/anagram-checker.service';

@Component({
  selector: 'app-anagram-checker',
  templateUrl: './anagram-checker.component.html',
  styleUrls: ['./anagram-checker.component.css']
})
export class AnagramCheckerComponent implements OnInit {

  word1: string = 'abc';
  word2: string = 'abc';
  message: string = '';

  constructor(private angramCheckerService: AnagramCheckerService) { }

  ngOnInit(): void { }

  checkForAnagrams() {
    this.angramCheckerService.checkForAnagrams(this.word1, this.word2)
      .subscribe((result) => this.displayResult(result));
  }

  displayResult(result: any) {
    if (result) {
      this.message = 'These words are anagrams';
    } else {
      this.message = 'These words are not anagrams';
    }
  }

}
