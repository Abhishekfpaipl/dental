<template>
    <div class="container mySwiper">
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :pagination="true"
        :breakpoints="{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }"
        :modules="modules"
      >
        <swiper-slide>
          <img src="/img/officeImages/1.jpeg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/img/officeImages/2.jpeg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/img/officeImages/3.jpeg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/img/officeImages/4.jpeg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/img/officeImages/5.jpeg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/img/officeImages/6.jpeg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/img/officeImages/7.jpeg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/img/officeImages/8.jpeg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/img/officeImages/9.jpeg" />
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';
  
  import { EffectCoverflow, Pagination } from 'swiper/modules';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    width: 100%;
    max-width: 1200px; /* For desktops */
    margin: 0 auto;
  }
  
  .mySwiper {
    width: 100%;
    height: 100%;
  }
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  /* Responsive styles */
  @media (max-width: 640px) {
    .mySwiper {
      height: 300px; /* Adjust the height for mobile screens */
    }
  }
  
  @media (min-width: 641px) and (max-width: 1024px) {
    .mySwiper {
      height: 400px; /* Adjust the height for tablets */
    }
  }
  
  @media (min-width: 1025px) {
    .mySwiper {
      height: 500px; /* Adjust the height for larger screens */
    }
  }
  </style>
  