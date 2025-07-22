"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { WalletItem } from "./wallet-item";

export const WalletsList = () => {
  const wallets = useSelector((state: RootState) => state.wallets.wallets);

  if (!wallets || wallets.length === 0) return null;

  return (
    <ul className="flex flex-col gap-2">
      {wallets.map((wallet) => (
        <WalletItem key={wallet.address} wallet={wallet} />
      ))}
    </ul>
  );
};
