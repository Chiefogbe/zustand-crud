// store.js
import {create} from 'zustand';

const useItemStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  updateItem: (index, newItem) =>
    set((state) => {
      const updatedItems = [...state.items];
      updatedItems[index] = newItem;
      return { items: updatedItems };
    }),
  removeItem: (index) =>
    set((state) => ({
      items: state.items.filter((_, i) => i !== index),
    })),
}));

export default useItemStore;
