<template>
  <section class="p-8 bg-gray-50 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">The Curated Gllery</h1>
      <p class="text-gray-600 mb-12">Discover the finest items across all categories, especially selected for you </p>
  
      <div class="relative group">
        <!-- Scroll mereng -->
        <div 
          ref="scrollContainer"
          class="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          style="scroll-behavior: smooth;"
        >
          <div 
            v-for="(item, index) in galleryItems" 
            :key="index"
            class="flex-shrink-0 w-80 overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            @click="selectImage(index)"
          >
            <img 
              :src="item.src" 
              :alt="item.alt"
              class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <!-- Left Button -->
        <button
          @click="scrollLeft"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Right Button -->
        <button
          @click="scrollRight"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const scrollContainer = ref(null)

const galleryItems = ref([
  {
    src: 'https://i.pinimg.com/736x/00/8f/c8/008fc8fbee2cd2e847ab43aaffdf9f04.jpg',
  },
  {
    src: 'https://i.pinimg.com/736x/ae/d0/dd/aed0dd27da5ca0395ba389c626562f8f.jpg',
  },
  {
    src: 'https://i.pinimg.com/736x/97/29/d4/9729d4e48e1ebbb476d07fbcc98b812f.jpg',
  },
  {
    src: 'https://i.pinimg.com/736x/6f/3d/86/6f3d869f17093d2adf68d2b2989fdd3b.jpg',
  },
  {
    src: 'https://i.pinimg.com/736x/ac/1f/ad/ac1fadccdceb519967d660348f237ee4.jpg',
  },
  {
    src: 'https://i.pinimg.com/736x/0b/5f/0b/0b5f0b3ba10ff72a4520feefa7b009f1.jpg',
  },
  {
    src: 'https://i.pinimg.com/736x/88/05/d1/8805d162b762caa2ced6b8b526127a8f.jpg',
  },
  {
    src: 'https://i.pinimg.com/736x/c2/f3/f7/c2f3f727251fcec93dd34c6e72d88237.jpg',
  },
  {
    src: 'https://i.pinimg.com/736x/fa/4e/cb/fa4ecb64cb02718ee575e243b0913a55.jpg'
  }
])

const selectImage = (index) => {
  console.log('Selected image:', index)
}

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -400, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 400, behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Hide scrollbar but keep scrolling functionality */
div::-webkit-scrollbar {
  height: 4px;
}

div::-webkit-scrollbar-track {
  background: transparent;
}

div::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 2px;
}

div::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
</style>