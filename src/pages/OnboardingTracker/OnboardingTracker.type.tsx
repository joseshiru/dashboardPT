import { User } from "../../models/user";
export type OnboardingTrackerViewProps = {
  isLoading: boolean;
  users: User[] | undefined;
  selectedUserId: number;
};
