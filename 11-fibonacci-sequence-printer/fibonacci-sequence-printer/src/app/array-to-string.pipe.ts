import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({ name: 'arrayToStringPipe' })
export class ArrayToStringPipe implements PipeTransform {
    transform(values: number[]): string {
        let arrayString = '';
        for (const value of values) {
            const stringValue = value.toString();
            arrayString = arrayString + ' ' + stringValue;
        }
        return arrayString;
    }
}