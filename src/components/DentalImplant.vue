<template>
    <div class="container my-5 py-5">
        <h2 class="text-center">{{ title }}</h2>
        <p class="text-center mb-3">{{ subtitle }}</p>

        <div class="row align-items-center" style="background-color: var(--bg-primary);">
            <div :class="imageFirst ? 'col-md-6 px-0 order-md-1' : 'col-md-6 px-0 order-md-2'">
                <img :src="image" alt="Dental Implant" class="img-fluid w-100" />
            </div>
            <div :class="imageFirst ? 'col-md-6 mt-5 mt-md-0 order-md-2' : 'col-md-6 mb-4 mb-md-0 order-md-1'">
                <p class="text-start text-white">
                    {{ description }}
                </p>
                <div class="d-flex justify-content-center align-items-center mb-4">
                    <router-link :to="link" class="btn btn-light mt-3 rounded-pill primary-btn" >Know More</router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "DentalImplant",
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageFirst: {
            type: Boolean,
            default: true
        },
        link:{
            type: String,
        }
    }
};
</script>

<style scoped></style>