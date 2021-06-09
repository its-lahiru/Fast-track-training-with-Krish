"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LetterRepetitionCounterService = void 0;
const common_1 = require("@nestjs/common");
let LetterRepetitionCounterService = class LetterRepetitionCounterService {
    letterRepetitionCounter(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const sentence = data['sentence'];
                const lettersArray = sentence.replace(/ /g, '').toLowerCase().split('');
                let length = lettersArray.length - 1;
                let letters = new Map();
                for (let i = 0; i < length; i++) {
                    if (letters.has(lettersArray[i])) {
                        let letterCount = letters.get(lettersArray[i]);
                        letters.set(lettersArray[i], letterCount + 1);
                    }
                    else {
                        letters.set(lettersArray[i], 1);
                    }
                }
                const letterMap = [...letters.entries()];
                if (letterMap) {
                    resolve(letterMap);
                }
                else {
                    reject(new Error('Letter counter is failed'));
                }
            }, 1500);
        });
    }
};
LetterRepetitionCounterService = __decorate([
    common_1.Injectable()
], LetterRepetitionCounterService);
exports.LetterRepetitionCounterService = LetterRepetitionCounterService;
//# sourceMappingURL=letter-repetition-counter.service.js.map