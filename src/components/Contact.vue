<template>
  <div class="contact-container">
    <!-- Main -->
    <div class="contact-main">
      <!-- kiri -->
      <div class="contact-left">
        <h1 class="section-title">Contact Now!</h1>
        <p class="section-description">
          To learn more about our comprehensive laundry solutions in Balikpapan or for additional information, please reach out to us at:
        </p>

        <!-- kontak -->
        <div class="contact-methods">
          <div class="contact-item">
            <div class="icon-circle whatsapp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
              <a href="https://wa.me/6282191564392" class="font-semibold text-sm hover:underline">
                WhatsApp: 0821 - 9156 - 4392
              </a>
          </div>

          <div class="contact-item">
            <div class="icon-circle instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <circle cx="17.5" cy="6.5" r="1.5"></circle>
              </svg>
            </div>
              <a href="https://instagram.com/modzilaundry" class="font-semibold text-sm hover:underline">
                Instagram: @modzilaundry
              </a>
          </div>

          <div class="contact-item">
            <div class="icon-circle email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
              <a href="mailto:modzilaundry@gmail.com" class="font-semibold text-sm hover:underline">
                Email: modzilaundry@gmail.com
              </a>
          </div>
        </div>

        <!-- alamat -->
        <div class="address-section">
          <h3 class="address-title">Address :</h3>
          <div class="address-item">
            <div class="icon-circle address">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="address-text font-semibold">
              <p>Jl. Propinsi Km. 4 Rt. 2 Kel. Nenang, Penajam, Kabupaten Penajam Paser Utara, Kalimantan Timur, Indonesia</p>
            </div>
          </div>
        </div>
      </div>

      <!-- kanan, form -->
      <div class="contact-right">
        <h2 class="form-title">Get In Touch With Us</h2>
        <p class="form-description">
          Have a question or want to get started? Just fill out the form, and we'll get back to you soon.
        </p>

        <form @submit.prevent="handleSubmit" class="contact-form">
          <input
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            class="form-input"
            required
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Your Email Address"
            class="form-input"
            required
          />
          <input
            v-model="form.phone"
            type="tel"
            placeholder="Your Cellphone Number"
            class="form-input"
            required
          />
          <textarea
            v-model="form.message"
            placeholder="Type a Message..."
            class="form-textarea"
            rows="6"
            required
          ></textarea>
          <button type="submit" class="submit-btn">Send your love</button>
        </form>
      </div>
    </div>

    <!-- Maps -->
    <div class="map-section">
      <h2 class="map-title">Our Location</h2>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7246829367636!2d116.77041!3d-2.7477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de7b8d9d9d9d9d9%3A0x1234567890!2sJl.%20Propinsi%2C%20Penajam%2C%20Kabupaten%20Penajam%20Paser%20Utara!5e0!3m2!1sid!2sid!4v1234567890"
          width="100%"
          height="500"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = async () => {
  console.log('Form submitted:', form.value)
  // Add your form submission logic here
  alert('Thank you for reaching out! We will get back to you soon.')
  form.value = { name: '', email: '', phone: '', message: '' }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.contact-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
}

/* Main Content */
.contact-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  background-color: white;
}

/* kiri */
.contact-left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #4D6A46;
  margin-bottom: 0.5rem;
}

.section-description {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
}

/* kontak */
.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-circle.whatsapp {
  background-color: #4D6A46;
}

.icon-circle.instagram {
  background-color: #4D6A46;
}

.icon-circle.email {
  background-color: #4D6A46;
}

.icon-circle.address {
  background-color: #4D6A46;
}

.contact-text {
  font-size: 0.95rem;
  color: #333;
  font-weight: 500;
}

/* alamat */
.address-section {
  margin-top: 1rem;
}

.address-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #4D6A46;
  margin-bottom: 1rem;
}

.address-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.address-text {
  font-size: 0.9rem;
  color: #333;
  line-height: 1.6;
  padding-top: 0.5rem;
}

/* kanan */
.contact-right {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #4D6A46;
}

.form-description {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #4D6A46;
}

.form-textarea {
  resize: vertical;
  font-family: inherit;
}

.submit-btn {
  background-color: #4D6A46;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  align-self: flex-start;
}

.submit-btn:hover {
  background-color: #4D6A46;
}

/* Map Section */
.map-section {
  padding: 3rem 2rem;
  background-color: #f9f9f9;
}

.map-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #4D6A46;
  margin-bottom: 2rem;
  text-align: center;
}

.map-container {
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-main {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1rem;
  }

  .section-title,
  .form-title {
    font-size: 1.5rem;
  }

  .map-container iframe {
    height: 300px !important;
  }
}
</style>