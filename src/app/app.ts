import { DragDropModule, moveItemInArray, type CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, signal } from '@angular/core';
import { Card } from './card/card';
import type { CardStack } from './models/card-stack.model';

@Component({
  selector: 'app-root',
  imports: [Card, DragDropModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('draggable-cards');
  stacks: CardStack[] = [
    {
      id: '1',
      tag: 'Angular',
      cards: [{ id: '1', title: 'Card 1', tags: ['Angular'], content: 'Content for Card 1' }],
    },
    {
      id: '2',
      tag: 'CSS',
      cards: [{ id: '2', title: 'Card 2', tags: ['CSS'], content: 'Content for Card 2' }],
    },
    {
      id: '3',
      tag: 'Angular',
      cards: [{ id: '3', title: 'Card 3', tags: ['Angular'], content: 'Content for Card 3' }],
    },
  ];

  drop(event: CdkDragDrop<CardStack[]>) {
    const prevIndex = event.previousIndex;
    const currIndex = event.currentIndex;

    if (prevIndex === currIndex) return;

    const draggedStack = this.stacks[prevIndex];
    const targetStack = this.stacks[currIndex];

    // Logika łączenia: sprawdź, czy tagi się zgadzają
    if (draggedStack.tag === targetStack.tag) {
      // Dodaj karty do docelowego stosu
      targetStack.cards.push(...draggedStack.cards);
      // Usuń pusty już stos źródłowy
      this.stacks.splice(prevIndex, 1);
    } else {
      // Swobodne przesuwanie (zmiana kolejności), jeśli tagi są różne
      moveItemInArray(this.stacks, prevIndex, currIndex);
    }
  }
}
