import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text: string = 'print here';
  receivedText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  receiveText($event: any) {
    this.receivedText = $event;
  }

  btnClick() {
    this.text = this.receivedText;
  }

}
