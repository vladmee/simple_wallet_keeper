"use client";

import { Wallet } from "@/types/Wallet";
import { RevealPK } from "./reveal-pk";

export const WalletItem = ({ wallet }: { wallet: Wallet }) => {
  return (
    <li className="flex justify-between items-center gap-4">
      {wallet.address} <RevealPK wallet={wallet} />
    </li>
  );
};
