<template>
    <div class="position-relative text-white">
      <img :src="imageSrc" alt="Overlay Image" class="img-fluid w-100" />
      <div class="position-absolute top-50 start-0 translate-middle-y ms-5 col-md-4">
        <p class="fs-2 fw-bold text-start">{{ title }}</p>
        <ul class="text-start list-unstyled">
          <li v-for="(point, index) in points" :key="index" class="mb-2">{{ point }}</li>
        </ul>
        <div class="mt-3">
          <button class="btn btn-outline-light me-3 rounded-pill" @click="bookAppointment">{{ bookBtnText }}</button>
          <a :href="`tel:${phoneNumber}`" class="btn btn-outline-light rounded-pill">{{ callBtnText }}</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      points: {
        type: Array,
        required: true,
      },
      bookBtnText: {
        type: String,
        default: "Book an appointment",
      },
      callBtnText: {
        type: String,
        default: "Call us",
      },
      phoneNumber: {
        type: String,
        required: true,
      },
    },
    methods: {
      bookAppointment() {
        alert("Booking appointment...");
      },
    },
  };
  </script>
  
  <style scoped>
  /* You can customize Bootstrap spacing here if necessary, but Bootstrap handles most of it */
  </style>
  