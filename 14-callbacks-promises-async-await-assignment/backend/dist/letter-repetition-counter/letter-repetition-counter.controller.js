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
exports.LetterRepetitionCounterController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const letter_repetition_counter_service_1 = require("./letter-repetition-counter.service");
let LetterRepetitionCounterController = class LetterRepetitionCounterController {
    constructor(letterRepetitionCounter) {
        this.letterRepetitionCounter = letterRepetitionCounter;
    }
    anagramChecker(data) {
        return this.letterRepetitionCounter.letterRepetitionCounter(data);
    }
};
__decorate([
    common_2.Post('api/count-letter-repetition'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LetterRepetitionCounterController.prototype, "anagramChecker", null);
LetterRepetitionCounterController = __decorate([
    common_3.Controller(),
    __metadata("design:paramtypes", [letter_repetition_counter_service_1.LetterRepetitionCounterService])
], LetterRepetitionCounterController);
exports.LetterRepetitionCounterController = LetterRepetitionCounterController;
//# sourceMappingURL=letter-repetition-counter.controller.js.map