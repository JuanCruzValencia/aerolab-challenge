import { URL_PRODUCTS, URL_HISTORY, TOKEN } from "../env-vars";

export const fetchProducts = async () => {
  const res = await fetch(URL_PRODUCTS, {
    headers: {
      Authorization: TOKEN,
    },
  });
  const products = await res.json();
  return products;
};

export const redeemHistory = async () => {
  const res = await fetch(URL_HISTORY, {
    headers: {
      Authorization: TOKEN,
    },
  });
  const history = await res.json();
  return history;
};
