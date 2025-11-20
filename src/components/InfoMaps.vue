<template>
  <section 
    class="relative isolate px-6 pt-32 pb-32 lg:px-8
           bg-gradient-to-r from-[#ffcdb2] via-[#ffb4a2] to-[#e5989b]">

    <div aria-hidden="true" class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute left-1/2 top-[-12rem] w-[70rem] h-[70rem]
               -translate-x-1/2 rounded-full blur-[150px]
               bg-white/40 opacity-40">
      </div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">

      <div class="rounded-2xl overflow-hidden shadow-xl 
                  border border-white/40 bg-white/40 
                  backdrop-blur-xl">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.829245850146!2d116.8287996!3d-1.1494921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df147f8c18be3f5%3A0x1acb51c6e4e4c873!2sInstitut%20Teknologi%20Kalimantan!5e0!3m2!1sen!2sid!4v1715860500000!5m2!1sen!2sid" 
            width="600" 
            height="450" 
            style="border:0;" 
            allowfullscreen
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <div class="bg-white/40 border border-white/40 rounded-2xl 
                  p-10 backdrop-blur-xl shadow-xl">

        <h2 class="text-3xl font-bold text-[#4a2b2c]">
          Contact Information
        </h2>

        <p class="text-[#4a2b2c]/80 mt-4 leading-relaxed mb-10">
          Jangan ragu menghubungi kami untuk layanan pencarian baju preloved
          terbaik untuk wanita dengan kualitas premium.
        </p>

        <div class="space-y-8">

          <div class="flex items-start space-x-4">
            <div class="p-3 rounded-xl bg-white/60 border border-white/60 
                        backdrop-blur text-[#b05a63] 
                        shadow-[0_0_12px_rgba(255,200,200,0.4)]">
              📞
            </div>
            <div>
              <p class="text-[#4a2b2c] font-semibold">Phone</p>
              <p class="text-[#4a2b2c]/70">+6213564778</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="p-3 rounded-xl bg-white/60 border border-white/60 
                        backdrop-blur text-[#b05a63] 
                        shadow-[0_0_12px_rgba(255,200,200,0.4)]">
              ✉️
            </div>
            <div>
              <p class="text-[#4a2b2c] font-semibold">Email</p>
              <p class="text-[#4a2b2c]/70">cs@pre-luv.co.id</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="p-3 rounded-xl bg-white/60 border border-white/60 
                        backdrop-blur text-[#b05a63] 
                        shadow-[0_0_12px_rgba(255,200,200,0.4)]">
              🌐
            </div>
            <div>
              <p class="text-[#4a2b2c] font-semibold">Website</p>
              <p class="text-[#4a2b2c]/70">www.pre-luv.com</p>
            </div>
          </div>

          <div class="pt-6 border-t border-white/40">
            <p class="text-[#4a2b2c] font-semibold mb-2">Office Address</p>
            <p class="text-[#4a2b2c]/70 leading-relaxed">
              Jl. Sei Wain, Karang Joang, Kilo.15, Balikpapan Utara, 
              Balikpapan, Indonesia
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
