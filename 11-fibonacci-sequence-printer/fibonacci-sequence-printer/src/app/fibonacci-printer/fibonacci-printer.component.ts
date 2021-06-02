import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-fibonacci-printer',
  templateUrl: './fibonacci-printer.component.html',
  styleUrls: ['./fibonacci-printer.component.css']
})
export class FibonacciPrinterComponent implements OnInit {

  // for take input value
  private _inputValue: number = 0;
  // for display message
  message: string = '';
  // to display fibonacci sequnce
  fiboSequence: number[] = [];
  // set to true if input number is in the fibonacci sequence
  isFibonacci: boolean = false;

  // setter
  set inputValue(value: number) {
    this._inputValue = value;
  }

  // getter
  get inputValue() {
    return this._inputValue;
  }

  constructor() { }

  ngOnInit(): void { }

  getFibonacciSequence(): void {
    // for store fibonacci sequence
    let sequence = [0];
    // starting index of the loop
    let index = 0;
    // loop over until input value is greater than the final fibaonacci number
    while (this.inputValue > sequence[index]) {
      // sequence start as 0, 1
      if (sequence[index] >= 1) {
        // next fibonacci number = previous + one before previous
        let nextFibonacciNumber = sequence[index] + sequence[index - 1];
        sequence.push(nextFibonacciNumber);
      } else {
        sequence.push(sequence[index] + 1);
      }
      index++;
    }

    // compare last index position of the fibonacci sequence with input value
    if (sequence[index] == this.inputValue) {
      this.message = `${this.inputValue} is in the Fibonacci sequence`;
      this.isFibonacci = true;
      this.fiboSequence = sequence;
    } else {
      this.isFibonacci = false;
      this.message = `${this.inputValue} is not in the Fibonacci sequence`;
    }
  }
}
