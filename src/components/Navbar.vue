<template>
  <nav
    class="w-full bg-gradient-to-r from-[#b5838d] via-[#e5989b] to-[#ffcdba]
           backdrop-blur-md py-4 shadow-sm">

    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">

      <!-- LOGO PRE-LUV -->
      <h1 class="text-2xl font-extrabold tracking-tight">
        <span class="text-[#ffdd]">PRE</span>
        <span class="text-[#5a2d2d]">-LUV</span>
      </h1>

      <!-- MENU CENTER -->
      <div class="flex flex-1 justify-center">
        <ul class="flex space-x-35 text-sm font-medium text-[#3a2a2a]">

          <li>
            <a href="#" class="font-bold underline underline-offset-4">
              Home
            </a>
          </li>

          <li>
            <a href="#" class="hover:underline underline-offset-4 transition">
              About
            </a>
          </li>

          <li>
            <a href="#" class="hover:underline underline-offset-4 transition">
              Katalog
            </a>
          </li>

          <li>
            <a href="#" class="hover:underline underline-offset-4 transition">
              Selling
            </a>
          </li>

        </ul>
      </div>

      <!-- PROFILE PIC OR EMPTY SLOT -->
      <div class="w-10 flex justify-end">
        <!-- <img 
          class="w-9 h-9 rounded-full object-cover border border-white/40" 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=200&h=200&q=80"
        /> -->
      </div>

    </div>

  </nav>
</template>
