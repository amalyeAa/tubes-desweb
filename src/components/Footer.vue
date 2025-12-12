<template>
  <footer class="text-white py-12 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Main Footer Content -->
      <div class="flex flex-col md:flex-row items-start justify-between gap-12 mb-8">
        <!-- Logo Section -->
        <div class="flex justify-center md:justify-start flex-1">
          <div class="bg-white rounded-full p-4 w-45 h-45 flex items-center justify-center">
            <img src="@/assets/logo.png" alt="Modzi Laundry Logo" class="w-32 h-32 object-contain" />
          </div>
        </div>

        <!-- Address Section -->
        <div class="flex-1">
          <h3 class="text-lg font-semibold mb-4 flex items-center gap-2">
            <MapPin :size="20" />
            Address
          </h3>
          <p class="text-sm leading-relaxed">
            Jl. Propinsi Km, 4 Rt, 2 Kel. Nenang, Penajam, Kabupaten Penajam Paser Utara, Kalimantan Timur, Indonesia
          </p>
        </div>

        <!-- Contact Section -->
        <div class="flex-1">
          <h3 class="text-lg font-semibold mb-4">Contact</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <MessageCircle :size="20" />
              <a href="https://wa.me/6282191564392" class="text-sm hover:underline">
                WhatsApp: 0821 - 9156 - 4392
              </a>
            </div>
            <div class="flex items-center gap-3">
              <Instagram :size="20" />
              <a href="https://instagram.com/modzilaundry" class="text-sm hover:underline">
                Instagram: @modzilaundry
              </a>
            </div>
            <div class="flex items-center gap-3">
              <Mail :size="20" />
              <a href="mailto:modzilaundry@gmail.com" class="text-sm hover:underline">
                Email: modzilaundry@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-white/30 pt-6">
        <p class="text-center text-sm text-white/80">
          © 2025 Modzi Laundry. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { MapPin, MessageCircle, Instagram, Mail } from 'lucide-vue-next'
</script>

<style scoped>
footer {
  background-color: #4D6A46;
}
</style>
