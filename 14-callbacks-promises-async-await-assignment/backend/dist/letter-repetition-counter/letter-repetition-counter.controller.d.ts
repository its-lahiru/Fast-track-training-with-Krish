import { LetterRepetitionCounterService } from './letter-repetition-counter.service';
export declare class LetterRepetitionCounterController {
    private letterRepetitionCounter;
    constructor(letterRepetitionCounter: LetterRepetitionCounterService);
    anagramChecker(data: any): Promise<any>;
}
