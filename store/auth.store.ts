import api from "@/src/api/axios";
import { getCurrentUser } from "@/src/api/user";
import { LoginResponse, UserType } from "@/src/types/auth";
import { saveRefreshToken } from "@/src/utils/token";
import { create } from "zustand";

interface AuthState {
  user: UserType | null;
  isAuthenticated: boolean;
  accessToken: string | null;

  setUser: (user: UserType) => void;
  login: (username: string, password: string) => Promise<void>;
}

const AUTH_LOGIN_URL = "/auth/login";

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
}));
