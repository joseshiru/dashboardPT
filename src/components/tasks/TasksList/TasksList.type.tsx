import { Task } from "../../../models/task";

export type TaskListViewProps = {
  isLoading: boolean;
  tasks: Task[] | undefined;
};

export type TasksProps = {
  isLoading: boolean;
  tasks: Task[] | undefined;
};

export type TasksListProps = {
  selectedUserId: number;
};
