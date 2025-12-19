"use client";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface WindowConfig {
  isOpen: boolean;
  zIndex: number;
  data: any;
  position: { x: number; y: number };
  size: { w: number; h: number };
  isMaximized: boolean;
  prevPosition: { x: number; y: number } | null;
  prevSize: { w: number; h: number } | null;
}

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG: { [key: string]: WindowConfig } = {
  finder: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 100, y: 100 },
    size: { w: 810, h: 450 },
    isMaximized: false,
    prevPosition: null,
    prevSize: null,
  },
  contact: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 100, y: 100 },
    size: { w: 750, h: 500 },
    isMaximized: false,
    prevPosition: null,
    prevSize: null,
  },
  resume: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 500, y: 30 },
    size: { w: 600, h: 780 },
    isMaximized: false,
    prevPosition: null,
    prevSize: null,
  },
  browser: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 50, y: 50 },
    size: { w: 750, h: 550 },
    isMaximized: false,
    prevPosition: null,
    prevSize: null,
  },
  gallery: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 100, y: 100 },
    size: { w: 800, h: 680 },
    isMaximized: false,
    prevPosition: null,
    prevSize: null,
  },
  terminal: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 100, y: 10 },
    size: { w: 400, h: 500 },
    isMaximized: false,
    prevPosition: null,
    prevSize: null,
  },
  txtfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 670, y: 50 },
    size: { w: 600, h: 500 },
    isMaximized: false,
    prevPosition: null,
    prevSize: null,
  },
  imgfile: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 400, y: 10 },
    size: { w: 600, h: 500 },
    isMaximized: false,
    prevPosition: null,
    prevSize: null,
  },
  vscode: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 500, y: 100 },
    size: { w: 600, h: 500 },
    isMaximized: false,
    prevPosition: null,
    prevSize: null,
  },
  spotify: {
    isOpen: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
    position: { x: 100, y: 100 },
    size: { w: 600, h: 500 },
    isMaximized: false,
    prevPosition: null,
    prevSize: null,
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

    toggleMaximizeWindow: (windowKey: string) =>
      set((state: any) => {
        const win = state.windows[windowKey];
        if (!win) return;

        if (win.isMaximized) {
          if (win.prevPosition && win.prevSize) {
            win.position = { ...win.prevPosition };
            win.size = { ...win.prevSize };
          }

          win.isMaximized = false;
          win.prevPosition = null;
          win.prevSize = null;
        } else {
          win.prevPosition = { ...win.position };
          win.prevSize = { ...win.size };

          win.position = { x: 0, y: 0 };
          win.size = {
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight,
          };

          win.isMaximized = true;
        }

        win.zIndex = state.nextZIndex++;
        win.isOpen = true;
      }),
  }))
);

export default useWindowsStore;
