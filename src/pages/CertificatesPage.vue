<template>
    <SectionTopBanner />
    <div class="container my-5">
        <div class="row g-2" ref="lightGallery" id="scroll">
            <a :href="image" class="col-md-3" v-for="(image, index) in awards" :key="index">
                <img :alt="'img' + (index + 1)" :src="image" class="card-img-top" />
            </a>
        </div>
    </div>
</template>

<script>
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import SectionTopBanner from '@/components/SectionTopBanner.vue';

export default {
    name: 'GalleryPage',
    components: {
        SectionTopBanner,
    },
    mounted() {
        this.initGallery();
    },
    data() {
        return {
            awards: [
                "/img/certificates/1.jpeg",
                "/img/certificates/2.jpeg",
                "/img/certificates/3.jpeg",
                "/img/certificates/4.jpeg",
                "/img/certificates/5.jpeg",
                "/img/certificates/6.jpeg",
            ]
        }
    },
    beforeUnmount() {
        if (this.lightGalleryInstance) {
            this.lightGalleryInstance.destroy();
        }
    },
    methods: {
        initGallery() {
            this.lightGalleryInstance = lightGallery(this.$refs.lightGallery, {
                plugins: [lgThumbnail, lgZoom],
                speed: 500,
                thumbnail: true,
                zoom: true,
            });
        },
    },
};
</script>

<style scoped>
.card-img-top {
    height: 200px;
    object-fit: cover;
    object-position: top center;
}
</style>