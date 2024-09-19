<template>
    <div v-if="benefits" class="container">
        <h1 v-if="title" class="text-start my-5">The benefits of {{ title }}</h1>
        <h1 v-else class="text-start my-5">How it helps.</h1>
        <div class="row row-cols-1 row-cols-md-2 g-1">
            <div class="col" v-for="(benefit, index) in benefits" :key="index">
                <div class="card rounded-0 h-100">
                    <div class="card-body">
                        <img v-if="benefit.image" :src="benefit.image" :alt="benefit.title" class="card-img-top"
                            style="height: 80px;width: 80px;object-fit: contain;">
                        <p class="mt-4 fw-bold">{{ benefit.title }}</p>
                        <p v-if="benefit.description">{{ benefit.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        benefits: {
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="">

</style>