export interface Item {
  id: number;
  name: string;
  price: number;
  available: boolean;
  description: string;
  currency: string;
}

export interface ItemCart extends Item {
  quantity: number;
}
