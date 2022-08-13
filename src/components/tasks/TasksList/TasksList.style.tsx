import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { List, ListItemText } from "@mui/material";

export const Title = styled(Typography)`
  && {
    margin: 4px;
    text-align: left;
  }
`;

export const UsersList = styled(List)`
  width: 100%;
  max-width: 400px;
`;

export const UsersListText = styled(ListItemText)`
  margin: 0px 0px 0px 4px;
  text-transform: capitalize;
`;
