<template>
    <div style="background-color: var(--bg-secondary)">
        <div class="container py-5"> 
            <div class="row align-items-center">
                <div :class="[
                    'col-12 col-lg-6 text-md-start text-center',
                    { 'order-md-2 text-md-end': imagePosition === 'left' }
                ]">
                    <h1 class="display-4">OUR DENTAL CARE TEAM IS LED BY</h1>
                    <h1 class="my-5">
                        <span class="fw-bold" style="color:var(--bg-primary) !important">TWO HIGHLY ACCOMPLISHED<br>DENTISTS</span>
                    </h1>
                </div>
                <div :class="[
                    'col-12 col-lg-6',
                    { 'order-md-1': imagePosition === 'left' }
                ]">
                    <div class="row">
                        <div v-for="(dentist, index) in dentists" :key="index" class="col-6 mb-3">
                            <img :src="dentist.image" :alt="dentist.name" class="img-fluid rounded mb-2">
                            <h3 class="h5 mb-0">{{ dentist.name }}</h3>
                            <p class="text-muted">{{ dentist.qualifications }}</p>
                            <router-link :to="'/doctor/' + dentist.sid" class="btn text-white"
                                style="background-color: var(--bg-primary);">Know More</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DentalTeamSection',
    props: {
        imagePosition: {
            type: String,
            default: 'left',
            validator: (value) => ['left', 'right'].includes(value)
        },
        dentists: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            default: 'Our Dental Team'
        }
    }
}
</script>

<style scoped>
.text-primary {
    color: #007bff !important;
}
</style>