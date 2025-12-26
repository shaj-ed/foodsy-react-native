export type UserType = {
  id: number;
  username: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  username: string;
  message: string;
};

export type CurrentUserResponse = {
  message: string;
  data: UserType;
};

export type SignUpPayload = {
  username: string;
  email: string;
  password: string;
  phoneNumber?: string;
  address?: string;
};
