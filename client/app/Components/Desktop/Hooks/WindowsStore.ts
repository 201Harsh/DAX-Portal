import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface WindowConfig {
  isOpen: boolean;
  zIndex: number;
  data: any;
}

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG: { [key: string]: WindowConfig } = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  vscode: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  spotify: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

const useWindowsStore = create(
  immer((set: any) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey: string, data: any = null) =>
      set((state: any) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),

    closeWindow: (windowKey: string) =>
      set((state: any) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (windowKey: string) =>
      set((state: any) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
      }),
  }))
);

export default useWindowsStore;
