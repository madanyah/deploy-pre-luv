<template>
  <section 
    class="
      min-h-screen 
      px-6 py-20 
      relative isolate
      bg-cover bg-center bg-no-repeat
      bg-[url('@/assets/bg6.jpg')]
    "
  >

    <div 
      class="absolute inset-0 bg-gradient-to-r from-[#b5828c]/70 via-[#e5989b]/70 to-[#ffcdb2]/70 -z-10">
    </div>

    <div aria-hidden="true" class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute left-1/2 top-[-10rem] w-[60rem] h-[60rem]
               -translate-x-1/2 rounded-full blur-[120px]
               bg-[#ffb4a2]/40">
      </div>
    </div>

    <div class="max-w-3xl mx-auto bg-white/50 backdrop-blur-xl shadow-xl 
                border border-white/40 rounded-3xl p-10">

      <h1 class="text-4xl font-extrabold text-[#4a2b2c] text-center mb-8">
        Hubungi Kami
      </h1>

      <form @submit.prevent="handleSubmit" class="space-y-6">

        <div>
          <label class="block text-[#4a2b2c] font-semibold mb-1">Nama *</label>
          <input
            v-model="form.name"
            type="text"
            required
            placeholder="Masukkan nama kamu"
            class="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/50 
                   text-[#4a2b2c] focus:outline-none focus:ring-2 focus:ring-[#d47c83]"
          />
        </div>

        <div>
          <label class="block text-[#4a2b2c] font-semibold mb-1">Email *</label>
          <input
            v-model="form.email"
            type="email"
            required
            placeholder="contoh@email.com"
            class="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/50 
                   text-[#4a2b2c] focus:outline-none focus:ring-2 focus:ring-[#d47c83]"
          />
          <p v-if="emailError" class="text-red-600 text-sm mt-1">
            Email tidak valid. Harus mengandung '@'
          </p>
        </div>

        <div>
          <label class="block text-[#4a2b2c] font-semibold mb-1">No. Telepon</label>
          <input
            v-model="form.phone"
            placeholder="Masukan nomor telepon kamu"
            class="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/50 
                   text-[#4a2b2c] focus:outline-none focus:ring-2 focus:ring-[#d47c83]"
          />
        </div>

        <div>
          <label class="block text-[#4a2b2c] font-semibold mb-1">Pesan Pengaduan *</label>
          <textarea
            v-model="form.message"
            required
            rows="5"
            placeholder="Ceritakan masalah atau pengaduan kamu..."
            class="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/50 
                   text-[#4a2b2c] focus:outline-none focus:ring-2 focus:ring-[#d47c83]"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full py-3 bg-[#d47c83] text-white font-semibold rounded-xl
                 hover:bg-[#e5809c] transition shadow-md">
          Kirim Pesan
        </button>

      </form>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      emailError: false,
    };
  },

  methods: {
    handleSubmit() {
      // CEK VALID EMAIL
      if (!this.form.email.includes("@")) {
        this.emailError = true;
        return;
      } else {
        this.emailError = false;
      }

      alert("Pesan berhasil dikirim!");

      this.form = {
        name: "",
        email: "",
        phone: "",
        message: "",
      };
    },
  },
};
</script>
