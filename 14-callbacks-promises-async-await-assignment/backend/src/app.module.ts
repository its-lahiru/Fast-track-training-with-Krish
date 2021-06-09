import { Module } from '@nestjs/common';
import { AnagramCheckerModule } from './anagram-checker/anagram-checker.module';
import { NthLargestNumberFinderModule } from './nth-largest-number-finder/nth-largest-number-finder.module';
import { LetterRepetitionCounterModule } from './letter-repetition-counter/letter-repetition-counter.module';

@Module({
  imports: [AnagramCheckerModule, NthLargestNumberFinderModule, LetterRepetitionCounterModule],
})
export class AppModule { }
