<template>
  <section
    class="relative isolate px-6 pt-30 pb-30 lg:px-8 bg-center bg-cover bg-no-repeat"
    :style="{
      backgroundImage: `url(${bgHome})`
    }"
  >

    <div class="absolute inset-0 bg-[#ffc7d6]/50"></div>

    <div class="relative mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12">

      <div class="max-w-2xl text-center lg:text-left">
        <div class="mb-8 flex justify-center lg:justify-start">
          <span
            class="px-4 py-1.5 text-sm font-medium text-[#4a2b2c]
                   bg-white/20 backdrop-blur-md rounded-full shadow-sm
                   border border-white/30">
            Fashion Preloved Wanita
          </span>
        </div>

        <h1 class="text-5xl sm:text-7xl font-extrabold tracking-tight drop-shadow-sm">
          <span class="text-[#4a2b2c]">PRE</span><span class="text-[#4a2b2c]">-LUV</span>
        </h1>

        <p class="mt-6 text-lg sm:text-xl font-medium text-[#4a2b2c]/80 leading-relaxed">
          Temukan pakaian preloved terbaik dengan kualitas premium, harga terjangkau,
          dan gaya kekinian untuk semua wanita.
        </p>

        <div class="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
          <router-link
            to="/katalog"
            class="rounded-md px-6 py-3 text-sm font-bold text-white
                  bg-[#d47c83] shadow-md hover:bg-[#e5809c] transition">
            Get Started
          </router-link>

          <router-link
            to="/about"
            class="text-sm font-semibold text-[#4a2b2c] hover:underline underline-offset-4"
          >
            Learn more →
          </router-link>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import bgHome from "@/assets/bgHome.jpg";   // ganti dengan nama file kamu

export default {
  data() {
    return {
      bgHome
    };
  }
};
</script>
