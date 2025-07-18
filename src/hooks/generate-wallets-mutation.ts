import { generatePrivateKey } from "viem/accounts";
import { Wallet } from "ethers";
import { useMutation } from "@tanstack/react-query";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
import { addNewWallet } from "@/store/wallets-slice";

export function useGenerateWalletsMutation() {
  const dispatch = useDispatch<AppDispatch>();

  return useMutation({
    mutationFn: async () => {
      const pk = generatePrivateKey();

      const userPassword = prompt("Insert a password for your wallet:");
      if (!userPassword) {
        throw new Error("Password is required");
      }

      const wallet = new Wallet(pk);
      const encryptedWallet = await wallet.encrypt(userPassword);

      dispatch(
        addNewWallet({
          address: wallet.address,
          encrypted: encryptedWallet,
        })
      );
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
