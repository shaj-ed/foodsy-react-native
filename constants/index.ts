import burgerOne from "@/assets/images/burger-one.png";
import burgerTwo from "@/assets/images/burger-two.png";
import buritto from "@/assets/images/buritto.png";
import pizzaOne from "@/assets/images/pizza-one.png";
import { CartItemType, CategoryType, MenuType } from "@/lib/types";

export const offers = [
  {
    id: 1,
    title: "SUMMER COMBO",
    image: burgerOne,
    color: "#D33B0D",
  },
  {
    id: 2,
    title: "BURGER BASH",
    image: burgerTwo,
    color: "#DF5A0C",
  },
  {
    id: 3,
    title: "PIZZA PARTY",
    image: pizzaOne,
    color: "#084137",
  },
  {
    id: 4,
    title: "BURRITO DELIGHT",
    image: buritto,
    color: "#EB920C",
  },
];

export const initMenu: MenuType[] = [
  {
    id: 1,
    name: "Wendy's Buger",
    price: "700",
    image: burgerTwo,
  },
  {
    id: 2,
    name: "Veggie Buger",
    price: "400",
    image: burgerTwo,
  },
];

export const initCategory: CategoryType[] = [
  {
    id: 1,
    name: "Burger",
  },
  {
    id: 2,
    name: "Pizza",
  },
  {
    id: 3,
    name: "Soup",
  },
  {
    id: 4,
    name: "Shrimp",
  },
  {
    id: 5,
    name: "Salad",
  },
  {
    id: 6,
    name: "Chicken",
  },
];

export const initCateItems: CartItemType[] = [
  {
    id: 1,
    itemName: "Burger With Meat",
    quantity: 2,
    perPrice: 400,
    totalPrice: 800,
    image: burgerTwo,
  },
  {
    id: 2,
    itemName: "Burger With Meat",
    quantity: 2,
    perPrice: 400,
    totalPrice: 800,
    image: burgerTwo,
  },
  {
    id: 3,
    itemName: "Burger With Meat",
    quantity: 2,
    perPrice: 400,
    totalPrice: 800,
    image: burgerTwo,
  },
  {
    id: 4,
    itemName: "Burger With Meat",
    quantity: 2,
    perPrice: 400,
    totalPrice: 800,
    image: burgerTwo,
  },
];
