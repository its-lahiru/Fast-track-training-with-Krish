import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { NthLargestNumberFinderService } from './nth-largest-number-finder.service';

@Controller()
export class NthLargestNumberFinderController {

    constructor(private largestFinderService: NthLargestNumberFinderService) { }

    @Post('api/find-nth-largest-number')
    findNthLargest(@Body() data: any) {
        console.log(data);
        const inputArray = [100, 23, 32, 41, 51, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99];
        const requiredPosition = data['inputNumber'];
        return this.largestFinderService.find(inputArray, requiredPosition, this.largestFinderService.calculateNthLargestFinder);
    }
}
