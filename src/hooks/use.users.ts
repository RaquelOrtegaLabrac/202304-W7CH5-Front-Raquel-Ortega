import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useCallback, useMemo } from "react";
import { loadUsersAsync, registerUserAsync } from "../redux/users.slice";
import { UserRepository } from "../services/user.repository";
import { User } from "../models/user";

export function useUsers() {
  const { users } = useSelector((state: RootState) => state.users);
  const dispatch: AppDispatch = useDispatch();

  const repo: UserRepository = useMemo(
    () => new UserRepository("http://localhost:5000/user/"),
    []
  );

  const handleLoadUsers = useCallback(async () => {
    dispatch(loadUsersAsync(repo));
  }, [repo, dispatch]);

  const handleRegisterUser = async (user: Partial<User>) => {
    dispatch(registerUserAsync({ repo, user }));
  };

  return {
    handleLoadUsers,
    users,
    handleRegisterUser,
  };
}
