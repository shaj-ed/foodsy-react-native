import { MenuType } from "@/lib/types";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  item: MenuType;
};

const MenuCard = ({ item }: Props) => {
  const onAddCart = () => {
    console.log("card");
  };

  return (
    <View className="px-6 mb-10 bg-slate-200 shadow-md shadow-black/10 rounded-2xl pb-6">
      <Image
        source={item.image}
        className="size-32 mx-auto -mt-[60px]"
        resizeMode="contain"
      />
      <Text className="text-2xl font-semibold text-center">{item.name}</Text>
      <Text className="text-center text-xl text-gray-600 font-semibold">
        {item.price} BDT
      </Text>
      <TouchableOpacity
        onPress={onAddCart}
        className="flex-row items-center justify-center gap-2 mt-8"
      >
        <Text className="text-yellow-800 text-xl">+</Text>
        <Text className="text-yellow-800 text-xl">Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuCard;
