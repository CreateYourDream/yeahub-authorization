import type { store } from "./store";

export type ExtraArgument = {
    navigate: (path: string) => Promise<void>;
};
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch