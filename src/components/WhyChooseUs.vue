<template>
    <div class=" text-light p-4" style="background-color: var(--bg-primary);"> 
        <h1 class="text-center mb-4 text-capitalize">Exciting Facts</h1>
        <div class="row">
            <div class="col-md-3 col-sm-6 mb-3" v-for="(item, index) in items" :key="index">
                <div class="d-flex flex-column align-items-center">
                    <i :class="item.icon" class="fs-1 mb-2 primary-text"></i>
                    <h3 class="h4">{{ item.value }}</h3>
                    <p class="text-center">{{ item.text }}</p>
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
                { icon: 'bi bi-people', value: '90 K+', text: 'Patients Treated' },
                { icon: 'bi bi-calendar3', value: '15+', text: 'Years of Experience' },
            ],

        }
    }
}
</script>