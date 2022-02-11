import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type TaskWhereInput = {
  assignedTo?: UserWhereUniqueInput;
  estimationDays?: DateTimeNullableFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  status?: "New" | "Pending" | "Ongoing";
  title?: IntFilter;
};
