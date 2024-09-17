<template>
    <div class="container my-5">
        <h1 class="text-center mb-1">Exceptional Dental Care for Every Smile</h1>
        <p class="text-center mb-5">Providing India’s most advanced and trusted dental treatments for a healthier,
            brighter smile</p>

        <div class="row">
            <div class="col-md-4" v-for="(service, index) in services" :key="index">
                <div class="card h-100">
                    <div class="card overflow-hidden position-relative mb-0">
                        <img :src="service.image" class="card-img h-100" style="min-height: 100%;" :alt="service.title">
                        <div class="d-flex justify-content-center align-items-center overlay">
                            <h4 class="mb-1">{{ service.title }}</h4>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap py-3 px-2">
                        <router-link to="/product-detail" class="btn m-1 text-white"
                            style="background-color: var(--bg-primary);" v-for="(item, i) in service.items" :key="i">
                            {{ item }}
                        </router-link>
                        <!-- <ul class="list-group list-group-flush">
                            <li class="list-group-item text-start py-1 px-0 bg-transparent text-white border-0 mb-0 pb-0"
                                v-for="(item, i) in service.items" :key="i">
                                <router-link to="/product-detail" class="text-dark text-decoration-none">
                                    <i class="bi bi-chevron-right me-2"></i>{{ item }}
                                </router-link>
                            </li>
                        </ul> -->
                    </div>
                </div>
            </div>

        </div>
        <!-- <router-link to="" class="text-decoration-none text-dark border-bottom pb-2 align-self-end">
            <span>View All treatments</span>
            <i class="bi bi-arrow-right ms-3"></i>
        </router-link> -->
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
                    image: '/img/1.png',
                    items: [
                        'Painless Root Canal Treatment',
                        'Dentures',
                        'Tooth Coloured Restoration',
                        'Kid\'s Dentistry',
                        'Dental Bridges',
                        'Scaling and polishing',
                    ],
                },
                {
                    title: 'Cosmetic Dentistry',
                    image: '/img/2.png',
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
                    image: '/img/3.png',
                    items: [
                        'Painless Wisdom Tooth Extraction',
                        'Implants',
                        'Implants all on 6',
                        'Implants all on 4',
                        'Painless Tooth Extractions ',
                        'Laser Dentistry',
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped>
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
