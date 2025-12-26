import api from "@/src/api/axios";
import { CategoryResponse } from "../types/category.types";

const CATEGORY_URL = "/category";

export const getCategories = async (): Promise<CategoryResponse[]> => {
  const { data } = await api.get<CategoryResponse[]>(CATEGORY_URL);
  return data;
};
