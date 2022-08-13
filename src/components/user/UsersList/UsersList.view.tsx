import * as React from "react";
import Grid from "@mui/material/Grid";
import { Title, UsersList, UsersListButton } from "./UsersList.style";
import { UsersListViewProps, UsersProps } from "./UsersList.type";
import { CircularProgress, ListItem, ListItemText } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const Users: React.FC<UsersProps> = ({
  isLoading,
  users,
  onClickUser,
  selectedUserId,
}) => {
  if (isLoading) {
    return <CircularProgress color="inherit" />;
  }

  const userListItems =
    users?.map((user) => (
      <ListItem key={user.id}>
        <UsersListButton onClick={onClickUser(user.id)}>
          <ListItemText primary={user.name} key={user.id} />
          {selectedUserId === user.id && <DoubleArrowIcon />}
        </UsersListButton>
      </ListItem>
    )) || [];
  return <UsersList>{userListItems}</UsersList>;
};

const UsersListView: React.FC<UsersListViewProps> = ({
  isLoading,
  users,
  onClickUser,
  selectedUserId,
}) => {
  return (
    <>
      <Title variant="h3" align="center">
        Users
      </Title>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Users
            isLoading={isLoading}
            users={users}
            selectedUserId={selectedUserId}
            onClickUser={onClickUser}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default UsersListView;
