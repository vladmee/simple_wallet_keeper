import { useGenerateWalletsMutation } from "./generate-wallets-mutation";

export function useGenerateWallets() {
  const {
    mutate: generateWalletsMutation,
    isPending: isPendingGenerateWallets,
  } = useGenerateWalletsMutation();

  const isLoading = isPendingGenerateWallets;

  const generateWallets = async () => {
    try {
      generateWalletsMutation();
    } catch (error) {
      console.error("Error generating wallets:", error);
    }
  };

  return {
    isLoading,
    generateWallets,
  };
}
