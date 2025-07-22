import { WalletsState } from "./wallets-slice";

const KEY = "wallets";

export function loadWalletsState(): WalletsState | undefined {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed === "object" &&
      "wallets" in parsed &&
      Array.isArray(parsed.wallets)
    ) {
      return parsed as WalletsState;
    }
    return undefined;
  } catch {
    return undefined;
  }
}

export function saveWalletsState(state: WalletsState) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {}
}
