import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskCreateInput = {
  assignedTo?: UserWhereUniqueInput | null;
  estimationDays?: Date | null;
  project?: ProjectWhereUniqueInput | null;
  startDate?: Date | null;
  status?: "New" | "Pending" | "Ongoing" | null;
  title: number;
};
