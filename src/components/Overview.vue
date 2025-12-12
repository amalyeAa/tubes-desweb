<template>
  <div class="bg-gray-50">
    <!-- About Us -->
    <section class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="flex justify-center">
          <img 
            src="https://i.pinimg.com/736x/f2/cf/b1/f2cfb1b034e8747d126595ab776b4a1c.jpg" 
            alt="Modzi Laundry Services" 
            class="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <p class="text-gray-400 text-sm font-medium mb-2">About Us</p>
          <h2 class="text-4xl font-bold text-[#4D6A46] mb-4">Modzi Laundry</h2>
          <p class="text-gray-800 leading-relaxed mb-8">
            Modzi Laundry is your trusted partner for cleanliness and convenience in Balikpapan. We provide comprehensive and professional laundry solutions for all your needs, from everyday clothing and shoes to helmets, all meeting the highest standards of hygiene and neatness.
          </p>
          
          <div class="grid grid-cols-3 gap-6 mb-8">
            <div class="text-center">
              <p class="text-3xl font-bold text-[#4D6A46]">100%</p>
              <p class="text-gray-800 text-sm">Quality Assurance</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold text-[#4D6A46]">50+</p>
              <p class="text-gray-800 text-sm">New customers</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold text-[#4D6A46]">100+</p>
              <p class="text-gray-800 text-sm">Order Executed</p>
            </div>
          </div>
            <router-link to="/about" class="inline-block">
              <button class="bg-[#4D6A46] hover:bg-green-900 text-white px-6 py-2 rounded transition cursor-pointer">
                Learn More
              </button>
            </router-link>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="max-w-6xl mx-auto px-4 py-16">
      <p class="text-gray-400 text-sm font-medium mb-2">Our Service</p>
      <h3 class="text-4xl font-bold text-gray-800 mb-3">What would you rather do?</h3>
      <p class="text-gray-600 mb-12">
        We at Mozi Laundry understand your time is precious. Let us handle the tedious housework while you focus on what truly matters to you.
      </p>

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

      <div class="text-center">
        <router-link to="/service" class="inline-block">
          <button class="bg-[#4D6A46] hover:bg-green-900 text-white px-8 py-2 rounded transition cursor-pointer">
            Click Here For Any Service
          </button>
        </router-link>
      </div>
    </section>

    <!-- Gallery -->
    <section class="max-w-6xl mx-auto px-4 py-16">
      <p class="text-gray-400 text-sm font-medium mb-2">Gallery</p>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <img 
          src="https://i.pinimg.com/736x/00/8f/c8/008fc8fbee2cd2e847ab43aaffdf9f04.jpg" 
          class="w-full h-64 object-cover rounded-lg"
        />
        <img 
          src="https://i.pinimg.com/736x/ae/d0/dd/aed0dd27da5ca0395ba389c626562f8f.jpg"  
          class="w-full h-64 object-cover rounded-lg"
        />
        <img 
          src="https://i.pinimg.com/736x/97/29/d4/9729d4e48e1ebbb476d07fbcc98b812f.jpg" 
          class="w-full h-64 object-cover rounded-lg"
        />
        <img 
          src="https://i.pinimg.com/736x/6f/3d/86/6f3d869f17093d2adf68d2b2989fdd3b.jpg" 
          class="w-full h-64 object-cover rounded-lg"
        />
      </div>

      <div class="text-center">
        <router-link to="/gallery" class="inline-block">
          <button class="bg-[#4D6A46] text-white hover:bg-green-900 px-8 py-2 rounded transition cursor-pointer">
            See More
          </button>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Clock, Smartphone, Shirt } from 'lucide-vue-next'
</script>