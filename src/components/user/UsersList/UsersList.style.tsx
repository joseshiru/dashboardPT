import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { List, ListItemButton } from "@mui/material";

export const Title = styled(Typography)`
  && {
    margin: 4px;
    text-align: left;
  }
`;

export const UsersList = styled(List)`
    width: '100%',
    max-width: 400
`;

export const UsersListButton = styled(ListItemButton)`
  && {
    background-color: #fff !important;
  }
`;
