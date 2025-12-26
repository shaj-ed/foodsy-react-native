import Loading from "@/components/common/Loading";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import cn from "clsx";
import { Image } from "expo-image";
import React from "react";
import { Dimensions, FlatList, Pressable, Text, View } from "react-native";
import { useCategoryList } from "../hooks/useCategory";

const Category = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const { data, isLoading } = useCategoryList();

  const SCREEN_WIDTH = Dimensions.get("window").width;
  const numColumns = 2;
  const GAP = 16;

  if (isLoading) return <Loading />;

  if (!data)
    return (
      <Text className="text-center text-xl mt-10">No Category Availabe</Text>
    );

  return (
    <FlatList
      data={data}
      numColumns={numColumns}
      key={`grid-${numColumns}`}
      contentContainerClassName=""
      renderItem={({ item, index }) => {
        const itemWidth = SCREEN_WIDTH / numColumns - GAP;

        return (
          <View style={{ width: itemWidth, margin: GAP / 2 }}>
            <Pressable
              style={{
                borderRadius: 12,
                overflow: "hidden",
                justifyContent: "space-between",
              }}
            >
              {({ pressed }) => (
                <>
                  <View className="h-full w-full rounded-lg overflow-hidden">
                    <Image
                      source={{ uri: `data:image/jpeg;base64,${item.image}` }}
                      style={{ width: "100%", height: 120 }}
                    />
                  </View>

                  <View className="px-2">
                    <Text className={cn("text-2xl leading-tight font-bold")}>
                      {item.categoryName}
                    </Text>
                    <Text className={cn("text-md leading-tight")}>
                      {item.description}
                    </Text>
                  </View>
                </>
              )}
            </Pressable>
          </View>
        );
      }}
      contentContainerStyle={{ paddingBottom: tabBarHeight + 120 }}
    />
  );
};

export default Category;
