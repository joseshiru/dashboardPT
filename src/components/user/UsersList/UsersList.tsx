import UsersListView from "./UsersList.view";
import { UsersListProps } from "./UsersList.type";
import { useNavigate } from "react-router-dom";

const UsersList: React.FC<UsersListProps> = ({
  isLoading,
  users,
  selectedUserId,
}) => {
  let navigate = useNavigate();

  const handleClickUser = (userId: number) => (): void => {
    navigate(`/users/${userId}`);
  };
  return (
    <>
      <UsersListView
        isLoading={isLoading}
        users={users}
        onClickUser={handleClickUser}
        selectedUserId={selectedUserId}
      />
    </>
  );
};

export default UsersList;
