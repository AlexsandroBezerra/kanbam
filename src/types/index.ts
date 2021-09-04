export interface Card {
  id: string;
  title: string;
  description: string;
}

export interface List {
  id: string;
  name: string;
  cards: Card[];
}
