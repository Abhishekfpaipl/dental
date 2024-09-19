<template>
    <SectionTopBanner />
    <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 my-5">
            <div class="col" v-for="(item, index) in services" :key="index">
                <router-link :to="'/product-detail/' + item.sid" class="card border-0 rounded-0 h-100 overflow-hidden position-relative">
                    <div class="img-wrapper position-relative overflow-hidden" style="height: 300px;">
                        <img :src="item.image" class="card-img-top" alt="Dental Image" />
                        <div class="overlay d-flex flex-column align-items-start justify-content-end p-3">
                            <h5 class="text-white text-start">{{ item.title }}</h5>
                            <p class="text-white text-start">{{ item.description }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';

export default {
    components: {
        SectionTopBanner
    },
    data() {
        return {
        };
    },
    computed: {
        services() {
            return this.$store.getters.getServices;
        }
    }
};
</script>

<style scoped>
.card-img-top {
    transition: transform 0.3s ease-in-out;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card:hover .card-img-top {
    transform: scale(1.1);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    /* Add darker overlay for better text visibility */
    z-index: 1;
}
</style>