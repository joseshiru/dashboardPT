import Content from "./OnboardingTracker.view";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../../api/user";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Page = () => {
  const { isLoading, data } = useQuery(["getUsers"], getAll);
  const navigate = useNavigate();
  const { userId } = useParams();
  const noUserAndDataLoaded = !userId && !!data?.length;

  const parsedUserId = Number(userId);
  const userNotFound = !isLoading && userId && !data?.[parsedUserId - 1];

  useEffect(() => {
    if (noUserAndDataLoaded) {
      navigate(`/users/${data[0].id}`);
    }
    if (userNotFound) {
      navigate(`/404`);
    }
  });

  return (
    <>
      <Content
        isLoading={isLoading}
        users={data}
        selectedUserId={parsedUserId}
      />
    </>
  );
};

export default Page;
