import { Address } from "../address/Address";
import { Order } from "../order/Order";

export type Product = {
  addresses?: Array<Address>;
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
