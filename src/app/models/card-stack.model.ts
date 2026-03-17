import type { Card } from './card.model';

export interface CardStack {
  id: string;
  tag: string;
  cards: Card[];
}
