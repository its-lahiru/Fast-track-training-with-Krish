import { Injectable } from '@nestjs/common';
import { resourceUsage } from 'process';
import { resourceLimits } from 'worker_threads';

@Injectable()
export class NthLargestNumberFinderService {

    // callback function
    calculateNthLargestFinder(array: number[], position: number) {
        const list = array;
        let nthLargest: number;
        let isSorted = true;
        for (let index_i = 0; index_i < list.length; index_i++) {
            // assume array is already sorted
            isSorted = true;
            for (let index_j = 0; index_j < list.length - 1; index_j++) {
                if (list[index_j] > list[index_j + 1]) {
                    // everytime largest find set it as current largest
                    nthLargest = list[index_j];
                    [list[index_j], list[index_j + 1]] = [list[index_j + 1], list[index_j]];
                    // obviously array is not sorted
                    isSorted = false;
                }
            }
            // break when loop, loops n times (0th, 1st, 2nd,..nth)
            if (index_i === position) {
                break;
            }
        }
        // if sorted already, return nth index value from last
        if (isSorted) {
            nthLargest = list[list.length - position];
            return nthLargest;
        }
        return nthLargest;
    };

    // caller function
    find(inputArray: number[], requiredPosition: number, callbackFn: (arr: number[], position: number) => number) {
        const result = callbackFn(inputArray, requiredPosition);
        return result;
    };
}
