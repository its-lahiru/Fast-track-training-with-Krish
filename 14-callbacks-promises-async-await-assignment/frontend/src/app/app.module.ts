import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnagramCheckerComponent } from './anagram-checker/anagram-checker.component';
import { FindNthLargestNumberComponent } from './find-nth-largest-number/find-nth-largest-number.component';
import { LetterRepetitionCounterComponent } from './letter-repetition-counter/letter-repetition-counter.component';


@NgModule({
  declarations: [
    AppComponent,
    AnagramCheckerComponent,
    FindNthLargestNumberComponent,
    LetterRepetitionCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
