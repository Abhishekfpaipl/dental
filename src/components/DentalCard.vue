<template>
    <div class="container my-5">
        <h1 class="text-center mb-1">Excellence in Dentistry</h1>
        <p class="text-center mb-5">India’s leading and most trusted Dental Clinic</p>
        <div class="row">
            <div class="col-md-4" v-for="(service, index) in services" :key="index">
                <div class="card position-relative">
                    <img :src="service.image" class="card-img-top h-100" style="min-height: 100%;" :alt="service.title">
                    <div class="d-flex justify-content-start align-items-end overlay">
                        <div class="text-start text-white px-2">
                            <h5 class="mb-2">{{ service.title }}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item py-1 px-0 bg-transparent text-white border-0 small"
                                    v-for="(item, i) in service.items" :key="i">
                                    <router-link to="/product-detail" class="text-white text-decoration-none">
                                        <i class="bi bi-chevron-right me-2"></i>{{ item }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <router-link to="" class="text-decoration-none text-dark border-bottom pb-2 align-self-end">
            <span>View All treatments</span>
            <i class="bi bi-arrow-right ms-3"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'DentalCard',
    data() {
        return {
            services: [
                {
                    title: 'General Dentistry',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/CategoryImages/general-dentistry.jpg',
                    items: [
                        'Painless Root Canal Treatment',
                        'Tooth Coloured Restoration',
                        'Kid\'s Dentistry',
                        'Dentures',
                        'Dental Bridges',
                        'Scaling and polishing',
                    ],
                },
                {
                    title: 'Cosmetic Dentistry',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/CategoryImages/cosmetic-dentistry.jpg',
                    items: [
                        'Invisalign',
                        'Veneers',
                        'Smile Makeovers',
                        'Teeth Whitening',
                        'Braces',
                        'Porcelain Crowns',
                    ],
                },
                {
                    title: 'Surgical Dentistry',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/CategoryImages/surgical-dentistry.jpg',
                    items: [
                        'Implants',
                        'Implants all on 4',
                        'Implants all on 6',
                        'Laser Dentistry',
                        'Painless Extractions (Tooth Removal)',
                        'Painless Wisdom Tooth Extraction',
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped>
.card {
    margin-bottom: 2rem;
    overflow: hidden;
    position: relative;
}


.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    /* Semi-transparent black */
    color: white;
}
</style>
