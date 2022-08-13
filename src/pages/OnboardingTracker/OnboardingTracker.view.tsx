import * as React from "react";
import Grid from "@mui/material/Grid";
import { PageContainer, PageTitle } from "./OnboardingTracker.style";
import { OnboardingTrackerViewProps } from "./OnboardingTracker.type";
import TasksList from "../../components/tasks/TasksList";
import UsersList from "../../components/user/UsersList";

const Content: React.FC<OnboardingTrackerViewProps> = ({
  isLoading,
  users,
  selectedUserId,
}) => {
  return (
    <PageContainer>
      <PageTitle variant="h1" align="center">
        Onboarding tracker
      </PageTitle>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <UsersList
            selectedUserId={selectedUserId}
            isLoading={isLoading}
            users={users}
          />
        </Grid>
        <Grid item xs={6}>
          <TasksList selectedUserId={selectedUserId} />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Content;
