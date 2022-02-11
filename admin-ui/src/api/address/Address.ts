import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Address = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  relation?: Product | null;
  state: string | null;
  updatedAt: Date;
  zip: number | null;
};
