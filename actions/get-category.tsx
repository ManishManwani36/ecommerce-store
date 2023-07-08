import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);
  const data = await res.json();
  return data;
};

export default getCategory;
