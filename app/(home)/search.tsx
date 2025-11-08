import Filter from "@/components/Filter";
import Header from "@/components/Header";
import MenuCard from "@/components/MenuCard";
import SearchBar from "@/components/SearchBar";
import { initMenu } from "@/constants";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <SafeAreaView>
      <FlatList
        data={initMenu}
        renderItem={({ item, index }) => (
          <View className="flex-1 mt-10">
            <MenuCard item={item} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperClassName="gap-7 gap-y-10"
        contentContainerClassName="gap-7 px-4 pb-32"
        ListHeaderComponent={() => (
          <View className="px-2 my-5">
            <Header title="SEARCH" />

            <SearchBar />
            <Filter />
          </View>
        )}
        ListEmptyComponent={() =>
          !isLoading && (
            <View>
              <Text>Loading..</Text>
            </View>
          )
        }
      />
    </SafeAreaView>
  );
};

export default Search;
