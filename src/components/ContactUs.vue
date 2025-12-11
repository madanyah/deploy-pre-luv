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

      <div class="mb-6">
        <button
          @click="$router.push('/contact')"
          class="px-5 py-2 bg-white/40 backdrop-blur border border-white/50 
                text-[#4a2b2c] font-semibold rounded-xl shadow-sm 
                hover:bg-white/60 transition"
        >
          Contact Us
        </button>
      </div>


      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight
                 text-[#4a2b2c] drop-shadow-sm">
        Let’s Connect With Our Team
      </h1>

      <p class="mt-5 max-w-2xl mx-auto text-lg leading-relaxed
                text-[#4a2b2c]/80">
        Kami siap membantu Anda menemukan pakaian preloved terbaik
        dengan kualitas premium serta harga yang tetap terjangkau.
        Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut.
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
  
        <div
          class="relative w-28 h-28 mx-auto rounded-full overflow-hidden shadow-lg mb-5
                 border-4 border-[#f7c6d0] group-hover:border-[#e58da3] transition"
        >
          <img :src="member.photo" class="w-full h-full object-cover" />
        </div>

        <h3 class="text-2xl font-bold text-[#4a2b2c]">
          {{ member.name }}
        </h3>

        <p class="text-[#4a2b2c]/70 text-sm mt-1 mb-4">
          {{ member.role }}
        </p>

        <a
          :href="`https://wa.me/${member.phone.replace(/[^0-9]/g, '')}`"
          target="_blank"
          class="flex items-center justify-center gap-2 px-5 py-2
                 bg-[#d47c83] text-white rounded-xl text-sm font-semibold
                 hover:bg-[#e5809c] transition shadow-md"
        >
    
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
               viewBox="0 0 24 24" class="w-5 h-5">
            <path d="M12 2C6.49 2 2 6.03 2 11.14c0 2.82 1.38 5.36 3.57 7.16L4.2 22l3.89-1.27c1.25.35 2.58.54 3.91.54 5.51 0 10-4.03 10-9.14S17.51 2 12 2zm0 16.8c-1.13 0-2.24-.19-3.28-.57l-.23-.09-2.31.75.76-2.2-.15-.23C5.54 15 4.8 13.12 4.8 11.14 4.8 7.29 8.02 4.2 12 4.2s7.2 3.09 7.2 6.94-3.22 6.94-7.2 6.94z"/>
          </svg>

          {{ member.phone }}
        </a>
      </div>

    </div>

  </section>
</template>

<script>
import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpg";
import team3 from "@/assets/team3.jpg";

export default {
  data() {
    return {
      team: [
        {
          name: "Rahmahdaniah Fitri",
          role: "Founder & CEO",
          phone: "+6281234567890",
          photo: team1,
        },
        {
          name: "Danya",
          role: "Customer Support",
          phone: "+6289876543210",
          photo: team2,
        },
        {
          name: "Madanyah",
          role: "Marketing Specialist",
          phone: "+6285647382910",
          photo: team3,
        },
      ]
    };
  }
};
</script>
