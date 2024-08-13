import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const userStore = (set) => ({
  user: null,
  cartCount: 0, // Initialize cartCount

  changeUserInformation: (newUserObject) => {
    set((state) => ({
      user: newUserObject,
    }));
  },

  clearUserInformation: () => {
    set(() => ({
      user: null,
      cartCount: 0, // Reset cartCount when user logs out
    }));
  },

  updateCartCount: (count) => {
    set(() => ({
      cartCount: count, // Update cartCount
    }));
  },
});

const useUserStore = create(
  devtools(persist(userStore, { name: "josTech-user" })),
);

export default useUserStore;
