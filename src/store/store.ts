import { configureStore } from "@reduxjs/toolkit";
import walletsReducer, { WalletsState } from "./wallets-slice";
import { loadWalletsState, saveWalletsState } from "./persist";

const preloadedState = {
  wallets: loadWalletsState() || {
    wallets: null,
  },
};

export const store = configureStore({
  reducer: {
    wallets: walletsReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state: { wallets: WalletsState } = store.getState();
  saveWalletsState(state.wallets);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
