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
        <DentalImplant image="/img/implant.jpg" title="Dental Implants" subtitle="India's Premier Dental Clinic for Reliable and Advanced Implant
            Solutions" description="A dental implant is an artificial tooth root, typically made of titanium, which integrates
                    seamlessly with the bone, allowing it to be accepted naturally by the body. This advanced solution
                    is placed into the jawbone to support a replacement tooth or bridge, restoring both the appearance
                    and functionality of your smile. Dental implants look, feel, and function like natural teeth,
                    offering a long-lasting and realistic solution for those seeking to regain confidence in their oral
                    health. In India, dental implants have become increasingly popular due to their durability and
                    ability to blend with natural teeth, making them an excellent choice for restoring smiles and
                    improving overall dental well-being." :imageFirst="true" />

        <DentalImplant image="/img/invisalign.jpg" title="Invisalign"
            subtitle="Invisalign is a modern, virtually invisible orthodontic treatment that uses clear, removable aligners to straighten teeth. It's an excellent option for those seeking a discreet and comfortable alternative to traditional braces."
            description="Invisalign offers an innovative approach to teeth straightening using custom-made, clear aligners that gradually shift teeth into their proper position. Unlike metal braces, Invisalign aligners are nearly invisible and can be easily removed for eating, brushing, and flossing, making them a convenient and hygienic option for both teens and adults. The aligners are made from smooth, BPA-free plastic, ensuring a comfortable fit without the discomfort of wires or brackets. Each set of aligners is worn for about two weeks, gradually moving the teeth into alignment based on the personalized treatment plan created by your dentist or orthodontist. Invisalign is ideal for treating mild to moderate orthodontic issues, offering patients a more comfortable, aesthetically pleasing solution to achieving a perfect smile."
            :imageFirst="false" />
        <OtherCard />
        <AboutSection />
        <WhyChooseUs />
        <BadgeSection />
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
import WhyChooseUs from '@/components/WhyChooseUs.vue';
import BadgeSection from '@/components/BadgeSection.vue';
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
        WhyChooseUs,
        BadgeSection,
        // CarouselBanner,
        TestimonialSection,
        OtherCard,
    },
};
</script>