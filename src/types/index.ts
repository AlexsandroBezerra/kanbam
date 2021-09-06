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

export interface MoveCardParams {
  indexes: {
    list: {
      from: number;
      to: number;
    };
    card: {
      from: number;
      to?: number;
    };
  };
}
