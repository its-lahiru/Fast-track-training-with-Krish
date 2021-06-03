import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArrayToStringPipe } from './array-to-string.pipe';
import { FibonacciPrinterComponent } from './fibonacci-printer/fibonacci-printer.component';

@NgModule({
  declarations: [
    AppComponent,
    FibonacciPrinterComponent,
    ArrayToStringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
