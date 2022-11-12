import { Center, CircularProgress } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { addCoins, fetchUser } from "./api";
import { User } from "./type";

interface Context {
  state: {
    user?: User;
  };
  actions: {
    addCoins: (amount: number) => void;
    redeem: (amount: number) => void;
  };
}

export const UserContext = React.createContext({} as Context);

type Props = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState<
    "pending" | "resolved" | "rejected"
  >("pending");

  const handleCoins = (amount: number) => {
    if (!user) return;
    addCoins(amount).then(() => {
      setUser({ ...user, points: user.points + amount });
    });
  };

  const handleRedeem = (amount: number) => {
    if (!user) return;
    setUser({ ...user, points: user.points - amount });
  };

  useEffect(() => {
    fetchUser().then((user) => {
      setUser(user);
      setIsLoading("resolved");
    });
  }, []);

  if (!user && isLoading === "pending") {
    return (
      <Center>
        <CircularProgress value={50} isIndeterminate color="coral.300" />
      </Center>
    );
  }

  const state = {
    user,
  };
  const actions = {
    addCoins: handleCoins,
    redeem: handleRedeem,
  };
  return (
    <UserContext.Provider value={{ state, actions }}>
      {children}
    </UserContext.Provider>
  );
};
