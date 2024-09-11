<template>
    <div class="container my-5">
        <h1 class="text-center mb-5">{{ title }}</h1>
        <div class="row">
            <div :class="imageFirst ? 'col-md-6 order-1' : 'col-md-6 order-2'">
                <img :src="imageSrc" :alt="imageAlt" class="img-fluid" />
            </div>
            <div :class="imageFirst ? 'col-md-6 order-2 mt-5 mt-md-0' : 'col-md-6 order-1 mb-4 mb-md-0'">
                <h2 class="text-start">{{ heading }}</h2>
                <p v-if="text" class="text-start">{{ text }}</p>
                <ul v-if="points" class="text-start ">
                    <li v-for="(point, index) in points" :key="index" class="mb-2">{{ point }}</li>
                </ul>

            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center gap-4 mt-5">
            <button class="btn btn-outline-dark me-3 rounded-pill" @click="bookAppointment">Book An
                Appointment</button>
            <a :href="`tel:${8826658501}`" class="btn btn-outline-dark rounded-pill">Call us: +91 8860012001</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
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
            default: 'Default Title'
        },
        heading: {
            type: String,
            default: 'Default Title'
        },
        text: {
            type: String,
            default: 'Default text content goes here.'
        },
        imageFirst: {
            type: Boolean,
            default: true
        },
        points: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>
.img-fluid {
    max-width: 100%;
    height: auto;
}
</style>