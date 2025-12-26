import api from "@/src/api/axios";
import { getCurrentUser } from "@/src/api/user";
import { LoginResponse, SignUpPayload, UserType } from "@/src/types/auth";
import { deleteRefreshToken, saveRefreshToken } from "@/src/utils/token";
import { create } from "zustand";

interface AuthState {
  user: UserType | null;
  isAuthenticated: boolean;
  accessToken: string | null;

  setUser: (user: UserType) => void;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signUp: (payload: SignUpPayload) => Promise<void>;
}

const AUTH_LOGIN_URL = "/auth/login";
const AUTH_LOGOUT_URL = "/auth/logout";
const AUTH_SIGNUP_URL = "/auth/register";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  accessToken: null,

  setUser: (user) => {
    set({
      user,
      isAuthenticated: !!user,
    });
  },

  login: async (username, password) => {
    try {
      const response = await api.post<LoginResponse>(AUTH_LOGIN_URL, {
        username,
        password,
      });
      const { accessToken, refreshToken } = response.data;

      set({
        accessToken: accessToken,
      });

      if (!accessToken || !refreshToken) {
        throw new Error("Invalid login response");
      }

      await saveRefreshToken(refreshToken);

      const currentUser = await getCurrentUser();

      set({
        user: currentUser.data,
        isAuthenticated: true,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  logout: async () => {
    try {
      await api.post(AUTH_LOGOUT_URL);
    } catch (error) {
      console.log(error);
    } finally {
      set({
        user: null,
        accessToken: null,
        isAuthenticated: false,
      });

      await deleteRefreshToken();
    }
  },

  signUp: async (payload) => {
    try {
      await api.post(AUTH_SIGNUP_URL, payload);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
}));
