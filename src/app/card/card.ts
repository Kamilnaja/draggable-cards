import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  host: {
    draggable: 'true',
  },
})
export class Card {
  title = input('');
  content = input('');
}
