<template>
    <div class="swiper-container container my-5">
        <h1 class="text-center mb-1">{{ title }}</h1>
        <p class="text-center text-muted mb-5">{{ subtitle }}</p>
        <swiper :slidesPerView="1" :spaceBetween="10" :loop="true" :navigation="navigation" :pagination="pagination"
            :breakpoints="breakpoints" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(slide, index) in slides" :key="index">
                <router-link to="/" class="text-decoration-none text-dark">
                    <img :src="slide.image" :alt="slide.title" class="w-100" style="height: 300px; object-fit: cover;"/>
                    <div class="slide-content">
                        <p class="fw-bold mb-1 text-start">{{ slide.title }}</p>
                        <p class="text-start">{{ slide.description }}</p>
                    </div>
                </router-link>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default {
    props: {
        title: {
            type: String,
            default: 'Dental Services'
        },
        subtitle: {
            type: String,
            default: 'At The Dental Roots, we offer a wide range of dental services.'
        },
        slides: {
            type: Array,
            required: true
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            },
            modules: [Navigation, Pagination],
        };
    },
};
</script>

<style scoped>
.swiper-container {
    position: relative;
    width: 100%;
}

.swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.slide-content {
    text-align: center;
    margin-top: 10px;
}

.swiper-button-prev,
.swiper-button-next {
    color: #000;
}

.swiper-pagination {
    bottom: 10px;
}
</style>