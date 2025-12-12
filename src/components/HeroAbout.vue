<template>
  <div class="w-full">
    <div class="relative w-full h-[500px] overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{
          backgroundImage: `url('https://i.pinimg.com/1200x/d4/aa/c8/d4aac82b98e1fe3a2408601cae9ced59.jpg')`
        }"
      >
        <div class="absolute inset-0 bg-white/40"></div>
      </div>

      <div class="relative h-full flex flex-col items-center justify-center">
        <h1 class="text-5xl md:text-6xl font-bold tracking-wide">
          <span class="text-[#4D6A46]">Modzi</span>
          <span class="text-black ml-2">Laundry</span>
        </h1>
      </div>
    </div>

    <nav class="bg-white border-t-4 border-gray-900">
      <div class="max-w-4xl mx-auto px-6 py-4 flex justify-center gap-8">
        <a
          href="/"
          class="text-gray-900 font-medium hover:text-[#4D6A46] transition-colors"
        >
          Home
        </a>
        <span class="text-gray-400">|</span>
        <a
          href="/about"
          class="text-gray-900 font-medium hover:text-[#4D6A46] transition-colors"
        >
          About
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup>
// Hero section component untuk about page
</script>

<style scoped>
/* Smooth transitions */
a {
  transition: all 0.3s ease;
}
</style>