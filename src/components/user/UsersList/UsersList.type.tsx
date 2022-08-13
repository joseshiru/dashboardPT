import { User } from "../../../models/user";

export type UsersListViewProps = {
  isLoading: boolean;
  users: User[] | undefined;
  onClickUser: (userId: number) => () => void;
  selectedUserId: number;
};

export type UsersListProps = {
  isLoading: boolean;
  users: User[] | undefined;
  selectedUserId: number;
};

export type UsersProps = {
  isLoading: boolean;
  users: User[] | undefined;
  onClickUser: (userId: number) => () => void;
  selectedUserId: number;
};
