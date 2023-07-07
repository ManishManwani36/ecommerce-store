import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL as string}/billboards`;

const getBillboard = async (id: string): Promise<Billboard[]> => {
  const res = await fetch(`${URL}/${id}`);
  const data = await res.json();
  return data;
};

export default getBillboard;