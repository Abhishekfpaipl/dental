<template>
    <div class=" text-light p-4" style="background-color: var(--bg-primary);">
        <h2 class="text-center mb-4">Badges</h2>
        <div class="row mt-4">
            <div class="col-md-3 mb-3" v-for="(badge, index) in badges" :key="index">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <img :src="badge.src" :alt="badge.name" class="img-fluid" style="max-height: 100px;">
                    <p class="ms-2">{{ badge.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhyChooseUs',
    data() {
        return {
            badges: [
                { src: '/img/badges/lifetime.png', name: 'Lifetime Warranty' },
                { src: '/img/badges/price.png', name: '100% Guaranteed' },
                { src: '/img/badges/quality.png', name: 'Quality Assurance' },
                { src: '/img/badges/technology.png', name: "World's latest technology" },
            ]
        }
    }
}
</script>

<style scoped></style>