import { useMutation } from "@tanstack/react-query";

export function useGenerateWalletsMutation() {
  return useMutation({
    mutationFn: async () => {
      const userPassword = prompt("Insert a password for your wallet:");

      if (!userPassword) {
        throw new Error("Password is required");
      }

      await new Promise((resolve) => setTimeout(resolve, 3000));
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
