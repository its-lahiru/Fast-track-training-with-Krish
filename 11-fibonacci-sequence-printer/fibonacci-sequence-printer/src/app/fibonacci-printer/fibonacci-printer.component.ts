import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-fibonacci-printer',
  templateUrl: './fibonacci-printer.component.html',
  styleUrls: ['./fibonacci-printer.component.css']
})
export class FibonacciPrinterComponent implements OnInit {

  fibSequence: any[] = [];
  private _requiredFiboLevel: string = '';
  errorMessage: string = '';

  // setter
  set requiredFiboLevel(value: string) {
    this._requiredFiboLevel = value;
  }

  // getter
  get requiredFiboLevel() {
    return this._requiredFiboLevel;
  }

  constructor() { }

  ngOnInit(): void { }

  getFibonacciSequence(): void {
    // convert input to int
    const fiboLevel = parseInt(this.requiredFiboLevel, 10);

    // for store fibonacci sequence
    let fibonacciSequence: any[] = [];

    if (fiboLevel == 0) {
      this.fibSequence = [];
    } else if (fiboLevel == 1) {
      this.fibSequence = [0];
    } else if (fiboLevel == 2) {
      this.fibSequence = [0, 1];
    } else if (fiboLevel > 2) {
      fibonacciSequence[0] = 0;
      fibonacciSequence[1] = 1;
      for (let index = 2; index < fiboLevel; index++) {
        // next fibonacci number = previous + one before previous
        fibonacciSequence[index] = fibonacciSequence[index - 2] + fibonacciSequence[index - 1];
      }
      this.fibSequence = fibonacciSequence;
    } else {
      this.fibSequence = [];
    }
  }
}
