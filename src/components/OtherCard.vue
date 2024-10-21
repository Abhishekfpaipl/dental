<template>
    <div class="container my-5">
        <div class="d-flex justify-content-between justify-content-md-center align-items-center">
            <h1 class="text-start text-capitalize">Products</h1>
            <router-link to="/services"
                class="text-decoration-none text-dark d-flex d-md-none flex-column align-items-center">
                <span>See More</span>
                <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>
        <div
            class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-1 my-4 d-flex justify-content-center align-items-center">
            <div class="col my-0" v-for="(service, index) in services.slice(1, 4)" :key="index">
                <router-link :to="'/product-detail/' + service.sid"
                    class="text-decoration-none my-1 card  position-relative rounded-0 overflow-hidden"
                    style="border:1px solid var(--bg-primary) !important;">
                    <div class="card-img-container">
                        <img :src="service.image" class="card-img-top rounded-0" alt="..."
                            style="object-fit: cover;height: 170px;">
                    </div>
                    <div class="card-body p-2">
                        <div class="d-flex justify-content-center align-items-center fw-bold text-ellipsis2 text-center small"
                            style="min-height: 50px">{{ service.title }}</div>
                        <p class="small my-0 text-ellipsis2">{{ service.description }}</p>
                    </div>
                    <div class="position-absolute text-center start-0 ms-0" style="top: 0px;">
                        <span class="text-white smaller p-1 pt-0 rounded-end-3"
                            style="background-color:var(--bg-primary); border:1px solid var(--bg-primary) !important;">
                            starts from ₹ 10,000{{ service.price }}</span>
                    </div>
                </router-link>
            </div>
            <div class="col-md-2 d-none d-md-block my-0">
                <router-link to="/services"
                    class="dummy-card text-decoration-none d-flex flex-column justify-content-center align-items-center"
                    style="background-color:var(--bg-secondary); border:1px solid var(--bg-primary) !important; color: var(--bg-primary);">
                    <span class="me-2 text-uppercase fs-4"> see more</span> <i class="bi bi-arrow-right fs-2"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TradeFair",
    data() {
        return {
            // products: [
            //     {
            //         "sid": "invisalign",
            //         "title": "Invisalign",
            //         "image": "/img/products/invis.jpg",
            //         "description": "A clear aligner system to straighten teeth without the use of traditional metal braces. Ideal for a discreet orthodontic solution.",
            //         "price": 10000
            //     },
            //     {
            //         "sid": "veneers",
            //         "title": "Veneers",
            //         "image": "/img/products/veneers.jpg",
            //         "description": "Thin shells of porcelain or composite resin that cover the front surface of teeth to improve appearance. Perfect for enhancing your smile.",
            //         "price": 10000
            //     },
            //     {
            //         "sid": "Smile Makeovers",
            //         "title": "Smile Makeovers",
            //         "image": "/img/products/smile.jpg",
            //         "description": "Comprehensive cosmetic treatments designed to enhance the overall appearance of your smile. Includes whitening, veneers, and more.",
            //         "price": 10000
            //     },
            //     {
            //         "sid": 23,
            //         "title": "Kid's Dentistry",
            //         "image": "/img/products/kids.jpg",
            //         "description": "Specialized dental care tailored for children, focusing on prevention, treatment, and education to ensure healthy dental development.",
            //         "price": 10000
            //     },
            //     {
            //         "sid": 23,
            //         "title": "International Patients",
            //         "image": "https://picsum.photos/id/1001/1920/1080",
            //         "description": "Dedicated services for international patients, including comprehensive treatment plans, travel arrangements, and personalized care.",
            //         "price": 10000
            //     }
            // ]

        }
    },
    computed: {
        services() {
            return this.$store.getters.getServices
        }
    },
    methods: {
        enquiry(fair) {
            console.log(fair.title)
            const phoneNumber = '918318599577';
            const message = `Hello, I'm interested in ${fair.title}. Please confirm`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        },
    }
}
</script>

<style scoped>
.card-img-container {
    overflow: hidden;
    /* height: 200px; */
}

.card-img-top {
    transition: transform 0.3s ease;
}

.card:hover .card-img-top {
    transform: scale(1.1);
}

.dummy-card {
    height: 276px
}

@media(max-width:768px) {
    .dummy-card {
        height: 150px !important
    }
}
</style>
