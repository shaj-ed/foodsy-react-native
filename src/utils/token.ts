import * as SecureStore from "expo-secure-store";

const SERVICE = "AUTH_REFRESH_TOKEN";

export const saveRefreshToken = async (token: string): Promise<void> =>
  await SecureStore.setItemAsync(SERVICE, token);

export const getRefreshToken = async (): Promise<string | null> =>
  await SecureStore.getItemAsync(SERVICE);

export const deleteRefreshToken = async (): Promise<void> =>
  await SecureStore.deleteItemAsync(SERVICE);
