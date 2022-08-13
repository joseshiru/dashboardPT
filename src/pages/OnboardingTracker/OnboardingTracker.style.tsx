import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const PageContainer = styled(Paper)`
    && {
        max-width: 936px;
        margin: auto;
        padding 0 10px;
        min-height: 100vh;
        background: #e9e9e9;
        overflow: auto;
    }
`;

export const PageTitle = styled(Typography)`
  margin: 5px;
`;
