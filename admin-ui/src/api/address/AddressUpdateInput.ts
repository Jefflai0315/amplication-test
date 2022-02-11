import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  relation?: ProductWhereUniqueInput | null;
  state?: string | null;
  zip?: number | null;
};
