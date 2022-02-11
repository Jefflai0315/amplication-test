import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address 1" source="address_1" />
        <TextInput label="Address 2" source="address_2" />
        <TextInput label="City" source="city" />
        <ReferenceInput
          source="product.id"
          reference="Product"
          label="relation"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="State" source="state" />
        <NumberInput step={1} label="Zip" source="zip" />
      </SimpleForm>
    </Edit>
  );
};
