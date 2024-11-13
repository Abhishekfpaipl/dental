<template>
    <div class="container mt-5">
        <div class="text-start mb-5">
            <p class="text-muted mb-1 text-uppercase">Dental Solutions</p>
            <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Why choose us ?</h2>
        </div>
        <div class="row row-cols-2 row-cols-md-2 row-cols-lg-5 g-4">
            <div v-for="(feature, index) in features" :key="index" class="col">
                <div class="card h-100 p-3 d-flex flex-column justify-content-center align-items-center"
                    style="background-color:var(--bg-secondary); border:1px solid var(--bg-primary) !important;">
                    <img :src="feature.image" style="width: 100px;" :alt="feature.title">
                    <!-- <i :class="feature.icon" class="bi fs-1 text-primary mb-3"></i> -->
                    <p class="mb-0 fs-5">{{ feature.title }}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DentalCareFeatures',
    data() {
        return {
            features: [
                { image: '/img/care/1.png', icon: 'bi-check2-circle', title: 'Exceptional Dental Care' },
                { image: '/img/care/2.png', icon: 'bi-tools', title: 'Cutting-Edge Equipment' },
                { image: '/img/care/3.png', icon: 'bi-building', title: 'State-of-the-Art Facility' },
                { image: '/img/care/4.png', icon: 'bi-laptop', title: 'On-Site Laboratory' },
                { image: '/img/care/5.png', icon: 'bi-heart', title: 'Patient-Focused Care' },
                { image: '/img/care/6.png', icon: 'bi-people', title: 'Expert Team of Specialists' },
                { image: '/img/care/7.png', icon: 'bi-shield-check', title: 'Rigorous Sterilization Standards' },
                { image: '/img/care/8.png', icon: 'bi-clipboard-check', title: 'Lifetime Record Management' },
                { image: '/img/care/11.png', icon: 'bi-clipboard-check', title: 'Trusted Dental Care' },
                { image: '/img/care/14.png', icon: 'bi-clipboard-check', title: 'Quality Materials' },
                { image: '/img/care/13.png', icon: 'bi-clipboard-check', title: 'Advanced Technology' },
                { image: '/img/care/10.png', icon: 'bi-clipboard-check', title: 'Personalized Consultations' },
                { image: '/img/care/9.png', icon: 'bi-clipboard-check', title: 'Infection Control Commitment' },
                { image: '/img/care/12.png', icon: 'bi-clipboard-check', title: 'Affordable Care' },
            ]
        };
    }
};
</script>