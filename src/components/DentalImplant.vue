<template>
    <div class="container my-5 py-5">
        <h2 class="text-center">Dental Implant</h2>
        <p class="text-center mb-3">India's leading and most trusted Dental Clinic</p>
        <div class="row align-items-center">
            <div class="col-md-4">
                <div class="">
                    <div class="d-flex align-items-center gap-3" v-for="(link, index) in links" :key="index">
                        <i class="bi bi-play-circle fs-1 text-start"></i>
                        <p class="">{{ link.name }}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-start">
                    <button class="btn btn-outline-dark rounded-pill mt-4">Book an appointment</button>
                </div>
            </div>
            <div class="col-md-4 text-center">
                <img src="/img/implant.jpg" alt="Dental Implant" class="img-fluid" />
            </div>
            <div class="col-md-4">
                <p class="text-start">
                    A dental implant is an artificial tooth root made up of titanium, which allows them to integrate
                    with bone without being recognized as a foreign object in our body. It is placed in our jaw to hold
                    a replacement tooth or bridge. Implants look, feel, and function like natural teeth thereby offering
                    the most realistic, long-lasting solution for the restoration of functionality of your smile.
                </p>
                <div class="d-flex justify-content-center align-items-center">
                    <router-link to="/services" class="btn btn-outline-dark rounded-pill">View All Services</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DentalImplant",
    data() {
        return {
            links: [
                { name: " SINGLE TOOTH IMPLANT" },
                { name: "ALL-ON-4 IMPLANT" },
                { name: " ALL-ON-6/8 IMPLANT" },
            ]
        }
    }
};
</script>

<style scoped></style>