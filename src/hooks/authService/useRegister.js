import { useMutation, useQueryClient } from "react-query";
import authService from "services/auth.service.js";
import { AUTH_CONSTANT } from "./constants";
import { useHistory } from "react-router-dom";

export default function useRegister() {
  const queryClient = useQueryClient();
  const history = useHistory();
  return useMutation(({ ...newUser }) => authService.register({ ...newUser }), {
    onSuccess: (user) => {
      queryClient.cancelQueries(AUTH_CONSTANT);
      queryClient.setQueryData(AUTH_CONSTANT, user);
      history.push("/");
    }
  });
}
