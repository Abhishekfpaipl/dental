<template>
    <div class="container my-5">
        <h1 class="text-center mb-1">Exceptional Dental Care for Every Smile</h1>
        <p class="text-center mb-5">Providing India’s most advanced and trusted dental treatments for a healthier,
            brighter smile</p>

        <div class="row">
            <div class="col-md-4" v-for="(service, index) in services" :key="index">
                <div class="card h-100" style="border: 1px solid var(--bg-primary) !important">
                    <div class="card overflow-hidden rounded-bottom-0 position-relative mb-0">
                        <img :src="service.image" class="w-100" style="height: 250px;object-fit: cover;" :alt="service.title">
                        <div class="d-flex justify-content-center align-items-center overlay">
                            <h4 class="mb-1">{{ service.title }}</h4>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap py-3 px-2">
                        <router-link :to="'/product-detail/' + item.sid" class="btn m-1"
                            style="color: var(--bg-primary); border: 1px solid var(--bg-primary)" v-for="(item, i) in service.items" :key="i">
                            {{ item.title }}
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
                            "title": "Painless Root Canal Treatment"
                        },
                        {
                            "sid": "dentures",
                            "title": "Dentures"
                        },
                        {
                            "sid": "tooth-coloured-restoration",
                            "title": "Tooth Coloured Restoration"
                        },
                        {
                            "sid": "kids-dentistry",
                            "title": "Kid's Dentistry"
                        },
                        {
                            "sid": "dental-bridges",
                            "title": "Dental Bridges"
                        },
                        // {
                        //     "sid": "scaling-and-polishing",
                        //     "title": "Scaling and Polishing"
                        // }
                    ]
                },
                {
                    "title": "Cosmetic Dentistry",
                    "image": "/img/cosmetic.jpg",
                    "items": [
                        {
                            "sid": "invisalign",
                            "title": "Invisalign"
                        },
                        {
                            "sid": "veneers",
                            "title": "Veneers"
                        },
                        {
                            "sid": "smile-makeovers",
                            "title": "Smile Makeovers"
                        },
                        {
                            "sid": "teeth-whitening",
                            "title": "Teeth Whitening"
                        },
                        {
                            "sid": "braces",
                            "title": "Braces"
                        },
                        {
                            "sid": "porcelain-crowns",
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
                            "title": "Painless Wisdom Tooth Extraction"
                        },
                        {
                            "sid": "implants",
                            "title": "Implants"
                        },
                        {
                            "sid": "implants-all-on-6",
                            "title": "Implants All On 6"
                        },
                        {
                            "sid": "implants-all-on-4",
                            "title": "Implants All On 4"
                        },
                        {
                            "sid": "painless-tooth-extractions",
                            "title": "Painless Tooth Extractions"
                        },
                        {
                            "sid": "laser-dentistry",
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
</style>
