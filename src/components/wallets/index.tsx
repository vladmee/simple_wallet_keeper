"use client";

import { Generate } from "./generate";

export const WalletsSection = () => {
  const userHasWallets = false;

  const renderContent = () => {
    if (userHasWallets) return <>wallets here</>;

    return <Generate />;
  };

  return (
    <>
      <section>{renderContent()}</section>
    </>
  );
};
