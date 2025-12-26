import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/category.api";

export const useCategoryList = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
