import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _paragraph: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus diam, semper sit amet feugiat vitae, sodales suscipit magna. Duis sed dui vel eros porta ultricies id id magna. Integer vehicula congue enim ut lacinia. Nam dictum finibus neque, in cursus augue fermentum sed. Curabitur vitae odio libero. Fusce velit ipsum, venenatis eget varius in, aliquet sed felis. Pellentesque ac nisl neque. Nunc a tellus gravida, semper nulla a, fringilla metus. Nulla luctus feugiat ex, in finibus risus vehicula ut. Nullam mauris augue, sagittis nec nibh vel, dictum auctor enim. Curabitur vehicula nisi non turpis tempus rhoncus. Fusce hendrerit leo eget finibus interdum. Ut sodales rhoncus consequat. Maecenas arcu arcu, dignissim molestie libero vel, pulvinar tempor arcu. Curabitur non justo urna. Praesent vitae posuere neque.';
  sortedVoweledWords: string[] = []; // to store sorted vowel words
  rowNumber: number = 1;

  // setter
  set paragraph(value: string) {
    this._paragraph = value;
  }

  // getter
  get paragraph() {
    return this._paragraph;
  }

  constructor() { }

  ngOnInit(): void {
  }

  // excute after button click
  submit(): void {
    const stringArray = this.createStringArray(this.paragraph);
    let uniqueWordsSet = new Set(stringArray); // for store uniques words
    let uniqueWordsArray = Array.from(uniqueWordsSet); // covert set to a array
    let vowelWordsArray = this.getVowelWordsArray(uniqueWordsArray); // get voweled words
    this.sortedVoweledWords = vowelWordsArray.sort();
  }

  // to create string array
  createStringArray(value: string): string[] {
    const pattern = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g; // remove symbols with ''
    return value.replace(pattern, '').split(' ');
  }

  // to get voweled words
  getVowelWordsArray(wordsArray: string[]) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const vowelWordsArry = []; // to store vowel words
    for (const word of wordsArray) {
      const letters = word.split(''); // to store letters of a word
      for (const letter of letters) {
        if (vowels.includes(letter)) { // if word has a vowel add word to the array
          vowelWordsArry.push(word);
          break;
        }
      }
    }
    return vowelWordsArry;
  }

  incrementRowNumber(): number {
    return this.rowNumber++;
  }

}
