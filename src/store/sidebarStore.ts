'use client';

import { create } from "zustand";

export type SidebarState = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
}));
