import { Product } from "../products/type";

export type User = {
  id: string;
  name: string;
  points: number;
  redeemHistory: Product[];
  createDate: string;
};
