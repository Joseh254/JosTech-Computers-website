// userStore.js
import create from "zustand";

const useStore = create((set) => ({
  user: null,
  greeting: "",
  setUser: (userData) => set({ user: userData }),
  clearUser: () => set({ user: null }),
  setGreeting: (message) => set({ greeting: message }),
  getUser: () => {
    const { user } = set.getState();
    return user;
  },
}));

export default useStore;
