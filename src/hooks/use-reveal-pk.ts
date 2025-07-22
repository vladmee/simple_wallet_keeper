import { Wallet } from "@/types/Wallet";
import { Wallet as EthersWallet } from "ethers";

export function useRevealPK() {
  const revealPK = async (wallet: Wallet) => {
    try {
      const userPassword = prompt(
        "Insert the password you used to encrypt this wallet:"
      );
      if (!userPassword) {
        throw new Error("Password is required");
      }

      const decrypted = await EthersWallet.fromEncryptedJson(
        wallet.encrypted,
        userPassword
      );

      alert(
        `Your private key for the address ${wallet.address} is ${decrypted.privateKey}`
      );
    } catch (error) {
      console.error("Error decrypting the wallet:", error);
      if (String(error).includes("incorrect password")) {
        alert("Your password is incorrect! Please try again");
      }
    }
  };

  return {
    revealPK,
  };
}
