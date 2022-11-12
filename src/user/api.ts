import { URL_USER, URL_REDEEM, URL_COINS, TOKEN } from "../env-vars";
import { Product } from "../products/type";

// usada
export const fetchUser = async () => {
  const res = await fetch(URL_USER, {
    headers: {
      Authorization: TOKEN,
    },
  });
  const user = await res.json();
  return user;
};

export const redeemProduct = async (productId: Product["_id"]) => {
  const redeemOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
    body: JSON.stringify({ productId: productId }),
  };
  await fetch(URL_REDEEM, redeemOptions);
};
// usada
export const addCoins = async (amount: number) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
    body: JSON.stringify({ amount: amount }),
  };
  await fetch(URL_COINS, requestOptions);
};
