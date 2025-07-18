import { generatePrivateKey } from "viem/accounts";
import { Wallet } from "ethers";
import { useMutation } from "@tanstack/react-query";

export function useGenerateWalletsMutation() {
  return useMutation({
    mutationFn: async () => {
      const pk = generatePrivateKey();

      const userPassword = prompt("Insert a password for your wallet:");
      if (!userPassword) {
        throw new Error("Password is required");
      }

      const wallet = new Wallet(pk);
      const encryptedWallet = await wallet.encrypt(userPassword);

      console.log({ encryptedWallet });

      // save to redux here
    },
    onSuccess: async () => {
      alert("Wallet created successfully!");
    },
    onError: (error) => {
      console.error(error);
      alert("Something went wrong! Please try again");
    },
  });
}
