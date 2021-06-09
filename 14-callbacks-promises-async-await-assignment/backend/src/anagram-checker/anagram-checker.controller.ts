import { Post, Body, Controller } from '@nestjs/common';
import { AnagramCheckerService } from './anagram-checker.service';

@Controller()
export class AnagramCheckerController {

    constructor(private readonly anagramService: AnagramCheckerService) { }

    @Post('api/anagramChecker')
    async anagramChecker(@Body() data: any) {
        return await this.anagramService.isAnagram(data);
    }
}
