<template>
  <section
    class="relative isolate px-6 pt-30 pb-30 lg:px-8
           bg-gradient-to-r from-[#b5828c] via-[#e5989b] to-[#ffcdb2]">

    <img
      :src="bg2"
      alt="Background image"
      class="absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
    />

    <div aria-hidden="true" class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute left-1/2 top-[-10rem] w-[60rem] h-[60rem]
               -translate-x-1/2 rounded-full blur-[120px]
               bg-[#ffb4a2]/40">
      </div>
    </div>

    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-4">
      <div class="text-left font-light text-[#4a2b2c]/80 sm:text-lg">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-[#4a2b2c] drop-shadow-sm">
          Tentang PRE-LUV
        </h2>

        <p class="mb-4 leading-relaxed font-medium">
          Kami adalah platform fashion preloved wanita terbaik untuk kamu
          yang ingin tampil cantik, elegan, dan stylish tanpa harus mahal.
        </p>

        <p class="leading-relaxed font-medium">
          Tim PRE-LUV terdiri dari kurator fashion berpengalaman, memastikan
          setiap item preloved tetap berkualitas premium, bersih, rapi, dan layak pakai.
        </p>
      </div>
    </div>

  </section>
</template>

<script>
import bg2 from "@/assets/bg6.jpg";

export default {
  data() {
    return { bg2 };
  }
};
</script>
