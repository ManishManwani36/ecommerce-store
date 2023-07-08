import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);
  const data = await res.json();
  return data;
};

export default getProduct;
