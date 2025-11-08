import minusIcon from "@/assets/icons/minus.png";
import plusIcon from "@/assets/icons/plus.png";
import deleteIcon from "@/assets/icons/trash.png";
import { CartItemType } from "@/lib/types";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  item: CartItemType;
};

const CartItem = ({ item }: Props) => {
  return (
    <View className="bg-slate-200 px-4 py-4 rounded-xl flex-row gap-4 items-center">
      <Image source={item.image} resizeMode="contain" className="size-32" />
      <View className="flex-1">
        <Text className="font-semibold text-2xl">{item.itemName}</Text>
        <Text className="font-semibold text-lg text-amber-500">
          {item.totalPrice} BDT
        </Text>
        <View className="flex-row items-center justify-between mt-4">
          <View className="flex-row gap-5 items-center">
            <TouchableOpacity className="p-2 bg-white rounded">
              <Image
                source={minusIcon}
                resizeMode="contain"
                className="size-5"
              />
            </TouchableOpacity>
            <Text className="text-xl font-semibold">{item.quantity}</Text>
            <TouchableOpacity className="p-2 bg-white rounded">
              <Image
                source={plusIcon}
                resizeMode="contain"
                className="size-5"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image
              source={deleteIcon}
              resizeMode="contain"
              className="size-8"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
