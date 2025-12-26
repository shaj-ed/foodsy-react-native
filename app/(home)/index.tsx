import CartButton from "@/components/CartButton";
import SafeScreen from "@/components/common/SafeScreen";
import Category from "@/features/category/components/Category";
import { useAuthStore } from "@/store/auth.store";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  if (!isAuthenticated) return <Redirect href="/sign-in" />;

  return (
    <SafeScreen>
      <View className="px-5 my-3 flex-row justify-between items-center">
        <View>
          <Text className="text-md text-amber-700 font-semibold">
            DELIVER TO
          </Text>
        </View>
        <CartButton />
      </View>

      <Category />
    </SafeScreen>
  );
}
