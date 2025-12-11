<template>
  <section
    class="min-h-screen px-6 py-20 bg-gradient-to-r from-[#eeb5b8] to-[#f9d3d3]"
  >
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

      <div class="flex flex-col items-center">

        <button
          v-if="!cameraAllowed"
          @click="requestPermission"
          class="mb-6 px-6 py-3 bg-[#d47c83] text-white font-semibold rounded-xl 
                 hover:bg-[#e5809c] transition shadow-md"
        >
          Izinkan Kamera
        </button>

        <div
          class="w-full max-w-md aspect-square rounded-3xl bg-black/20 border-4 border-white/60 
                 flex items-center justify-center overflow-hidden shadow-xl backdrop-blur"
        >
          <video
            ref="video"
            autoplay
            playsinline
            class="w-full h-full object-cover rounded-3xl"
          ></video>
        </div>

    
        <button
          @click="takePicture"
          class="mt-6 px-6 py-3 bg-[#d47c83] text-white font-semibold rounded-xl
                 hover:bg-[#e5809c] transition shadow-md"
        >
          Take a Picture
        </button>

        <div v-if="capturedImage" class="mt-6 flex flex-col items-center">
          <h3 class="text-[#4a2b2c] font-bold mb-2">Hasil Foto</h3>
          <img
            :src="capturedImage"
            class="w-64 h-64 object-cover rounded-2xl shadow-lg border border-white/60"
          />

          <button
            @click="submitPhoto"
            class="mt-4 px-6 py-3 bg-[#b85f71] text-white font-semibold rounded-xl
                   hover:bg-[#d26f83] transition shadow-md"
          >
            Submit Foto
          </button>

          <p v-if="photoError" class="text-red-600 mt-2 text-sm">
            Foto belum di-submit!
          </p>
        </div>
      </div>

      <div class="text-[#4a2b2c] w-full">

        <h1 class="text-4xl font-extrabold leading-tight mb-6">
          Scan & Jual Baju Preloved Kamu
        </h1>

        <p class="text-lg text-[#4a2b2c]/80 leading-relaxed mb-6">
          Setelah kamu mengambil foto produk, submit foto tersebut lalu isi form penjualan.
        </p>

        <form @submit.prevent="submitProduct"
              class="space-y-6 bg-white/40 p-6 rounded-2xl shadow-md backdrop-blur border border-white/40">

          <div v-if="submittedPhoto" class="flex flex-col items-center mb-4">
            <p class="font-semibold mb-2">Foto Produk:</p>
            <img
              :src="submittedPhoto"
              class="w-48 h-48 object-cover rounded-xl shadow-md border border-white/60"
            />
          </div>

          <div>
            <label class="block font-semibold mb-1">Nama Produk *</label>
            <input
              v-model="product.name"
              type="text"
              required
              placeholder="Contoh: Blouse Korean Style"
              class="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/50 
                     text-[#4a2b2c] focus:outline-none focus:ring-2 focus:ring-[#d47c83]"
            />
          </div>

          <div>
            <label class="block font-semibold mb-1">Harga Produk *</label>
            <input
              v-model="product.price"
              type="text"
              required
              placeholder="Contoh: 35.000"
              class="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/50 
                     text-[#4a2b2c] focus:outline-none focus:ring-2 focus:ring-[#d47c83]"
            />
          </div>

          <div>
            <label class="block font-semibold mb-1">Detail Produk *</label>
            <textarea
              v-model="product.detail"
              required
              rows="4"
              placeholder="Tuliskan kondisi, ukuran, bahan, dll..."
              class="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/50 
                     text-[#4a2b2c] focus:outline-none focus:ring-2 focus:ring-[#d47c83]"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full py-3 bg-[#d47c83] text-white font-semibold rounded-xl
                   hover:bg-[#e5809c] transition shadow-md"
          >
            Upload Produk
          </button>

          <p v-if="formError" class="text-red-600 text-sm mt-2">
            Kamu harus submit foto sebelum upload produk!
          </p>

        </form>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cameraAllowed: false,
      capturedImage: null,
      submittedPhoto: null,
      photoError: false,
      formError: false,

      videoStream: null,

      product: {
        name: "",
        price: "",
        detail: "",
      },
    };
  },

  beforeUnmount() {
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
    }
  },

  methods: {
    async requestPermission() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        this.videoStream = stream;
        this.$refs.video.srcObject = stream;
        this.cameraAllowed = true;

      } catch (err) {
        alert("Izin kamera ditolak!");
      }
    },

    takePicture() {
      const video = this.$refs.video;
      const canvas = document.createElement("canvas");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      this.capturedImage = canvas.toDataURL("image/png");
    },

    submitPhoto() {
      if (!this.capturedImage) {
        this.photoError = true;
        return;
      }
      this.photoError = false;
      this.submittedPhoto = this.capturedImage;
      alert("Foto berhasil disubmit!");
    },

    submitProduct() {
      if (!this.submittedPhoto) {
        this.formError = true;
        return;
      }

      this.formError = false;

      alert("🎉 Selamat! Produk kamu berhasil dijual!");

      this.product = { name: "", price: "", detail: "" };
      this.capturedImage = null;
      this.submittedPhoto = null;
    },
  },
};
</script>
