<template>
    <div class="container-fluid h-100" style="background-color: var(--bg-secondary); height: 95vh;">
        <div class="row justify-content-center align-items-center pt-5 mt-5 mt-md-0">
            <div class="col-md-5 px-md-5">
                <div class="d-flex flex-column bg-white rounded p-3 py-5">
                    <img src="/img/logo.png" alt="Logo" style="height: 70px; object-fit: contain;">
                    <div class="my-2">
                        <AutoTypeDeleteText :texts="services" :typingSpeed="150" :deleteSpeed="50" :delay="500" />
                    </div>
                    <div class="d-flex flex-wrap gap-2 justify-content-center align-items-center ">
                        <div class="my-1" v-for="(product, index) in products" :key="index">
                            <div class="d-flex p-2 rounded-pill"
                                style="background-color: var(--bg-secondary); color: var(--bg-primary);">
                                <i class="bi bi-check2-square me-2 small"></i>
                                <small class="">{{ product }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="">

                        <router-link to="" class="btn mt-4" data-bs-toggle="modal" data-bs-target="#welcomeModal"
                            style="color: var(--bg-primary); border: 1px solid var(--bg-primary);">Book
                            Appointment</router-link>
                    </div>
                </div>
            </div>
            <div class="col-md-7 mt-5 mt-md-0">
                <img src="/img/contactUs.svg" alt="Banner" style="width: 100%;">
            </div>
        </div>
    </div>
</template>
<script>
import AutoTypeDeleteText from "@/components/AutoTypeDeleteText.vue"
export default {
    components: {
        AutoTypeDeleteText,
    },
    data() {
        return {
            services: [
                'General Dentistry',
                'Cosmetic Dentistry',
                'Surgical Dentistry',
            ],
            products: [
                'Veneers',
                'Invisalign',
                'Dental Implants',
                'Painles Root Canal',
                'Tooth Coloured Restoration',
            ]
        }
    },
    methods: {
        openDialer() {
            const phoneNumber = 918860012001;
            window.location.href = `tel:${phoneNumber}`;
        },
    }
}
</script>
<style lang="">

</style>