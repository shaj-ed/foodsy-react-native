import { initCategory } from "@/constants";
import cn from "clsx";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";

const Filter = () => {
  const [active, setActive] = useState<string>("Burger");

  const handlePress = (id: number) => {
    const selected = initCategory.find((cat) => cat.id === id);

    if (selected) {
      setActive(selected.name);
    }
  };

  return (
    <FlatList
      data={initCategory}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            className={cn(
              "px-4 py-2 rounded-3xl",
              active === item.name ? "bg-amber-500" : "bg-slate-200",
            )}
            onPress={() => handlePress(item.id)}
          >
            <Text className="text-lg font-semibold">{item.name}</Text>
          </TouchableOpacity>
        );
      }}
      contentContainerClassName="gap-x-2"
      className="mt-4"
    />
  );
};

export default Filter;
