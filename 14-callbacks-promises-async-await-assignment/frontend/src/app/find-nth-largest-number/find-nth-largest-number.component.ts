import { Component, OnInit } from '@angular/core';
import { FindNthLargestNumberService } from '../services/find-nth-largest-number.service';

@Component({
  selector: 'app-find-nth-largest-number',
  templateUrl: './find-nth-largest-number.component.html',
  styleUrls: ['./find-nth-largest-number.component.css']
})
export class FindNthLargestNumberComponent implements OnInit {

  numberPosition: number = 3;
  nthLargestNumber!: number;

  constructor(private findNumber: FindNthLargestNumberService) { }

  ngOnInit(): void {
  }

  getNthLargestNumber() {
    this.findNumber.findNthLargestNumber(this.numberPosition)
      .subscribe(number => this.nthLargestNumber = number);
    console.log(this.nthLargestNumber);
  }

}
