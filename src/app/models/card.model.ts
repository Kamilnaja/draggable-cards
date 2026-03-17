import type { Tag } from './tag.model';

export interface Card {
  id: string;
  title: string;
  content: string;
  tags?: Tag[];
}
