import { Component, OnInit } from '@angular/core';
import { LetterRepetitionCounterService } from '../services/letter-repetition-counter.service';

@Component({
  selector: 'app-letter-repetition-counter',
  templateUrl: './letter-repetition-counter.component.html',
  styleUrls: ['./letter-repetition-counter.component.css']
})
export class LetterRepetitionCounterComponent implements OnInit {

  sentence: string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry';
  results: any = [];

  constructor(private letterCountService: LetterRepetitionCounterService) { }

  ngOnInit(): void {
  }

  countLetterRepetition() {
    this.letterCountService.letterCounter(this.sentence)
      .then(
        data => this.results = data,
        reject => console.log(reject.message)
      );
  }

}
