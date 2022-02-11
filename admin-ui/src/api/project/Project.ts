import { User } from "../user/User";
import { Task } from "../task/Task";

export type Project = {
  createdAt: Date;
  description: string | null;
  dueDate: Date;
  id: string;
  name: string | null;
  owner?: Array<User>;
  startDate: Date | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
