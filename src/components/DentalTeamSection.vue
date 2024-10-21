<template>
    <div class="container my-5">
        <div class="row align-items-center">
            <div :class="[
                'col-12 col-md-6 text-md-start text-center',
                { 'order-md-2 text-md-end': imagePosition === 'left' }
            ]">
                <h2 class="mb-3">OUR DENTAL CARE TEAM IS LED BY</h2>
                <h1 class="display-4 mb-4">
                    TWO HIGHLY<br>
                    ACCOMPLISHED<br>
                    <span class="fw-bold" style="color:var(--bg-primary) !important">DENTISTS</span>
                </h1>
            </div>
            <div :class="[
                'col-12 col-md-6',
                { 'order-md-1': imagePosition === 'left' }
            ]">
                <div class="row">
                    <div v-for="(dentist, index) in dentists" :key="index" class="col-6 mb-3">
                        <img src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
                            :alt="dentist.name" class="img-fluid rounded mb-2">
                        <h3 class="h5 mb-0">{{ dentist.name }}</h3>
                        <p class="text-muted">{{ dentist.qualifications }}</p>
                        <router-link :to="'/doctor/' + dentist.sid" class="btn text-white" style="background-color: var(--bg-primary);">{{ dentist.button }}</router-link>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DentalTeamSection',
    props: {
        imagePosition: {
            type: String,
            default: 'left',
            validator: (value) => ['left', 'right'].includes(value)
        }, 
        dentists: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.text-primary {
    color: #007bff !important;
}
</style>