<template>
  <div class="w-full">
    <section class="w-full py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <!-- bag kiri -->
          <div class="space-y-4 flex flex-col">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              <span class="text-[#4D6A46]">Amalia</span> Rahmanda.
            </h2>
            <div class="grid md:grid-cols-3 gap-4 mb-12">
                <div class="text-left">
                    <div class="flex-center mb-1/2">
                    </div>
                    <h4 class="text-lg font-semibold text-gray-800 mb-3">11241012</h4>
                </div>

                <div class="text-left">
                    <div class="flex-center mb-1/2">
                    </div>
                    <h4 class="text-lg font-semibold text-gray-800 mb-3">Informatika</h4>
                </div>
                <div class="text-left">
                    <div class="flex-center mb-1/2">
                    </div>
                    <h4 class="text-lg font-semibold text-gray-800 mb-3">ITK</h4>
                </div>
            </div>
            

            <p class="text-lg text-gray-700 mt-6 leading-relaxed">
              Saya adalah Amalia Rahmanda yang merupakan mahasiswi tahun kedua (semester 3) di Institut Teknologi Kalimantan, Balikpapan. Saya merupakan pribadi yang mudah bergaul dan ceria.
            </p>

            <p class="text-lg text-gray-700 mt-6 leading-relaxed">
              Our wide range of services includes Wash & Iron (Folded), Wash & Fold, Drop Off, Specialized Shoe Cleaning, and Helmet Cleaning. Every service is supported by expert staff, modern equipment, and high-quality cleaning products, ensuring optimal results every time: maximum cleanliness, long-lasting freshness, and neat, ready-to-use items.
            </p>
          </div>

          <!-- bag kanan-->
          <div class="hidden md:flex md:justify-center">
            <img
              src="@/assets/Gambar.jpg"
              class="w-150 h-120 rounded-lg object-cover"
            />

          </div>
        </div>
      </div>
    </section>
    <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- Service 1 -->
        <div class="text-center">
          <div class="flex justify-center mb-6">
            <Clock class="w-12 h-12 text-gray-800" />
          </div>
          <h4 class="text-lg font-bold text-gray-800 mb-3">Save Time & Money</h4>
          <p class="text-gray-600 text-sm">
            Let our professional laundry do all the work! Bring your clothes and enjoy quality service. Stamp/receipt may take longer than just fresh and deliver you more than just time!
          </p>
        </div>

        <!-- Service 2 -->
        <div class="text-center">
          <div class="flex justify-center mb-6">
            <Smartphone class="w-12 h-12 text-gray-800" />
          </div>
          <h4 class="text-lg font-bold text-gray-800 mb-3">Pay Online is Seamless</h4>
          <p class="text-gray-600 text-sm">
            Payment can be paid online easily. Secure, antifudous, fast transaction, and worry-free guarantee. We accept all sort of payment methods to make it comfortable we provide anytime anywhere.
          </p>
        </div>

        <!-- Service 3 -->
        <div class="text-center">
          <div class="flex justify-center mb-6">
            <Shirt class="w-12 h-12 text-gray-800" />
          </div>
          <h4 class="text-lg font-bold text-gray-800 mb-3">Expert Garment Care</h4>
          <p class="text-gray-600 text-sm">
            They always take care of the attention. Premium care. Our specialized garment care and careful labeling ensure your items come back looking their best and saves cleans lasting them from looking worn.
          </p>
        </div>
      </div>
  </div>
</template>

<script setup>
import { Clock, Smartphone, Shirt } from 'lucide-vue-next'
</script>