"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export const WalletsList = () => {
  const wallets = useSelector((state: RootState) => state.wallets.wallets);

  if (!wallets || wallets.length === 0) return null;

  return (
    <ul className="flex flex-col gap-2">
      {wallets.map((wallet) => (
        <span key={wallet.address}>{wallet.address}</span>
      ))}
    </ul>
  );
};
