import bagIcon from "@/assets/icons/bag.png";
import { Image, Text, View } from "react-native";

const CartButton = () => {
  return (
    <View className="bg-gray-950 w-[50px] h-[50px] justify-center items-center rounded-full relative">
      <Image source={bagIcon} className="size-6" />
      <View className="bg-yellow-300 w-[24px] h-[24px] justify-center items-center rounded-full absolute -top-1 -right-1">
        <Text className="font-semibold text-md">{5}</Text>
      </View>
    </View>
  );
};

export default CartButton;
