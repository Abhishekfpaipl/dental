<template>
    <div>
        <SectionTopBanner />
        <div class="text-start container mt-5">
            <CounterSection />
            <h2 class="text-center mb-4 text-capitalize">About The dental solutions</h2>
            <p class="text-center px-4">
                Don’t wait any longer to give your teeth the expert care they deserve at Dental Solutions – a leading
                advanced dental clinic offering world-class facilities and state-of-the-art technology. We are committed
                to providing our patients with not just exceptional dental treatments but also a compassionate,
                patient-centered experience. Our clinic is designed to cater to the diverse dental needs of our clients,
                all under one roof.

                Whether you're in need of Dental Implants to restore missing teeth, Braces to perfect your smile, Root
                Canal Treatment to relieve pain and save your tooth, or even a complete Smile Makeover, Dental Solutions
                has
                you covered. We also specialize in Kids Dentistry, ensuring that your little ones receive the gentlest
                care, and offer quick solutions such as Instant Teeth Whitening for those looking to enhance their
                appearance. Our expertise extends to Cosmetic Dentistry and complex procedures like Restoration with
                Crowns and Bridges, ensuring a comprehensive range of dental care services to suit every requirement.

                For residents of Delhi and Gurgaon who find themselves searching for a "dentist near me," look no
                further. Dental Solutions is the ultimate destination for all your dental concerns, combining
                cutting-edge
                treatments with the warmth and personal attention you deserve.

                Our highly skilled team of dental specialists is renowned not only for their expertise but also for
                their commitment to delivering precise, accurate treatments tailored to each patient’s unique needs. At
                Dental Solutions, patient comfort is a priority, and we pride ourselves on creating a seamless and
                stress-free experience for everyone who walks through our doors.

                Thanks to our unwavering dedication to excellence, we have been recognized as the Best Dental Clinic in
                Delhi and the Best Dental Clinic in Gurgaon for three consecutive years. Whether you're coming in for
                routine care or a more complex procedure, we guarantee that you’ll leave with a brighter, healthier
                smile. Visit us today and discover why Dental Solutions continues to set the standard in modern dental
                care.
            </p> 
            <ImageTextSection image-src="/img/demo.jpeg" heading="Dr. Atul Gupta" subHeading="B.D.S, M.D.S, endodontist"
                :button="true" image-alt="Dr. Atul Gupta"
                text="Dr. Atual Gupta is a principal dentist at THE DENTAL Solutions, providing patients with treatment involving all aspects of dentistry including painless root canal treatments, cosmetic dentistry, dental implants, rehabilitative and general dental care.\n\nHis vision is to fulfill the need for specialized dental care and treatment resulted in the establishment of The Dental Solutions, New Delhi and Gurgaon. He completed his graduation from Pune University, 1999 and did his masters in Conservative and endodontic in 2002 from Rajiv Gandhi University, Karnataka and has been providing dental care to his patients since then."
                mobile="9818149152" :imageFirst="true" />
            <ImageTextSection image-src="/img/demo.jpeg" heading="Dr. Shweta Gupta"
                subHeading="B.D.S, M.S, implantology, pgdhhm" :button="true" image-alt="Dr. Shweta Gupta"
                text="Dr. Shweta Gupta is a principal dentist at THE DENTAL Solutions, providing patients with treatment involving all aspects of dentistry including painless root canal treatments, cosmetic dentistry, dental implants, rehabilitative and general dental care.\n\nHis vision is to fulfill the need for specialized dental care and treatment resulted in the establishment of The Dental Solutions, New Delhi and Gurgaon. He completed his graduation from Pune University, 1999 and did his masters in Conservative and endodontic in 2002 from Rajiv Gandhi University, Karnataka and has been providing dental care to his patients since then."
                mobile="9899570734" :imageFirst="false" />
            <!-- <TeamSection />  -->
            <MoreServices :slides="teams" title="The Dental Roots team"
                subtitle="Our award-winning dental team are committed to providing exceptional dental care for all patients" />
            <MoreServices :slides="slides" title="International Business Award 2018"
                subtitle="Best Dental Hospital for Dental Implants, Root Canal Treatment and Cosmetic Dentistry in India" />
        </div>
    </div>
</template>

<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';
import CounterSection from '@/components/CounterSection.vue'; 
import ImageTextSection from '@/components/ImageTextSection.vue';
// import TeamSection from '@/components/TeamSection.vue';
import MoreServices from '@/components/MoreServices.vue';

export default {
    name: 'AboutUs',
    components: {
        SectionTopBanner,
        CounterSection, 
        ImageTextSection,
        // TeamSection,
        MoreServices
    },
    data() {
        return {
            slides: [
                { image: "https://www.thedentalroots.com/assets/images/about/cer8.jpg", },
                { image: "https://www.thedentalroots.com/assets/images/about/cer9.jpg", },
                { image: "https://www.thedentalroots.com/assets/images/about/cer10.jpg", },
                { image: "https://www.thedentalroots.com/assets/images/about/cer11.jpg", },
                { image: "https://www.thedentalroots.com/assets/images/about/cer12.jpg", },
            ],
            teams: [
                {
                    title: "Dr. Prerna Jeloka",
                    description: "Conservative and Endodontic Dentistry (BDS, MDS)",
                    image: "https://www.thedentalroots.com/assets/images/about/Dr_Prerna.jpg",
                },
                {
                    title: "Dr. Ritika",
                    description: "General Dentist (BDS)",
                    image: "https://www.thedentalroots.com/assets/images/about/dr-Ritika.jpg",
                },
                {
                    title: "Dr. Aditi Chaturvedi",
                    description: "BDS and MDS in Periodontology and Oral Implantology",
                    image: "https://www.thedentalroots.com/assets/images/about/dr_Aditi_Chaturvedi.jpg",
                },
                {
                    title: "Dr. Sarveshwari Singh",
                    description: "Conservative and Endodontic Dentistry (BDS, MDS)",
                    image: "https://www.thedentalroots.com/assets/images/about/dr-sarveshwari.png",
                },
                {
                    title: "Dr. Anchal Bhat",
                    description: "Conservative Dentist and Endodontic (MDS)",
                    image: "https://www.thedentalroots.com/assets/images/about/Anchal.jpg",
                },
            ],
        }
    }
}
</script>