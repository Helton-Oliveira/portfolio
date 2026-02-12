import {Component} from '@angular/core';

@Component({
  selector: 'app-phrases',
  imports: [],
  templateUrl: './phrases.html',
  styleUrl: './phrases.scss',
})
export class Phrases {

  quotes = [
    {id: 1, text: '"Code is like humor..."', author: 'DigiSphere Philosophy'},
    {id: 2, text: '"Simplicity is the soul of efficiency."', author: 'Austin Freeman'},
    {id: 3, text: '"Make it work, make it right, make it fast."', author: 'Kent Beck'}
  ];
  currentIndex = 0;

}
