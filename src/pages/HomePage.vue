<template>
    <div class="home">
        <!-- <VideoSection videoUrl="https://www.youtube.com/embed/QMhggRR5znA" title="The new life begins with a confident"
            description="Learn more about what we do by watching this video." /> -->
        <!-- <CarouselBanner /> -->
        <!-- <DentistProfile /> -->
        <BannerSection />
        <ImageTextSection image-src="/img/demo.jpeg" heading="Dr. Atul Gupta" subHeading="B.D.S, M.D.S, endodontist"
            :button="true" image-alt="Dr. Atul Gupta"
            text="Dr. Atual Gupta is a principal dentist at THE DENTAL Solutions, providing patients with treatment involving all aspects of dentistry including painless root canal treatments, cosmetic dentistry, dental implants, rehabilitative and general dental care.\n\nHis vision is to fulfill the need for specialized dental care and treatment resulted in the establishment of The Dental Solutions, New Delhi and Gurgaon. He completed his graduation from Pune University, 1999 and did his masters in Conservative and endodontic in 2002 from Rajiv Gandhi University, Karnataka and has been providing dental care to his patients since then."
            :imageFirst="true" />
        <ImageTextSection image-src="/img/demo.jpeg" heading="Dr. Shweta Gupta"
            subHeading="B.D.S, M.S, implantology, pgdhhm" :button="true" image-alt="Dr. Shweta Gupta"
            text="Dr. Shweta Gupta is a principal dentist at THE DENTAL Solutions, providing patients with treatment involving all aspects of dentistry including painless root canal treatments, cosmetic dentistry, dental implants, rehabilitative and general dental care.\n\nHis vision is to fulfill the need for specialized dental care and treatment resulted in the establishment of The Dental Solutions, New Delhi and Gurgaon. He completed his graduation from Pune University, 1999 and did his masters in Conservative and endodontic in 2002 from Rajiv Gandhi University, Karnataka and has been providing dental care to his patients since then."
            :imageFirst="false" />
        <DentalCard />
        <DentalImplant />
        <OtherCard />
        <AboutSection />
        <TestimonialSection />
    </div>
</template>

<script>
// import VideoSection from '@/components/VideoSection.vue'; 
// import DentistProfile from '@/components/DentistProfile.vue';
import BannerSection from '@/components/BannerSection.vue';
import ImageTextSection from '@/components/ImageTextSection.vue';
import DentalCard from '@/components/DentalCard.vue';
import DentalImplant from '@/components/DentalImplant.vue';
import AboutSection from '@/components/AboutSection.vue';
// import CarouselBanner from '@/components/CarouselBanner.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';
import OtherCard from '@/components/OtherCard.vue';
export default {
    name: "HomePage",
    components: {
        // VideoSection,
        // DentistProfile, 
        BannerSection,
        ImageTextSection,
        DentalCard,
        DentalImplant,
        AboutSection,
        // CarouselBanner,
        TestimonialSection,
        OtherCard,
    },
};
</script>