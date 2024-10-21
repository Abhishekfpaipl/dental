<template>
    <SectionTopBanner />
    <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 my-5">
            <div v-show="filteredServices.length > 0" class="col" v-for="(service, index) in filteredServices"
                :key="index">
                <router-link :to="'/product-detail/' + service.sid"
                    class="text-decoration-none card position-relative rounded-0 overflow-hidden h-100"
                    style="background-color:var(--bg-secondary) !important; border:1px solid var(--bg-primary) !important;">
                    <div class="card-img-container">
                        <img :src="service.image" class="card-img-top rounded-0" alt="..."
                            style="object-fit: cover;height: 170px;">
                    </div>
                    <div class="card-body p-2" style=" color:var(--bg-primary) !important;">
                        <div class="d-flex justify-content-center align-items-center fw-bold text-ellipsis2 text-center small"
                            style="min-height: 50px">{{ service.title }}</div>
                        <p class="small my-0 text-ellipsis2">{{ service.description }}</p>
                    </div>
                    <div class="position-absolute text-center start-0 ms-0" style="top: 0px;">
                        <span class="text-white smaller p-1 pt-0 rounded-end-3"
                            style="background-color:var(--bg-primary); border:1px solid var(--bg-primary) !important;">
                            starts from ₹ 10,000 {{ service.price }}</span>
                    </div>
                </router-link>
            </div>
            <div v-if="!filteredServices.length > 0">
                <p>No services found for this category.</p>
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
    computed: {
        services() {
            return this.$store.getters.getServices
        },
        filteredServices() {
            const category = this.$route.params.category; // Get the category from the route
            const services = this.$store.getters.getServices || []; // Ensure services is always an array

            if (services.length === 0) {
                console.log('No services available');
                return [];
            }

            return this.services.filter(item => item.category === category);
        }
    },
    watch: {
        '$route.params.category': {
            immediate: true, // Trigger watch when the component is created
            handler(newCategory) {
                console.log('Category changed to:', newCategory);
            }
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
