import CartButton from "@/components/CartButton";
import { offers } from "@/constants";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import cn from "clsx";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView>
      <View className="px-5 my-3 flex-row justify-between items-center">
        <View>
          <Text className="text-md text-amber-700 font-semibold">
            DELIVER TO
          </Text>
        </View>
        <CartButton />
      </View>

      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;

          return (
            <View>
              <Pressable
                style={{ backgroundColor: item.color }}
                className={cn(
                  "w-full h-48 flex gap- justify-between items-center overflow-hidden my-2 rounded-xl",
                  isEven ? "flex-row-reverse" : "flex-row",
                )}
              >
                {({ pressed }) => (
                  <>
                    <View className="h-full w-1/2">
                      <Image
                        source={item.image}
                        className="size-full"
                        resizeMode="contain"
                      />
                    </View>

                    <View>
                      <Text
                        className={cn(
                          "text-2xl leading-tight font-bold text-white ",
                          isEven ? "pl-10" : "pr-10",
                        )}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </>
                )}
              </Pressable>
            </View>
          );
        }}
        contentContainerClassName="px-5"
        contentContainerStyle={{ paddingBottom: tabBarHeight + 120 }}
      />
    </SafeAreaView>
  );
}
