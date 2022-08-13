import TaskListView from "./TasksList.view";
import { useQuery } from "@tanstack/react-query";
import { getTodoByUserId } from "../../../api/user";
import { TasksListProps } from "./TasksList.type";

const TasksList: React.FC<TasksListProps> = ({ selectedUserId }) => {
  const { isLoading, data } = useQuery(["getUserTodo", selectedUserId], () =>
    getTodoByUserId(selectedUserId)
  );
  return (
    <>
      <TaskListView isLoading={isLoading} tasks={data} />
    </>
  );
};

export default TasksList;
