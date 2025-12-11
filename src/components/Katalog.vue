<template>
  <section
    class="relative min-h-screen px-6 py-20 bg-cover bg-center">
    
    <img
      :src="bg2"
      alt="background"
      class="absolute inset-0 w-full h-full object-cover -z-10"
    />

    <div class="absolute inset-0 bg-white/40 backdrop-blur-sm z-0"></div>

    <div class="relative z-10 max-w-7xl mx-auto">
      
      <h1 class="text-4xl font-extrabold text-[#4a2b2c] text-center mb-10">
        Katalog Preloved Wanita
      </h1>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">

        <div
          v-for="(item, index) in products"
          :key="index"
          class="bg-white rounded-2xl shadow-lg p-4 border border-white/60"
        >
          <img
            :src="item.image"
            class="w-full h-60 object-contain rounded-md"
            alt="produk"
          />

          <div class="bg-[#ffb4b8] text-center mt-4 py-2 rounded-xl font-bold text-[#4a2b2c]">
            {{ item.price }}
          </div>

          <div class="flex justify-between items-center mt-4">

            <button
              @click="openDetail(item)"
              class="px-4 py-1 bg-[#d47c83] text-white text-sm rounded-lg hover:bg-[#e5809c] transition"
            >
              Detail
            </button>

            <button
              @click="addToCart(item)"
              class="w-10 h-10 flex items-center justify-center bg-[#ffd5d5] border border-[#ffb4b8] text-[#4a2b2c] font-bold rounded-full hover:bg-[#ffc7c7] transition"
            >
              +
            </button>

          </div>
        </div>

      </div>
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50"
    >
      <div class="bg-white rounded-2xl p-8 max-w-lg w-full relative shadow-xl">

        <button
          @click="closeDetail"
          class="absolute top-3 right-3 text-[#4a2b2c] text-2xl font-bold"
        >
          ×
        </button>

        <img
          :src="selectedProduct.image"
          class="w-full h-72 object-contain mb-6 rounded-lg"
        />

        <h2 class="text-2xl font-extrabold text-[#4a2b2c] mb-2">
          {{ selectedProduct.name }}
        </h2>

        <p class="text-[#d47c83] font-bold text-xl mb-4">
          {{ selectedProduct.price }}
        </p>

        <p class="text-[#4a2b2c]/80 leading-relaxed mb-6">
          {{ selectedProduct.desc }}
        </p>

        <button
          @click="addToCart(selectedProduct)"
          class="w-full py-3 bg-[#d47c83] text-white rounded-xl hover:bg-[#e5809c] transition"
        >
          Tambahkan ke Keranjang
        </button>

      </div>
    </div>

  </section>
</template>


<script>
import foto1 from "@/assets/foto1.jpg";
import foto2 from "@/assets/foto2.jpg";
import foto3 from "@/assets/foto5.jpg";
import foto4 from "@/assets/foto6.jpg";
import foto5 from "@/assets/foto11.jpg";
import foto6 from "@/assets/foto10.jpg";
import foto7 from "@/assets/foto9.jpg";
import foto8 from "@/assets/foto8.jpg";
import bg2 from "@/assets/bg6.jpg";

import { useCartStore } from "@/router/Cart";

export default {
  setup() {
    const cart = useCartStore();
    return { cart };
  },

  data() {
    return {
      bg2,
      showModal: false,
      selectedProduct: {},
      products: [
        {
          name: "Blouse Biru Gradasi Flowers",
          price: "Rp. 45,000",
          desc: "Blouse preloved premium, bahan adem, kondisi 98% seperti baru.",
          image: foto1,
        },
        {
          name: "Kulot Coklat Vintage",
          price: "Rp. 15,000",
          desc: "Kulot bahan suede halus, nyaman dipakai dan tampilan elegan.",
          image: foto2,
        },
        {
          name: "Rok lilit Motif Retro dan Flowers",
          price: "Rp. 10,000",
          desc: "Rok unik dengan motif retro, cocok untuk OOTD casual.",
          image: foto3,
        },
        {
          name: "Blouse Cream Elegan Satin",
          price: "Rp. 25,000",
          desc: "Blouse cantik warna cream pastel, cocok untuk acara party night.",
          image: foto4,
        },
        {
          name: "Dress Merah Maroon Cantik",
          price: "Rp. 55,000",
          desc: "Dress preloved premium, bahan adem, kondisi 98% seperti baru.",
          image: foto5,
        },
        {
          name: "Celana Panjang Hitam Formal",
          price: "Rp. 20,000",
          desc: "Celana panjang bahan formal, nyaman dipakai",
          image: foto6,
        },
        {
          name: "Rok Plisket Abu-Abu Stylish",
          price: "Rp. 30,000",
          desc: "Rok plisket warna abu-abu netral, cocok untuk berbagai gaya.",
          image: foto7,
        },
        {
          name: "Kemeja Kotak-Kotak Casual",
          price: "Rp. 18,000",
          desc: "Kemeja kotak-kotak warna cerah, cocok untuk OOTD santai.",
          image: foto8,
        },
      ],
    };
  },

  methods: {
    openDetail(item) {
      this.selectedProduct = item;
      this.showModal = true;
    },

    closeDetail() {
      this.showModal = false;
    },

    addToCart(item) {
      this.cart.addToCart(item);
    },
  },
};
</script>
