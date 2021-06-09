import { NthLargestNumberFinderService } from './nth-largest-number-finder.service';
export declare class NthLargestNumberFinderController {
    private largestFinderService;
    constructor(largestFinderService: NthLargestNumberFinderService);
    findNthLargest(data: any): number;
}
