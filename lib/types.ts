import { ImageSourcePropType } from "react-native";

export type MenuType = {
  id: number;
  name: string;
  price: string;
  image: ImageSourcePropType;
};

export type CategoryType = {
  id: number;
  name: string;
};

export type CartItemType = {
  id: number;
  itemName: string;
  quantity: number;
  perPrice: number;
  totalPrice: number;
  image: ImageSourcePropType;
};
