import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  dueDate?: DateTimeFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
