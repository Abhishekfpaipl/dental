<template>
    <div>
        <SectionTopBanner />

        <SuccessStory :dentist="dentist" />
    </div>
</template>
<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';
import SuccessStory from '@/components/SuccessStory.vue';
export default {
    components: {
        SectionTopBanner,
        SuccessStory,
    },
    computed: {
        dentist() {
            let productId = this.$route.params.productId;
            return this.$store.getters.getDentist(productId)
        },
    }
}
</script>
<style lang="">

</style>