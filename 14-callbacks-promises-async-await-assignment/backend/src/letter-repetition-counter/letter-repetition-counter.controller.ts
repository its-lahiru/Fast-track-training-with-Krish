import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { LetterRepetitionCounterService } from './letter-repetition-counter.service';

@Controller()
export class LetterRepetitionCounterController {

    constructor(private letterRepetitionCounter: LetterRepetitionCounterService) { }

    @Post('api/count-letter-repetition')
    anagramChecker(@Body() data: any): Promise<any> {
        return this.letterRepetitionCounter.letterRepetitionCounter(data);
    }
}
