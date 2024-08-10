import {create} from "zustand"
import { devtools, persist } from "zustand/middleware";
const CounterStore = (set) => ({
    count: 0,
    changeCount: (newUserObject) => {
      set((state) => ({
        count: newUserObject,
      }));
    },
    clearCount: () => {
      set(() => ({
        count: 0,
      }));
    },
  });
  
  const useUserStore = create(
    devtools(persist(CounterStore, { name: "josTech-cart-count" })),
  );
  
  export default useUserStore;