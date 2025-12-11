<template>
  <div>
    <Navbar @open-cart="showCart = true" />

    <router-view />

    <Footer />

    <Cart :visible="showCart" @close="showCart = false" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Cart from "@/components/Cart.vue";

export default {
  components: { Navbar, Footer, Cart },

  data() {
    return {
      showCart: false,
    };
  },
};
</script>
