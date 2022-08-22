import { Product } from './product';
export interface Inventory {
  id: number;
  product: Product;
  initialAmount: number;
  incoming: number;
  outcoming: number;
  totalAmount: number;
  date: Date;
  orderNumber: number;
  type: String;
  quantity: number;
}
