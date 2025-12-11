<template>
  <section 
    class="relative isolate px-6 pt-10 pb-20 lg:px-8
           bg-gradient-to-r from-[#b5828c] via-[#e5989b] to-[#ffcdb2]">

    <div aria-hidden="true" class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute left-1/2 top-[-12rem] w-[70rem] h-[70rem]
               -translate-x-1/2 rounded-full blur-[140px]
               bg-[#ffb4a2]/50 opacity-40">
      </div>
    </div>

    <div class="relative max-w-5xl mx-auto px-6 text-center">


      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight
                 text-[#4a2b2c] drop-shadow-sm">
        Rahmahdaniah Fitri
      </h1>

      <p class="mt-5 max-w-2xl mx-auto text-lg leading-relaxed
                text-[#4a2b2c]/80">
        11231084 | Informatika | Institut Teknologi Kalimantan 
      </p>

      <p class="mt-4 max-w-2xl mx-auto text-[#4a2b2c]/80 text-base leading-relaxed">
        Rahmahdaniah Fitri Mahasiswa Informatika ITK semester 5. Semoga beneran bisa luluss yah
      </p>

    </div>

    <div class="max-w-6xl mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

      <div
        v-for="member in team"
        :key="member.name"
        class="group bg-white/50 backdrop-blur-xl p-8 rounded-3xl shadow-xl 
               border border-white/60 text-center transition transform 
               hover:-translate-y-2 hover:shadow-2xl hover:bg-white/70"
      >

        <a
          
          class="flex items-center justify-center gap-2 px-5 py-2
                 bg-[#d47c83] text-white rounded-xl text-sm font-semibold
                 hover:bg-[#e5809c] transition shadow-md"
        >

          {{ member.phone }}
        </a>
      </div>

    </div>

  </section>
</template>

<script>

export default {
  data() {
    return {
      team: [
        {
          phone: "Public Speaking",
        },
        {
          phone: "Teaching",
        },
        {
         phone: "Bismillah Ngoding",
        },
      ]
    };
  }
};
</script>
