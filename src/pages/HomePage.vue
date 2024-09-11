<template>
    <div class="home">
        <VideoSection videoUrl="https://www.youtube.com/embed/QMhggRR5znA" title="The new life begins with a confident"
            description="Learn more about what we do by watching this video." />
        <DentistSection />
        <DentalCard />
        <DentalImplant />
        <AboutSection />
        <CarouselBanner />
        <TestimonialSection />
    </div>
</template>

<script>
import VideoSection from '@/components/VideoSection.vue';
import DentistSection from '@/components/DentistSection.vue';
import DentalCard from '@/components/DentalCard.vue';
import DentalImplant from '@/components/DentalImplant.vue';
import AboutSection from '@/components/AboutSection.vue';
import CarouselBanner from '@/components/CarouselBanner.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';
export default {
    name: "HomePage",
    components: {
        VideoSection,
        DentistSection,
        DentalCard,
        DentalImplant,
        AboutSection,
        CarouselBanner,
        TestimonialSection,
    },
};
</script>