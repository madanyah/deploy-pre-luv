import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: []
  }),

  getters: {
    totalPrice(state) {
      return state.items.reduce((acc, item) => {
        const price = Number(item.price.replace(/[^0-9]/g, ""));
        return acc + price;
      }, 0);
    }
  },

  actions: {
    addToCart(item) {
      this.items.push(item);
    },

    removeFromCart(index) {
      this.items.splice(index, 1);
    },

    clearCart() {
      this.items = [];   
    }
  }
});
