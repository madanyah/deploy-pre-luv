<template>
  <div v-if="visible" class="fixed inset-0 bg-black/40 z-[999] flex justify-center items-center px-4">
    
    <div class="bg-white rounded-2xl p-8 w-full max-w-lg relative shadow-xl">

      <button
        @click="closeCart"
        class="absolute top-3 right-3 text-2xl text-[#4a2b2c]"
      >
        ×
      </button>

      <h2 class="text-2xl font-bold text-[#4a2b2c] mb-6">
        Keranjang Belanja
      </h2>

      <div v-if="cart.items.length > 0" class="space-y-4">
        <div
          v-for="(item, index) in cart.items"
          :key="index"
          class="flex justify-between items-center bg-[#ffe5e7] px-4 py-3 rounded-lg"
        >
          <div class="flex gap-3 items-center">
            <img :src="item.image" class="w-14 h-14 object-cover rounded-md" />

            <div>
              <p class="font-semibold text-[#4a2b2c]">{{ item.name }}</p>
              <p class="text-sm text-[#d47c83]">{{ item.price }}</p>
            </div>
          </div>

          <button
            @click="cart.removeFromCart(index)"
            class="text-red-500 font-bold text-lg"
          >
            ×
          </button>
        </div>
      </div>

      <div v-else class="text-center text-[#4a2b2c]/60 py-10">
        Keranjang kosong 😔
      </div>

      <div v-if="cart.items.length > 0" class="mt-6 flex justify-between items-center">
        <span class="font-bold text-[#4a2b2c] text-lg">Total:</span>
        <span class="font-extrabold text-[#d47c83] text-xl">
          Rp {{ cart.totalPrice.toLocaleString() }}
        </span>
      </div>

      <button
        @click="checkout"
        class="w-full mt-6 py-3 bg-[#d47c83] text-white rounded-xl font-semibold hover:bg-[#e5809c] transition shadow-md"
      >
        Checkout
      </button>

    </div>
  </div>
</template>


<script>
import { useCartStore } from "@/router/Cart";
import { storeToRefs } from "pinia";

export default {
  props: ["visible"],
  emits: ["close"],

  setup(props, { emit }) {
    const cart = useCartStore();

    const { items, totalPrice } = storeToRefs(cart);

    const closeCart = () => emit("close");

    const checkout = () => {
      if (items.value.length === 0) {
        alert("Tidak ada barang di keranjangmu 😔");
        return;
      }

      alert("Pesananmu telah dibuat! ❤️");

      cart.clearCart(); 
      emit("close");     
    };

    return {
      cart,
      items,
      totalPrice,
      closeCart,
      checkout
    };
  }
};
</script>
