<template>
    <div class="container my-5">
        <h1 v-if="title" class="text-center mb-5">{{ title }}</h1>
        <div class="row d-flex justify-content-center align-items-center">
            <div v-if="imageSrc" :class="imageFirst ? 'col-md-6 order-1' : 'col-md-6 order-2'">
                <img :src="imageSrc" :alt="imageAlt" class="img-fluid sticky-image" />
            </div>
            <div
                :class="imageFirst ? 'col-md-6 order-2 mt-5 mt-md-0 px-3 py-2' : 'col-md-6 order-1 mb-4 mb-md-0 px-3 py-2'">
                <h2 v-if="heading" class="text-start text-capitalize">{{ heading }}</h2>
                <p v-if="subHeading" class="text-start text-uppercase">{{ subHeading }}</p>
                <!-- <p v-if="text" class="text-start">{{ text }}</p> -->
                <p v-if="text" class="text-start" v-html="text"></p>
                <ul v-if="points" class="text-start">
                    <li v-for="(point, index) in points" :key="index" class="mb-2">{{ point }}</li>
                </ul>
                <div v-if="button" class="d-flex justify-content-start">
                    <router-link :to="buttonRoute"
                        style="color: var(--bg-primary); border-color: var(--bg-primary) !important;"
                        class="text-decoration-none border-bottom pb-2">
                        <span>Know More</span>
                        <i class="bi bi-arrow-right ms-3"></i>
                    </router-link>
                </div>
                <div v-if="mobile" class="mt-3">
                    <button class="btn text-white me-3 rounded" data-bs-toggle="modal"
                        data-bs-target="#welcomeModal" style="background-color: var(--bg-primary);"
                        @click="bookAppointment">Book An
                        Appointment</button>
                </div>
            </div>
        </div>
        <!-- <div v-if="mobile" class="d-flex justify-content-center align-items-center gap-4 mt-5">
            <button class="btn btn-outline-dark me-3 rounded-pill" @click="bookAppointment">Book An
                Appointment</button>
            <a :href="`tel:${mobile}`" class="btn btn-outline-dark rounded-pill">Call us: +91 {{ mobile }}</a>
        </div> -->
    </div>
    <WelcomeModal />
</template>

<script>
import WelcomeModal from './WelcomeModal.vue';

export default {
    components: {
        WelcomeModal,
    },
    props: {
        mobile: {
            type: Number,
        },
        imageSrc: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
            default: ''
        },
        title: {
            type: String,
        },
        heading: {
            type: String,
        },
        subHeading: {
            type: String,
        },
        text: {
            type: String,
        },
        imageFirst: {
            type: Boolean,
            default: true
        },
        points: {
            type: Array,
        },
        button: {
            type: Boolean,
        },
        buttonRoute: {
            type: String,
        },
    }
}
</script>

<style scoped>
.img-fluid {
    max-width: 100%;
    height: auto;
}

@media (min-width: 768px) {

    /* Only apply sticky positioning on desktop view */
    .sticky-image {
        position: sticky;
        top: 10%;
        /* Adjust top value as per your layout */
    }
}
</style>
