"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const anagram_checker_module_1 = require("./anagram-checker/anagram-checker.module");
const nth_largest_number_finder_module_1 = require("./nth-largest-number-finder/nth-largest-number-finder.module");
const letter_repetition_counter_module_1 = require("./letter-repetition-counter/letter-repetition-counter.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [anagram_checker_module_1.AnagramCheckerModule, nth_largest_number_finder_module_1.NthLargestNumberFinderModule, letter_repetition_counter_module_1.LetterRepetitionCounterModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map