import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FibonacciPrinterComponent } from './fibonacci-printer/fibonacci-printer.component';

@NgModule({
  declarations: [
    AppComponent,
    FibonacciPrinterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
