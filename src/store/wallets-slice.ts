import { Wallet } from "@/types/Wallet";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WalletsState {
  wallets: Wallet[] | null;
}

const initialState: WalletsState = {
  wallets: null,
};

const walletsSlice = createSlice({
  name: "wallets",
  initialState,
  reducers: {
    addNewWallet(state, action: PayloadAction<Wallet>) {
      state.wallets = [...(state.wallets ?? []), action.payload];
    },
  },
});

export const { addNewWallet } = walletsSlice.actions;
export default walletsSlice.reducer;
