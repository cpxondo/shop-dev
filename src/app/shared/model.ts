export interface Item {
  name: string;
  price: number;
  available: boolean;
  description: string;
  currency: string;
}

export interface ItemCart {
  item: Item;
  quantity: number;
}
