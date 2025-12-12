<template>
  <header class="sticky top-0 z-50 p-4 dark:bg-white dark:text-gray-800 bg-white shadow-md">
    <div class="container flex justify-between h-16 mx-auto">
      <!-- Logo -->
      <router-link to="/" class="flex items-center p-2">
        <img src="@/assets/logo.png" alt="Logo" class="h-16 w-auto" />
      </router-link>

      <!-- Desktop Menu -->
      <ul class="items-stretch hidden space-x-3 md:flex">
        <li class="flex">
          <router-link 
            to="/" 
            class="flex items-center px-4"
            active-class="text-[#4D6A46] border-b-2 border-[#4D6A46]"
            exact-active-class="text-[#4D6A46] border-b-2 border-[#4D6A46]"
          >
            Home
          </router-link>
        </li>

        <li class="flex">
          <router-link 
            to="/about" 
            class="flex items-center px-4"
            active-class="text-[#4D6A46] border-b-2 border-[#4D6A46]"
          >
            About
          </router-link>
        </li>

        <li class="flex">
          <router-link 
            to="/service" 
            class="flex items-center px-4"
            active-class="text-[#4D6A46] border-b-2 border-[#4D6A46]"
          >
            Service
          </router-link>
        </li>

        <li class="flex">
          <router-link 
            to="/gallery" 
            class="flex items-center px-4"
            active-class="text-[#4D6A46] border-b-2 border-[#4D6A46]"
          >
            Gallery
          </router-link>
        </li>

        <li class="flex">
          <router-link 
            to="/contact" 
            class="flex items-center px-4"
            active-class="text-[#4D6A46] border-b-2 border-[#4D6A46]"
          >
            Contact
          </router-link>
        </li>
      </ul>

      <!-- Menu untuk ukuran tablet -->
      <ul class="items-stretch hidden space-x-2 sm:flex md:hidden">
        <li class="flex">
          <router-link 
            to="/" 
            class="flex items-center px-3 text-sm"
            active-class="text-[#4D6A46] border-b-2 border-[#4D6A46]"
            exact-active-class="text-[#4D6A46] border-b-2 border-[#4D6A46]"
          >
            Home
          </router-link>
        </li>

        <li class="flex">
          <router-link 
            to="/about" 
            class="flex items-center px-3 text-sm"
            active-class="text-[#4D6A46] border-b-2 border-[#4D6A46]"
          >
            About
          </router-link>
        </li>

        <li class="flex">
          <router-link 
            to="/service" 
            class="flex items-center px-3 text-sm"
            active-class="text-[#4D6A46] border-b-2 border-[#4D6A46]"
          >
            Service
          </router-link>
        </li>

        <li class="flex">
          <router-link 
            to="/gallery" 
            class="flex items-center px-3 text-sm"
            active-class="text-[#4D6A46] border-b-2 border-[#4D6A46]"
          >
            Gallery
          </router-link>
        </li>

        <li class="flex">
          <router-link 
            to="/contact" 
            class="flex items-center px-3 text-sm"
            active-class="text-[#4D6A46] border-b-2 border-[#4D6A46]"
          >
            Contact
          </router-link>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button 
        @click="isMenuOpen = !isMenuOpen"
        class="sm:hidden flex items-center px-4"
        aria-label="Toggle menu"
      >
        <svg 
          v-if="!isMenuOpen" 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
        <svg 
          v-else 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div 
      v-if="isMenuOpen"
      class="sm:hidden border-t border-gray-200 dark:border-gray-300 mt-2"
    >
      <ul class="flex flex-col space-y-1">
        <li>
          <router-link 
            to="/" 
            @click="isMenuOpen = false"
            class="flex items-center px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-200"
            active-class="text-green-900 bg-green-50 dark:bg-green-100"
            exact-active-class="text-green-900 bg-green-50 dark:bg-green-100"
          >
            Home
          </router-link>
        </li>

        <li>
          <router-link 
            to="/about" 
            @click="isMenuOpen = false"
            class="flex items-center px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-200"
            active-class="text-green-900 bg-green-50 dark:bg-green-100"
          >
            About
          </router-link>
        </li>

        <li>
          <router-link 
            to="/service" 
            @click="isMenuOpen = false"
            class="flex items-center px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-200"
            active-class="text-green-900 bg-green-50 dark:bg-green-100"
          >
            Service
          </router-link>
        </li>

        <li>
          <router-link 
            to="/gallery" 
            @click="isMenuOpen = false"
            class="flex items-center px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-200"
            active-class="text-green-900 bg-green-50 dark:bg-green-100"
          >
            Gallery
          </router-link>
        </li>

        <li>
          <router-link 
            to="/contact" 
            @click="isMenuOpen = false"
            class="flex items-center px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-200"
            active-class="text-green-900 bg-green-50 dark:bg-green-100"
          >
            Contact
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<style scoped>
/* style untuk fungsi stickynya */
header {
  transition: all 0.3s ease;
}
</style>