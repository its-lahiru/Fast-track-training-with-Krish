import { Module } from '@nestjs/common';
import { LetterRepetitionCounterController } from './letter-repetition-counter.controller';
import { LetterRepetitionCounterService } from './letter-repetition-counter.service';

@Module({
  controllers: [LetterRepetitionCounterController],
  providers: [LetterRepetitionCounterService]
})
export class LetterRepetitionCounterModule {}
