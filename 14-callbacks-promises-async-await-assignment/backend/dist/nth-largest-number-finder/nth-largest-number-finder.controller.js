"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NthLargestNumberFinderController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const nth_largest_number_finder_service_1 = require("./nth-largest-number-finder.service");
let NthLargestNumberFinderController = class NthLargestNumberFinderController {
    constructor(largestFinderService) {
        this.largestFinderService = largestFinderService;
    }
    findNthLargest(data) {
        console.log(data);
        const inputArray = [100, 23, 32, 41, 51, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99];
        const requiredPosition = data['inputNumber'];
        return this.largestFinderService.find(inputArray, requiredPosition, this.largestFinderService.calculateNthLargestFinder);
    }
};
__decorate([
    common_2.Post('api/find-nth-largest-number'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NthLargestNumberFinderController.prototype, "findNthLargest", null);
NthLargestNumberFinderController = __decorate([
    common_3.Controller(),
    __metadata("design:paramtypes", [nth_largest_number_finder_service_1.NthLargestNumberFinderService])
], NthLargestNumberFinderController);
exports.NthLargestNumberFinderController = NthLargestNumberFinderController;
//# sourceMappingURL=nth-largest-number-finder.controller.js.map