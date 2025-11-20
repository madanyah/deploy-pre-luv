<template>
  <footer class="relative bg-gradient-to-r from-[#ffcdb2] via-[#ffb4a2] to-[#e5989b] 
                 text-[#4a2b2c] pt-20 pb-12 overflow-hidden">

    <!-- Soft Glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[-140px] left-1/2 -translate-x-1/2 
                  w-[700px] h-[700px] 
                  bg-white/40 blur-[160px] rounded-full opacity-70">
      </div>
    </div>

    <div class="relative mx-auto max-w-7xl px-6">

      <div class="md:flex md:justify-between">

        <!-- Brand -->
        <div class="mb-12 md:mb-0">
          <div class="flex items-center space-x-3">
            <h1 class="text-5xl sm:text-3xl font-extrabold tracking-tight drop-shadow-sm">
              <span class="text-[#ffdd]">PRE</span><span class="text-[#4a2b2c]">-LUV</span>
            </h1>
          </div>

          <p class="text-[#4a2b2c]/80 mt-4 text-sm max-w-sm leading-relaxed">
            Website pre-loved baju wanita terpercaya abad ini.
          </p>
        </div>

        <!-- Footer Links -->
        <div class="grid grid-cols-2 gap-10 sm:grid-cols-3">

          <div>
            <h2 class="mb-4 text-sm font-semibold text-[#4a2b2c] uppercase tracking-wide">
              Resources
            </h2>
            <ul class="space-y-3 text-[#4a2b2c]/80">
              <li><a class="hover:text-[#4a2b2c] underline underline-offset-4">Pre-Luv</a></li>
              <li><a class="hover:text-[#4a2b2c] underline underline-offset-4">Tailwind CSS</a></li>
            </ul>
          </div>

          <div>
            <h2 class="mb-4 text-sm font-semibold text-[#4a2b2c] uppercase tracking-wide">
              Follow Us
            </h2>
            <ul class="space-y-3 text-[#4a2b2c]/80">
              <li><a class="hover:text-[#4a2b2c] underline underline-offset-4">Github</a></li>
              <li><a class="hover:text-[#4a2b2c] underline underline-offset-4">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h2 class="mb-4 text-sm font-semibold text-[#4a2b2c] uppercase tracking-wide">
              Legal
            </h2>
            <ul class="space-y-3 text-[#4a2b2c]/80">
              <li><a class="hover:text-[#4a2b2c] underline underline-offset-4">Privacy Policy</a></li>
              <li><a class="hover:text-[#4a2b2c] underline underline-offset-4">Terms & Conditions</a></li>
            </ul>
          </div>

        </div>
      </div>

      <!-- Divider -->
      <div class="relative">
        <hr class="my-12 border-white/40" />
      </div>

      <!-- Bottom -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">

        <span class="text-sm text-[#4a2b2c]/70">
          © 2025 <span class="font-semibold text-[#4a2b2c]">Pre-Luv™</span>. All Rights Reserved.
        </span>

        <!-- Social Icons -->
        <div class="flex space-x-6 mt-6 sm:mt-0 text-[#4a2b2c]/70">

          <a class="hover:text-[#4a2b2c]">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.135 6H..." />
            </svg>
          </a>

          <a class="hover:text-[#4a2b2c]">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.942 5.556..." />
            </svg>
          </a>

          <a class="hover:text-[#4a2b2c]">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.795 10.533..." />
            </svg>
          </a>

          <a class="hover:text-[#4a2b2c]">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.006 2..." />
            </svg>
          </a>

        </div>

      </div>

    </div>

  </footer>
</template>
