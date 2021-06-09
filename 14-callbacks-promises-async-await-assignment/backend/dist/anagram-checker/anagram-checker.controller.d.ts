import { AnagramCheckerService } from './anagram-checker.service';
export declare class AnagramCheckerController {
    private readonly anagramService;
    constructor(anagramService: AnagramCheckerService);
    anagramChecker(data: any): Promise<boolean>;
}
