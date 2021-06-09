"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NthLargestNumberFinderService = void 0;
const common_1 = require("@nestjs/common");
let NthLargestNumberFinderService = class NthLargestNumberFinderService {
    calculateNthLargestFinder(array, position) {
        const list = array;
        let nthLargest;
        let isSorted = true;
        for (let index_i = 0; index_i < list.length; index_i++) {
            isSorted = true;
            for (let index_j = 0; index_j < list.length - 1; index_j++) {
                if (list[index_j] > list[index_j + 1]) {
                    nthLargest = list[index_j];
                    [list[index_j], list[index_j + 1]] = [list[index_j + 1], list[index_j]];
                    isSorted = false;
                }
            }
            if (index_i === position) {
                break;
            }
        }
        if (isSorted) {
            nthLargest = list[list.length - position];
            return nthLargest;
        }
        return nthLargest;
    }
    ;
    find(inputArray, requiredPosition, callbackFn) {
        const result = callbackFn(inputArray, requiredPosition);
        return result;
    }
    ;
};
NthLargestNumberFinderService = __decorate([
    common_1.Injectable()
], NthLargestNumberFinderService);
exports.NthLargestNumberFinderService = NthLargestNumberFinderService;
//# sourceMappingURL=nth-largest-number-finder.service.js.map