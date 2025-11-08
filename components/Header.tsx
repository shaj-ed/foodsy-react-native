import { Text, View } from "react-native";
import CartButton from "./CartButton";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <View className="flex-row justify-between items-center">
      <Text className="text-lg text-amber-700 font-semibold">{title}</Text>
      <CartButton />
    </View>
  );
};

export default Header;
