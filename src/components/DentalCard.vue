<template>
    <div class="container my-5">
        <h1 class="text-center mb-1">Exceptional Dental Care for Every Smile</h1>
        <p class="text-center mb-5">Providing India’s most advanced and trusted dental treatments for a healthier,
            brighter smile</p>

        <!-- <div class="row">
            <div class="col-md-4" v-for="(service, index) in services" :key="index">
                <div class="card h-100" style="border: 1px solid var(--bg-primary) !important">
                    <div class="card overflow-hidden rounded-bottom-0 position-relative mb-0">
                        <img :src="service.image" class="w-100" style="height: 250px;object-fit: cover;"
                            :alt="service.title">
                        <div class="d-flex justify-content-center align-items-center overlay">
                            <h4 class="mb-1">{{ service.title }}</h4>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap py-3 px-2">
                        <router-link :to="'/product-detail/' + item.sid" class="btn m-1"
                            style="color: var(--bg-primary); border: 1px solid var(--bg-primary)"
                            v-for="(item, i) in service.items" :key="i">
                            {{ item.title }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="row ">
            <div class="col-12 my-0" v-for="(service, index) in services" :key="index">
                <p class="text-center fw-bold fs-3">{{ service.title }}</p>
                <div
                    class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-1 my-4 d-flex justify-content-center align-items-center">
                    <div class="col" v-for="(service, index) in service.items.slice(0, 4)" :key="index">
                        <router-link :to="'/product-detail/' + service.sid"
                            class="text-decoration-none my-1 card border position-relative rounded-0 overflow-hidden dummy-card">
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
                            <span class="me-2 text-uppercase fs-4"> see more</span> <i
                                class="bi bi-arrow-right fs-2"></i>
                        </router-link>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'DentalCard',
    data() {
        return {
            services: [
                {
                    "title": "General Dentistry",
                    "image": "/img/general.jpg",
                    "items": [
                        {
                            "sid": "painless-root-canal-treatment",
                            image: '/img/products/rootcanal.jpg',
                            "title": "Painless Root Canal Treatment"
                        },
                        {
                            "sid": "dentures",
                            image: '/img/products/dentures.jpg',
                            "title": "Dentures"
                        },
                        {
                            "sid": "tooth-coloured-restoration",
                            image: '/img/products/teethcolor.jpg',
                            "title": "Tooth Coloured Restoration"
                        },
                        {
                            "sid": "kids-dentistry",
                            image: '/img/products/kids.jpg',
                            "title": "Kid's Dentistry"
                        },
                        {
                            "sid": "dental-bridges",
                            image: '/img/products/dentalbridges.jpg',
                            "title": "Dental Bridges"
                        },
                    ]
                },
                {
                    "title": "Cosmetic Dentistry",
                    "image": "/img/cosmetic.jpg",
                    "items": [
                        {
                            "sid": "invisalign",
                            image: '/img/products/invis.jpg',
                            "title": "Invisalign"
                        },
                        {
                            "sid": "veneers",
                            image: '/img/products/veneers.jpg',
                            "title": "Veneers"
                        },
                        {
                            "sid": "smile-makeovers",
                            image: '/img/products/smile.jpg',
                            "title": "Smile Makeovers"
                        },
                        {
                            "sid": "teeth-whitening",
                            image: '/img/products/teethwhite.jpg',
                            "title": "Teeth Whitening"
                        },
                        {
                            "sid": "braces",
                            image: '/img/products/braces.jpg',
                            "title": "Braces"
                        },
                        {
                            "sid": "porcelain-crowns",
                            image: '/img/products/crown.jpg',
                            "title": "Porcelain Crowns"
                        }
                    ]
                },
                {
                    "title": "Surgical Dentistry",
                    "image": "/img/surgical.jpg",
                    "items": [
                        {
                            "sid": "painless-wisdom-tooth-extraction",
                            image: '/img/products/wisdom.jpg',
                            "title": "Painless Wisdom Tooth Extraction"
                        },
                        {
                            "sid": "implants",
                            image: '/img/products/implants.jpg',
                            "title": "Implants"
                        },
                        {
                            "sid": "implants-all-on-6",
                            image: "/img/products/implants.jpg",
                            "title": "Implants All On 6"
                        },
                        {
                            "sid": "implants-all-on-4",
                            image: '/img/products/implants.jpg',
                            "title": "Implants All On 4"
                        },
                        {
                            "sid": "painless-tooth-extractions",
                            image: '/img/products/toothextraction.jpg',
                            "title": "Painless Tooth Extractions"
                        },
                        {
                            "sid": "laser-dentistry",
                            image: '/img/products/laser.jpg',
                            "title": "Laser Dentistry"
                        }
                    ]
                }
            ]
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
    background: rgba(126, 1, 128, 0.7);
    /* Semi-transparent black */
    color: white;
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
