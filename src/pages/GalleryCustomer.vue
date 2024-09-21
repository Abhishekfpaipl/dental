<template>
    <SectionTopBanner />
    <div class="container">
        <GalleryLinks />
        <GallerySection :images="images" />
    </div>
</template>
<script>
import GalleryLinks from '@/components/GalleryLinks.vue';
import SectionTopBanner from '@/components/SectionTopBanner.vue';
import GallerySection from '@/components/GallerySection.vue';

export default {
    components: {
        GalleryLinks,
        SectionTopBanner,
        GallerySection,
    },
    data() {
        return {
            images: [
                "/img/customerImages/1.jpeg",
                "/img/customerImages/2.jpeg",
                "/img/customerImages/3.jpeg",
                "/img/customerImages/4.jpeg",
                "/img/customerImages/5.jpeg",
                "/img/customerImages/6.jpeg",
                "/img/customerImages/7.jpeg",
                "/img/customerImages/8.jpeg",
                "/img/customerImages/9.jpeg",
                "/img/customerImages/10.jpeg",
                "/img/customerImages/11.jpeg",
                "/img/customerImages/12.jpeg",
                "/img/customerImages/13.jpeg",
                "/img/customerImages/14.jpeg",
            ],
        };
    },
}
</script>
<style lang="">

</style>