import { create } from "zustand";

interface OverlayState {
  isOverlayOpen: boolean;
  toggleOverlay: () => void;
  openModal: () => void;
  closeModal: () => void;
}

export const useOverlayStore = create<OverlayState>((set) => ({
  isOverlayOpen: false,
  toggleOverlay: () =>
    set((state) => ({ isOverlayOpen: !state.isOverlayOpen })),
  openModal: () => set({ isOverlayOpen: true }),
  closeModal: () => set({ isOverlayOpen: false }),
}));
