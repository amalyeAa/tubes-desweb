<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-6xl mx-auto">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 1 -->
        <div
          v-for="service in services"
          :key="service.id"
          class="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
          :style="{ backgroundColor: '#4D6A46' }"
        >
          <!-- adjust tinggi gambar -->
          <div class="relative overflow-hidden bg-white">
            <img
              :src="service.image"
              :alt="service.title"
              :style="{ height: `${imageHeight}px` }"
              class="w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <!-- tombol contact us  -->
          <div class="p-8 text-white flex flex-col flex-1">
            <h2 class="text-2xl font-bold mb-4">{{ service.title }}</h2>
            <p class="text-sm mb-6 leading-relaxed text-gray-100 flex-1">
              {{ service.description }}
            </p>

            <div class="mb-6 pb-6 border-b" :style="{ borderColor: '#4D6A46' }">
              <p class="text-xs uppercase tracking-wide text-white font-semibold">
                Start From
              </p>
              <p class="text-3xl font-bold mt-2">{{ service.price }}</p>
            </div>

            <router-link to="/contact" class="inline-block">
              <button
                @click="handleContactClick(service.title)"
                class="w-full py-3 px-4 rounded-lg font-semibold active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                :style="{ 
                  backgroundColor: 'white', 
                  color: '#4D6A46',
                  borderColor: '#4D6A46'
                }"
                @mouseenter="$event.target.style.backgroundColor = '#f0f0f0'"
                @mouseleave="$event.target.style.backgroundColor = 'white'"
              >
                Contact Us
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const imageHeight = ref(240)

const services = ref([
  {
    id: 1,
    title: 'Self Service',
    description:
      'you are in control. We provide you with the necessary tools, guidance, and resources to complete the task yourself.This allows for maximum flexibility and ensures the service meets your exact standards, giving you a personalized, efficient, and cost effective experience.',
    price: 'IDR 10.000',
    image:
      'https://i.pinimg.com/1200x/91/e4/43/91e4430ed8a28128b88d8ed603922321.jpg',
  },
  {
    id: 2,
    title: 'Wash & Fold',
    description:
      'Enjoy fresh, neatly folded laundry without the hassle. We handle the washing and folding, giving you back your time and perfectly organized clothes.',
    price: 'IDR 6.000',
    image:
      'https://i.pinimg.com/1200x/23/50/14/23501435dcb4df984943b493de38ac04.jpg',
  },
  {
    id: 3,
    title: 'Wash & Iron',
    description:
      'We provide a complete service from washing to professional ironing, leaving your clothes impeccably clean, smooth, and sharp.',
    price: 'IDR 6.000',
    image:
      'https://i.pinimg.com/1200x/b4/16/d6/b416d6a4c50728e9a19d81a09a14636d.jpg',
  },
  {
    id: 4,
    title: 'Shoe Cleaning',
    description:
      'Your shoes will be meticulously cleaned with specialized techniques tailored to their material, ensuring they remain durable, fresh, and comfortable to wear again.',
    price: 'IDR 35.000',
    image:
      'https://i.pinimg.com/736x/62/8d/2d/628d2da914e4b311f61192651c623a32.jpg',
  },
  {
    id: 5,
    title: 'Helmet cleaning',
    description:
      'Helmet refresh service. We throughly clean, sanitize, and deodorize your helmet iside and out, keeping your essential gear safe, fresh, and comfortable.',
    price: 'IDR 30.000',
    image:
      'https://i.pinimg.com/736x/60/a7/a9/60a7a9152364be74ba21d73d7a15daaa.jpg',
  },
   {
    id: 6,
    title: 'Bag Cleaning',
    description:
      'Expert care for your luxury essentials. We safely clean and deodorize various bag types, from backpacks to handbags, ensuring they\'re fresh, clean, and ready for your next adventure.',
    price: 'IDR 40.000',
    image:
      'https://i.pinimg.com/1200x/0b/c6/e4/0bc6e43e8075b58c4d854a6c8f3f5a49.jpg',
  },
])

const handleContactClick = (serviceName) => {
  console.log(`Contact inquiry for: ${serviceName}`)
}

const updateImageHeight = (newHeight) => {
  imageHeight.value = newHeight
}

defineExpose({ updateImageHeight, imageHeight })
</script>

<style scoped>
/* Additional hover effect for cards */
</style>
