<template>
  <nav
    class="w-full bg-gradient-to-r from-[#b5838d] via-[#e5989b] to-[#ffcdba]
           backdrop-blur-md py-4 shadow-sm relative"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">

      <h1 class="text-2xl font-extrabold tracking-tight">
        <span class="text-[#ffdd]">PRE</span>
        <span class="text-[#5a2d2d]">-LUV</span>
      </h1>

      <ul class="hidden md:flex space-x-10 font-medium text-[#3a2a2a]">

        <li>
          <router-link to="/" v-slot="{ isActive }">
            <span
              class="relative pb-1 cursor-pointer"
              :class="isActive ? 'font-bold text-[#3a2a2a]' : ''"
            >
              Home
              <span v-if="isActive"
                class="absolute left-0 -bottom-1 h-[2px] w-full bg-[#3a2a2a] rounded-md block">
              </span>
            </span>
          </router-link>
        </li>

        <li>
          <router-link to="/about" v-slot="{ isActive }">
            <span
              class="relative pb-1 cursor-pointer"
              :class="isActive ? 'font-bold text-[#3a2a2a]' : ''"
            >
              About
              <span v-if="isActive"
                class="absolute left-0 -bottom-1 h-[2px] w-full bg-[#3a2a2a] rounded-md block">
              </span>
            </span>
          </router-link>
        </li>

        <li>
          <router-link to="/aboutme" v-slot="{ isActive }">
            <span
              class="relative pb-1 cursor-pointer"
              :class="isActive ? 'font-bold text-[#3a2a2a]' : ''"
            >
              About Me
              <span v-if="isActive"
                class="absolute left-0 -bottom-1 h-[2px] w-full bg-[#3a2a2a] rounded-md block">
              </span>
            </span>
          </router-link>
        </li>

        <li>
          <router-link to="/katalog" v-slot="{ isActive }">
            <span
              class="relative pb-1 cursor-pointer"
              :class="isActive ? 'font-bold text-[#3a2a2a]' : ''"
            >
              Katalog
              <span v-if="isActive"
                class="absolute left-0 -bottom-1 h-[2px] w-full bg-[#3a2a2a] rounded-md block">
              </span>
            </span>
          </router-link>
        </li>

        <li>
          <router-link to="/selling" v-slot="{ isActive }">
            <span
              class="relative pb-1 cursor-pointer"
              :class="isActive ? 'font-bold text-[#3a2a2a]' : ''"
            >
              Selling
              <span v-if="isActive"
                class="absolute left-0 -bottom-1 h-[2px] w-full bg-[#3a2a2a] rounded-md block">
              </span>
            </span>
          </router-link>
        </li>

        <li>
          <router-link to="/contact" v-slot="{ isActive }">
            <span
              class="relative pb-1 cursor-pointer"
              :class="isActive ? 'font-bold text-[#3a2a2a]' : ''"
            >
              Contact
              <span v-if="isActive"
                class="absolute left-0 -bottom-1 h-[2px] w-full bg-[#3a2a2a] rounded-md block">
              </span>
            </span>
          </router-link>
        </li>

      </ul>

      <div class="flex items-center gap-4">

        <div class="relative">
          <button
            @click="$emit('open-cart')"
            class="flex items-center justify-center
                   w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/30 backdrop-blur-md
                   border border-white/40 text-[#5a2d2d] hover:bg-white/40 
                   transition shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                class="w-6 h-6 md:w-7 md:h-7">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.837l.383 1.437m0 0L6.75 12.75m-1.644-7.476h13.788c.69 0 1.227.614 1.116 1.297l-1.2 7.2a1.125 1.125 0 01-1.116.903H7.41m.228 0h-.003a1.125 1.125 0 10.003 0zm10.125 0h.003a1.125 1.125 0 11-.003 0z"/>
            </svg>
          </button>

          <div
            v-if="cart.items.length > 0"
            class="absolute -top-2 -right-2 bg-[#e5809c] text-white text-xs font-bold
                   px-2 py-[2px] rounded-full border-2 border-white shadow-md animate-bounce"
          >
            {{ cart.items.length }}
          </div>
        </div>

        <button
          @click="toggleMenu"
          class="md:hidden text-[#5a2d2d] text-3xl"
        >
          {{ menuOpen ? "✕" : "☰" }}
        </button>

      </div>
    </div>

    <div
      v-if="menuOpen"
      class="md:hidden bg-white/40 backdrop-blur-xl border-t border-white/30
             mt-4 px-6 py-4 space-y-4 font-medium text-[#3a2a2a]"
    >
      <router-link to="/" class="block pb-1" @click="closeMenu">Home</router-link>
      <router-link to="/about" class="block pb-1" @click="closeMenu">About</router-link>
      <router-link to="/aboutme" class="block pb-1" @click="closeMenu">About Me</router-link>
      <router-link to="/katalog" class="block pb-1" @click="closeMenu">Katalog</router-link>
      <router-link to="/selling" class="block pb-1" @click="closeMenu">Selling</router-link>
      <router-link to="/contact" class="block pb-1" @click="closeMenu">Contact</router-link>
    </div>

  </nav>
</template>

<script>
import { useCartStore } from "@/router/Cart";

export default {
  setup() {
    const cart = useCartStore();
    return { cart };
  },

  data() {
    return {
      menuOpen: false
    };
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
};
</script>
