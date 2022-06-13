import { useMutation, useQueryClient } from "react-query";
import authService from "services/auth.service.js";
import { AUTH_CONSTANT } from "./constants";
import { useHistory } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  let history = useHistory();
  return useMutation(() => authService.logout(), {
    onSuccess: () => {
      queryClient.invalidateQueries(AUTH_CONSTANT);
      history.push("/");
    }
  });
}
