import { CurrentUserResponse } from "../types/auth";
import api from "./axios";

const AUTH_CURRENT_USER_ENDPOINT = "/user/current-user";

export const getCurrentUser = async (): Promise<CurrentUserResponse> => {
  const response = await api.get(AUTH_CURRENT_USER_ENDPOINT);
  const data = await response.data;

  return data;
};
