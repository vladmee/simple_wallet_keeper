"use client";

import { useGenerateWallets } from "@/hooks/use-generate-wallets";

export const Generate = () => {
  const { generateWallets, isLoading } = useGenerateWallets();

  const handleGenerateWallets = async () => {
    await generateWallets();
  };

  return (
    <button
      onClick={handleGenerateWallets}
      disabled={isLoading}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer disabled:bg-gray-300
    disabled:text-gray-500
    disabled:cursor-not-allowed"
    >
      {!isLoading ? "Generate New Wallet" : "Generating..."}
    </button>
  );
};
