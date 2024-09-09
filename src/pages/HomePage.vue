<template>
    <div class="home">
        <VideoSection videoUrl="https://www.youtube.com/embed/QMhggRR5znA" title="The new life begins with a confident"
            description="Learn more about what we do by watching this video." />
        <DentistSection />
        <DentalCard />
        <CarouselBanner />
        <FooterBar />
    </div>
</template>

<script>
import VideoSection from '@/components/VideoSection.vue';
import DentistSection from '@/components/DentistSection.vue';
import DentalCard from '@/components/DentalCard.vue';
import CarouselBanner from '@/components/CarouselBanner.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
    name: "HomePage",
    components: {
        VideoSection,
        DentistSection,
        DentalCard,
        CarouselBanner,
        FooterBar,
    },
};
</script>