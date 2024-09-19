<template>
    <div class="container my-5">
        <h1 v-if="title" class="text-center mb-5">{{ title }}</h1>
        <div class="row">
            <div :class="imageFirst ? 'col-md-6 order-1' : 'col-md-6 order-2'">
                <img :src="imageSrc" :alt="imageAlt" class="img-fluid sticky-image" />
            </div>
            <div
                :class="imageFirst ? 'col-md-6 order-2 mt-5 mt-md-0 bg-light px-3 py-2' : 'col-md-6 order-1 mb-4 mb-md-0 bg-light px-3 py-2'">
                <h2 v-if="heading" class="text-start">{{ heading }}</h2>
                <p v-if="subHeading" class="text-start text-uppercase">{{ subHeading }}</p>
                <p v-if="text" class="text-start">{{ text }}</p>
                <ul v-if="points" class="text-start">
                    <li v-for="(point, index) in points" :key="index" class="mb-2">{{ point }}</li>
                </ul>
                <div v-if="button" class="d-flex justify-content-start">
                    <router-link to="/about-us" class="text-decoration-none text-dark border-bottom pb-2">
                        <span>View Complete Profile</span>
                        <i class="bi bi-arrow-right ms-3"></i>
                    </router-link>
                </div>
            </div>
        </div>
        <div v-if="mobile" class="d-flex justify-content-center align-items-center gap-4 mt-5">
            <button class="btn btn-outline-dark me-3 rounded-pill" @click="bookAppointment">Book An
                Appointment</button>
            <a :href="`tel:${mobile}`" class="btn btn-outline-dark rounded-pill">Call us: +91 {{ mobile }}</a>
        </div>
    </div>
</template>

<script>
export default {
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
        }
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
