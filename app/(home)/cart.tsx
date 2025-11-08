import CartItem from "@/components/CartItem";
import Header from "@/components/Header";
import { initCateItems } from "@/constants";
import cn from "clsx";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={initCateItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <CartItem item={item} />;
        }}
        ListHeaderComponent={() => (
          <View className="px-4 py-6">
            <Header title="Cart" />
          </View>
        )}
        contentContainerClassName="gap-5 px-4 pb-32"
        ListEmptyComponent={() => (
          <View className="my-8">
            <Text className="text-2xl text-center">No item at cart</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View>
            <View className="border border-gray-400 mt-10 p-6 rounded-xl gap-6">
              <Text className="font-semibold text-2xl mb-4">
                Payment Summary
              </Text>
              <PaymentInfo
                label={`Total Items ${2}`}
                value="800"
                labelStyle="text-gray-600"
              />
              <PaymentInfo
                label="Delivery Fee"
                value="Free"
                labelStyle="text-gray-600"
              />
              <PaymentInfo
                label="Discount"
                value="-100"
                labelStyle="text-gray-600"
                valueStyle="text-amber-800 font-semibold"
              />
              <View className="border-t border-gray-300"></View>
              <PaymentInfo
                label="Total"
                value="300"
                labelStyle="font-semibold"
              />
            </View>

            <TouchableOpacity className="w-full p-5 bg-amber-500 rounded-full mt-6">
              <Text className="text-xl text-white font-semibold text-center">
                Order Now
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

type Props = {
  label: string;
  value: string;
  labelStyle?: string;
  valueStyle?: string;
};

const PaymentInfo = ({ label, value, labelStyle, valueStyle }: Props) => {
  return (
    <View className="flex-row justify-between items-start">
      <Text className={cn("text-lg", labelStyle)}>{label}</Text>
      <Text className={cn("font-bold text-lg", valueStyle)}>{value} BDT</Text>
    </View>
  );
};

export default Cart;
