<template>
    <div class="why-choose-us bg-dark text-light p-4">
        <h2 class="text-center mb-4">WHY CHOOSE US</h2>
        <div class="row">
            <div class="col-md-3 col-sm-6 mb-3" v-for="(item, index) in items" :key="index">
                <div class="d-flex flex-column align-items-center">
                    <i :class="item.icon" class="fa-3x mb-2"></i>
                    <h3 class="h4">{{ item.value }}</h3>
                    <p class="text-center">{{ item.text }}</p>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-3 mb-3" v-for="(badge, index) in badges" :key="index">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <img :src="badge.src" :alt="badge.alt" class="img-fluid" style="max-height: 80px;">
                    <p class="ms-2">{{ badge.alt }}</p>
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
            items: [
                { icon: 'bi bi-globe', value: '2+', text: 'International Dental Clinics' },
                { icon: 'bi bi-person-badge', value: '50+', text: 'Teams of Doctors' },
                { icon: 'bi bi-award', value: '', text: 'Quality Assurance' },
                { icon: 'bi bi-gear', value: '', text: "World's latest Technology" },
                { icon: 'bi bi-people', value: '90 K+', text: 'Patients Treated' },
                { icon: 'bi bi-calendar3', value: '15+', text: 'Years of Experience' },
            ],
            badges: [
                { src: '/img/badge.jpg', alt: 'Lifetime Warranty' },
                { src: '/img/badge.jpg', alt: '100% Guaranteed' },
                { src: '/img/badge.jpg', alt: 'Lifetime Warranty' },
                { src: '/img/badge.jpg', alt: '100% Guaranteed' },
            ]
        }
    }
}
</script>

<style scoped>
.why-choose-us {
    background-color: #1a1a1a;
}
</style>