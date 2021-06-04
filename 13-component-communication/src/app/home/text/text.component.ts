import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  inputText: string = '';
  @Output() inputTextEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendText() {
    this.inputTextEvent.emit(this.inputText);
  }

}
