import searchIcon from "@/assets/icons/search.png";
import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");

  const handleText = (text: string) => {
    setQuery(text);
  };

  const handleSubmit = () => {};

  return (
    <View className="w-full flex flex-row items-center bg-slate-200 border border-gray-100 rounded-full mt-4 h-[60px] shadow-md shadow-black">
      <TextInput
        value={query}
        onChangeText={handleText}
        onSubmitEditing={handleSubmit}
        placeholder="Search for pizza, buger.."
        className="p-5 flex-1"
      />

      <TouchableOpacity className="pr-5">
        <Image source={searchIcon} className="size-8" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
