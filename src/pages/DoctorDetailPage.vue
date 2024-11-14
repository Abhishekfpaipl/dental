<template>
    <div>
        <SectionTopBanner />
        <SuccessStory :dentist="dentist" />
        <div class="container" style="height: 400px;">
            <iframe style="width: 100%; height: 100%;" class="" :src="dentist.videoUrl"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
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