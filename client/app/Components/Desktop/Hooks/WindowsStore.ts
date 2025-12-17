import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface WindowConfig {
  isOpen: boolean;
  zIndex: number;
  data: any;
  position: { x: number; y: number };
  size: { w: number; h: number };
}

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG: { [key: string]: WindowConfig } = {
  finder: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 100, y: 100 },
    size: { w: 600, h: 500 },
  },
  contact: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 100, y: 100 },
    size: { w: 600, h: 500 },
  },
  resume: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 100, y: 100 },
    size: { w: 600, h: 500 },
  },
  safari: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 100, y: 100 },
    size: { w: 600, h: 500 },
  },
  photos: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 100, y: 100 },
    size: { w: 600, h: 500 },
  },
  terminal: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 100, y: 100 },
    size: { w: 600, h: 500 },
  },
  txtfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 100, y: 100 },
    size: { w: 600, h: 500 },
  },
  imgfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 100, y: 100 },
    size: { w: 600, h: 500 },
  },
  vscode: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 100, y: 100 },
    size: { w: 600, h: 500 },
  },
  spotify: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 100, y: 100 },
    size: { w: 600, h: 500 },
  },
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
