import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagramCheckerComponent } from './anagram-checker/anagram-checker.component';
import { FindNthLargestNumberComponent } from './find-nth-largest-number/find-nth-largest-number.component';
import { LetterRepetitionCounterComponent } from './letter-repetition-counter/letter-repetition-counter.component';

const routes: Routes = [
  { path: '', component: AnagramCheckerComponent },
  { path: 'anagram-checker', component: AnagramCheckerComponent },
  { path: 'find-nth-largest', component: FindNthLargestNumberComponent },
  { path: 'letter-repetition-counter', component: LetterRepetitionCounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
