"use client";

import { Generate } from "./generate";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { WalletsList } from "./wallets-list";
import { useIsMounted } from "@/hooks/use-is-mounted";

export const WalletsSection = () => {
  const mounted = useIsMounted();
  const wallets = useSelector((state: RootState) => state.wallets.wallets);
  const userHasWallets = wallets && wallets.length > 0;

  if (!mounted) return null;

  return (
    <>
      <section className="flex flex-col gap-4">
        <Generate />
        {userHasWallets && <WalletsList />}
      </section>
    </>
  );
};
