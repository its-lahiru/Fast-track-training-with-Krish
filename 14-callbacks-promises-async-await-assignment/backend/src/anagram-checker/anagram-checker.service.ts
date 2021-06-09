import { Injectable } from '@nestjs/common';

@Injectable()
export class AnagramCheckerService {

    // async await
    async isAnagram(data: any) {
        let isAnagram = false;
        // create map using first word
        const charMap1: any = await this.createCharMap(data['wordOne']);
        // create map using second word
        const charMap2: any = await this.createCharMap(data['wordTwo']);
        // iterate over maps and compare keys and their respective values
        for (const [character1, count1] of charMap1.entries()) {
            for (const [character2, count2] of charMap2.entries()) {
                if (character1 === character2 && count1 === count2) {
                    isAnagram = true;
                    break;
                } else {
                    isAnagram = false;
                }
            }
        }
        return isAnagram;
    };

    createCharMap(word: string) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // char array for word
                let charArray = word.split("");
                let charMap = new Map();
                for (const char of charArray) {
                    // if key exists increment value count
                    if (charMap.has(char)) {
                        // get current letter count
                        let letterCount = charMap.get(char);
                        // increment value count by 1
                        charMap.set(char, letterCount + 1);
                    }
                    else {
                        // create new key with count value 1
                        charMap.set(char, 1);
                    }
                }
                if (charMap) {
                    resolve(charMap);
                } else {
                    reject(new Error('character map creation is failed..'));
                }
            }, 1500);
        });

    }
}
