"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnagramCheckerService = void 0;
const common_1 = require("@nestjs/common");
let AnagramCheckerService = class AnagramCheckerService {
    async isAnagram(data) {
        let isAnagram = false;
        const charMap1 = await this.createCharMap(data['wordOne']);
        const charMap2 = await this.createCharMap(data['wordTwo']);
        for (const [character1, count1] of charMap1.entries()) {
            for (const [character2, count2] of charMap2.entries()) {
                if (character1 === character2 && count1 === count2) {
                    isAnagram = true;
                    break;
                }
                else {
                    isAnagram = false;
                }
            }
        }
        return isAnagram;
    }
    ;
    createCharMap(word) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let charArray = word.split("");
                let charMap = new Map();
                for (const char of charArray) {
                    if (charMap.has(char)) {
                        let letterCount = charMap.get(char);
                        charMap.set(char, letterCount + 1);
                    }
                    else {
                        charMap.set(char, 1);
                    }
                }
                if (charMap) {
                    resolve(charMap);
                }
                else {
                    reject(new Error('character map creation is failed..'));
                }
            }, 1500);
        });
    }
};
AnagramCheckerService = __decorate([
    common_1.Injectable()
], AnagramCheckerService);
exports.AnagramCheckerService = AnagramCheckerService;
//# sourceMappingURL=anagram-checker.service.js.map