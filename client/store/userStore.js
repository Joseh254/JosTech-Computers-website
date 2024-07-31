import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const userStore = (set) => ({
  user: null,
  changeUserInformation: (newUserObject) => {
    set((state) => ({
      user: newUserObject,
    }));
  },
  clearUserInformation: () => {
    set(() => ({
      user: null,
    }));
  },
});

const useUserStore = create(
  devtools(persist(userStore, { name: "the-flashback-user" })),
);

export default useUserStore;
