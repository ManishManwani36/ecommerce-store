import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};

export default getCategories;
