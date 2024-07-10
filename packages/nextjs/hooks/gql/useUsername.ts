import { useQuery } from "@apollo/client";
import { USERNAME_QUERY } from "~~/utils/gql";
import { User } from "~~/utils/gql/types";

interface UsernameQueryData {
  user: Partial<User>;
}

const useUsername = (address: string | undefined) => {
  const { loading, error, data } = useQuery<UsernameQueryData>(USERNAME_QUERY(address || ""), {
    pollInterval: 3000,
    notifyOnNetworkStatusChange: true,
  });

  return {
    username: data?.user?.username,
    loading,
    error,
  };
};

export default useUsername;
