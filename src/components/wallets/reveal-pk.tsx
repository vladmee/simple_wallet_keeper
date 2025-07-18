"use client";

import { useRevealPK } from "@/hooks/use-reveal-pk";
import { Wallet } from "@/types/Wallet";

export const RevealPK = ({ wallet }: { wallet: Wallet }) => {
  const { revealPK } = useRevealPK();

  const handleReveal = async () => {
    await revealPK(wallet);
  };

  return (
    <button
      onClick={handleReveal}
      className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition cursor-pointer"
    >
      Reveal Private Key
    </button>
  );
};
