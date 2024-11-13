<template>
    <div class="home">
        <!-- <VideoSection videoUrl="https://www.youtube.com/embed/QMhggRR5znA" title="The new life begins with a confident"
            description="Learn more about what we do by watching this video." /> -->
        <!-- <CarouselBanner /> -->
        <!-- <DentistProfile /> -->
        <BannerSection />
        <!-- <div class="my-5">
            <ImageTextSection image-src="/img/demo.jpeg" heading="Dr. Atul Gupta" subHeading="B.D.S, M.D.S, endodontist"
                :button="true" image-alt="Dr. Atul Gupta"
                text="Dr. Atual Gupta is a principal dentist at THE DENTAL Solutions, providing patients with treatment involving all aspects of dentistry including painless root canal treatments, cosmetic dentistry, dental implants, rehabilitative and general dental care.\n\nHis vision is to fulfill the need for specialized dental care and treatment resulted in the establishment of The Dental Solutions, New Delhi and Gurgaon. He completed his graduation from Pune University, 1999 and did his masters in Conservative and endodontic in 2002 from Rajiv Gandhi University, Karnataka and has been providing dental care to his patients since then."
                :imageFirst="true" />
        </div> -->
        <div class="my-5">
            <h1 class="text-center mb-1">Providing Award Wining Dental Care Services</h1>
            <p class="text-center mb-5 container">Known for Delhi's most advanced and trusted dental treatments for a
                healthier,
                brighter smile</p>
            <ImageTextSection image-src="/img/firstSection.png " heading="" subHeading="" :button="true"
                image-alt="Dr. Shweta Gupta"
                text="At Dental Solutions, your smile is our top priority. We are dedicated to ensuring your oral health is in the best hands, providing exceptional dental care that empowers you to live a healthy life. <br> <br>
Our team of highly skilled dentists, equipped with state-of-the-art technology, is here to transform discomfort into beautiful smiles. From routine check-ups to advanced treatments, we offer a comprehensive range of services tailored to meet your needs. <br> <br>
Dental Solutions is proudly recognized as the Best Dental Clinic in Delhi, maintaining its esteemed reputation for many years. Dental Solutions also received the prestigious Best Dental Clinic honor from the various renowned associations.
<br> <br> At Dental Solutions, sterilization is of utmost importance. The clinic has been acknowledged as the Safest Dental Clinic in India by numerous respected international associations, reflecting its unwavering commitment to stringent hygiene protocols and patient safety."
                :imageFirst="false" />
        </div>
        <div class="my-5">
            <DentalCard />
        </div>
        <div class="my-5">
            <DentalImplant image="/img/implant.jpg" title="Dental Implants" subtitle="India's Premier Dental Clinic for Reliable and Advanced Implant
            Solutions" description="A dental implant is an artificial tooth root, typically made of titanium, which integrates
            seamlessly with the bone, allowing it to be accepted naturally by the body. This advanced solution
            is placed into the jawbone to support a replacement tooth or bridge, restoring both the appearance
            and functionality of your smile. Dental implants look, feel, and function like natural teeth,
            offering a long-lasting and realistic solution for those seeking to regain confidence in their oral
            health. In India, dental implants have become increasingly popular due to their durability and
            ability to blend with natural teeth, making them an excellent choice for restoring smiles and
            improving overall dental well-being." link="/product-detail/implants" :imageFirst="true" />
        </div>

        <div class="my-5">
            <DentalImplant image="/img/invisalign.jpeg" title="Invisalign"
                subtitle="Invisalign is a modern, virtually invisible orthodontic treatment that uses clear, removable aligners to straighten teeth. It's an excellent option for those seeking a discreet and comfortable alternative to traditional braces."
                description="Invisalign offers an innovative approach to teeth straightening using custom-made, clear aligners that gradually shift teeth into their proper position. Unlike metal braces, Invisalign aligners are nearly invisible and can be easily removed for eating, brushing, and flossing, making them a convenient and hygienic option for both teens and adults. The aligners are made from smooth, BPA-free plastic, ensuring a comfortable fit without the discomfort of wires or brackets. Each set of aligners is worn for about two weeks, gradually moving the teeth into alignment based on the personalized treatment plan created by your dentist or orthodontist. Invisalign is ideal for treating mild to moderate orthodontic issues, offering patients a more comfortable, aesthetically pleasing solution to achieving a perfect smile."
                link="/product-detail/invisalign" :imageFirst="false" />
        </div>

        <div class="my-5">
            <DentalImplant image="/img/products/rootcanal.jpg" title="Painles Root Canal"
                subtitle="A painless cosmetic solution for a smile you\'ll love"
                description=" Many people assume that getting a root canal is stressful or painful—but that’s a misconception! In reality, our patients are often surprised by how comfortable and seamless the procedure is. Root canal treatment is one of the most effective solutions for stopping painful decay, treating infection, and saving a tooth from extraction."
                link="/product-detail/painless-root-canal-treatment" :imageFirst="true" />
        </div>

        <div class="my-5">
            <DentalImplant image="/img/products/teethcolor.jpg" title="Tooth Coloured Restoration"
                subtitle="A painless cosmetic solution for a smile you\'ll love"
                description="In today's advanced world of dentistry, achieving the perfect smile goes beyond just maintaining excellent oral hygiene—it also involves the art of restorative techniques. Tooth-colored fillings and composite restorations represent a modern, innovative solution that surpasses conventional methods. These state-of-the-art procedures provide a flawless fusion of aesthetics and functionality, ensuring a natural, beautiful smile while restoring the strength and integrity of your teeth."
                link="/product-detail/tooth-coloured-restoration" :imageFirst="false" />
        </div>

        <div class="my-5">
            <DentalImplant image="/img/products/veneers.jpg" title="Veneers"
                subtitle="Get porcelain Veneers treatment at Dental Solutions and enhance your smile"
                description="A beautiful smile is a powerful asset, and dissatisfaction with yours can impact every facet of your life. If you often find yourself hiding your smile or feeling self-conscious about your teeth, it could affect your confidence, job opportunities, personal relationships, and overall happiness. But you don’t have to feel this way anymore. With porcelain veneers from Dental Solutions, you can achieve a radiant smile that reflects your confidence and enhances your appearance."
                link="/product-detail/veneers" :imageFirst="false" />
        </div>
        <div class="my-5">
            <DentalTeamSection :imagePosition="'right'" :dentists="dentist" />
        </div>
        <div class="my-5">
            <ShortsVideoSection />
        </div>
        <!-- <AboutSection />  -->
        <div class="my-5">
            <DentalCareFeatures />
        </div>
        <div class="my-5">
            <NewGallerySection :images="gallery" title="Gallery" route="/gallery" />
        </div>
        <div class="my-5">
            <NewGallerySection :images="awards" title="Certificates" route="/certificates" />
        </div>
        <div class="my-5">
            <MoreServices :slides="awards" title="Achievements"
                subtitle="India’s leading and most trusted Dental Clinic" />
        </div>
        <div class="my-5">
            <BadgeSection />
        </div>
        <div class="my-5">
            <TestimonialSection />
        </div>
        <div class="my-5">
            <SocialSection />
        </div>
        <div class="my-5">
            <FaqSection />
        </div>
        <div class="my-5">
            <WhyChooseUs />
        </div>
    </div>
</template>

<script>
// import VideoSection from '@/components/VideoSection.vue'; 
// import DentistProfile from '@/components/DentistProfile.vue';
import BannerSection from '@/components/BannerSection.vue';
import ImageTextSection from '@/components/ImageTextSection.vue';
import DentalCard from '@/components/DentalCard.vue';
import DentalImplant from '@/components/DentalImplant.vue';
// import AboutSection from '@/components/AboutSection.vue';
// import CarouselBanner from '@/components/CarouselBanner.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';
import WhyChooseUs from '@/components/WhyChooseUs.vue';
// import BadgeSection from '@/components/BadgeSection.vue'; 
import NewGallerySection from '@/components/NewGallerySection.vue';
import FaqSection from '@/components/FaqSection.vue';
import DentalCareFeatures from '@/components/DentalCareFeatures.vue';
import MoreServices from '@/components/MoreServices.vue';
import SocialSection from '@/components/SocialSection.vue';
import DentalTeamSection from '@/components/DentalTeamSection.vue';
import ShortsVideoSection from '@/components/ShortsVideoSection.vue';

export default {
    name: "HomePage",
    components: {
        // VideoSection,
        // DentistProfile, 
        BannerSection,
        ImageTextSection,
        DentalCard,
        DentalImplant,
        // AboutSection,
        WhyChooseUs,
        // BadgeSection,
        // CarouselBanner,
        TestimonialSection,
        FaqSection,
        NewGallerySection,
        DentalCareFeatures,
        MoreServices,
        SocialSection,
        DentalTeamSection,
        ShortsVideoSection,
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
    computed: {
        dentist() {
            return this.$store.getters.getDentists
        },
        gallery() {
            return this.$store.getters['gallery/getGallery']
        },

    }
};
</script>