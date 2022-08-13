import * as React from "react";
import Grid from "@mui/material/Grid";
import { Title, UsersList, UsersListText } from "./TasksList.style";
import { TaskListViewProps, TasksProps } from "./TasksList.type";
import { CircularProgress, ListItem } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const Tasks: React.FC<TasksProps> = ({ isLoading, tasks }) => {
  if (isLoading) {
    return <CircularProgress color="inherit" />;
  }

  const userListItems =
    tasks?.map((task) => (
      <ListItem key={task.id}>
        {task.completed ? <CheckIcon /> : <CheckBoxOutlineBlankIcon />}
        <UsersListText primary={task.title} key={task.id} />
      </ListItem>
    )) || [];
  return <UsersList>{userListItems}</UsersList>;
};

const TaskListView: React.FC<TaskListViewProps> = ({ isLoading, tasks }) => {
  return (
    <>
      <Title variant="h3" align="center">
        Tasks List
      </Title>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Tasks isLoading={isLoading} tasks={tasks} />
        </Grid>
      </Grid>
    </>
  );
};

export default TaskListView;
