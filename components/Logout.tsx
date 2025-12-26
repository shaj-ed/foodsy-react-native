import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const Logout = () => {
  const router = useRouter();
  const logout = useAuthStore((e) => e.logout);

  const [isLoading, setIsLoading] = useState(false);

  const onLogout = async () => {
    setIsLoading(true);
    await logout();
    setIsLoading(false);
    router.navigate("/sign-in");
  };

  return (
    <TouchableOpacity
      className="p-4 w-full border border-amber-700 rounded-full bg-slate-100"
      onPress={onLogout}
      disabled={isLoading}
    >
      <Text className="text-center text-lg text-amber-700 font-semibold items-center gap-2">
        Log Out
        {isLoading ? <ActivityIndicator /> : null}
      </Text>
    </TouchableOpacity>
  );
};

export default Logout;
