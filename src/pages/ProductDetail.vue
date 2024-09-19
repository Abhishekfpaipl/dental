<template>
    <div>
        <SectionTopBanner />
        <div class="container my-5">
            <div class="row">
                <div class="col-md-8">
                    <p v-if="product.long_description" class="text-start">{{ product.long_description }}</p>
                    <div v-show="product.questions" v-for="(question, index) in product.questions" :key="index">
                        <p class="text-start fw-bold">{{ question.title }}</p>
                        <p class="text-start">{{ question.description }}</p>
                    </div>
                    <ProductBenefitSection :title="product.benefitTitle" :benefits="product.benefits" />
                    <ProductBenefitSection :title="product.typeTitle" :benefits="product.types" />
                </div>
                <div class="col-md-4">
                    <div class="bg-light sticky-sidebar p-3 pb-4">
                        <p class="text-start py-3 fs-4">Book An Appointment</p>
                        <form @submit.prevent="submitForm" class="">
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Your Full Name" v-model="fullName">
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder="Your Email Address"
                                    v-model="email">
                            </div>
                            <div class="mb-3">
                                <input type="number" class="form-control" placeholder="Your phone Number"
                                    v-model="number">
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control" rows="4" placeholder="Write Message"
                                    v-model="message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-warning px-4 py-2">Book Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="product.extraInfo" class="">
            <ImageTextSection
                image-src="https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/painless-root-canal-treatment-other_img_2-the-dental-roots.jpg"
                image-alt="Sample Image" :heading="product.extraInfo.title" :text="product.extraInfo.description"
                :points="product.features" :imageFirst="true" />
        </div>

        <div v-if="product.extraInfo2" class="">
            <ImageTextSection image-src="/img/banner.jpg" image-alt="Sample Image" :heading="product.extraInfo2.title"
                :text="product.extraInfo2.description" :points="product.features2" :imageFirst="false" />
        </div>

        <!-- <ImageOverlay imageSrc="/img/banner.jpg" title="Laser Root Canal Treatment" :points="points"
            bookBtnText="Book an appointment" callBtnText="Call us: +91-8860012001" phoneNumber="+918860012001" /> -->
        <MoreServices :slides="slides" title="More services"
            subtitle="India’s leading and most trusted Dental Clinic" />
        <FaqSection />
    </div>
</template>
<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';
import ProductBenefitSection from '@/components/ProductBenefitSection.vue';
import ImageTextSection from '@/components/ImageTextSection.vue';
// import ImageOverlay from '@/components/ImageOverlay.vue';
import FaqSection from '@/components/FaqSection.vue';
import MoreServices from '@/components/MoreServices.vue';
export default {
    components: {
        ProductBenefitSection,
        SectionTopBanner,
        ImageTextSection,
        // ImageOverlay,
        FaqSection,
        MoreServices,
    },
    data() {
        return {
            fullName: '',
            email: '',
            number: '',
            message: '',
            points: [
                'Laser root canal treatment uses a parallel beam of intense light to clean the root canals.',
                'Even after cleaning and shaping the canals, some bacteria can remain. The laser beam kills the remaining bacteria and makes the canal sterile.',
                'To ensure 100% clinical success, patients are thoroughly examined and educated for post-operative care.',
            ],
            slides: [
                {
                    title: 'Invisalign',
                    description: 'Preview your smile visualize your teeth after invisalign',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/invisalign-and-braces-the-dental-roots.jpg'
                },
                {
                    title: 'Tooth Coloured Restoration',
                    description: 'A painless cosmetic solution for a smile you\'ll love',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/tooth-coloured-restoration-the-dental-roots.jpg'
                },
                {
                    title: 'Veneers',
                    description: 'Get porcelain Veneers treatment at The Dental Roots and enhance your smile',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
                },
                {
                    title: 'Implants',
                    description: 'India’s leading and most trusted Dental Clinic',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/tooth-coloured-restoration-the-dental-roots.jpg'
                },
                {
                    title: 'Laser Dentistry',
                    description: 'In recent years, laser dentistry has superseded  many traditional dentistry practices',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
                },
                {
                    title: 'Smile Makeovers',
                    description: 'Hollywood smile makeovers treatment',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
                },
                {
                    title: 'Kids Dentistry',
                    description: 'Trusted pediatric dentistry at the Dental Solutions',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
                },
                {
                    title: 'Painless Extraction (Tooth Removal)',
                    description: 'Painless tooth extraction in Delhi NCR, India',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
                },
                {
                    title: 'Teeth Whitening',
                    description: 'Bring back  the glow  of your smile - safe, effective, and fast with long-lasting white',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
                },
                {
                    title: 'Painless Wisdom Tooth Extraction',
                    description: 'A surgial procedure to remove one or more wisdom teeth',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
                },
                {
                    title: 'Dentures',
                    description: 'Find the right denture for you!',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
                },
                {
                    title: 'Braces',
                    description: 'We perfect  your smile with love, braces, and aligners',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
                },
                {
                    title: 'Dental Bridges',
                    description: 'Restore your smile to perfect condition',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
                },
                {
                    title: 'Procelain Crowns',
                    description: 'This restoractive procedure uses prosthetic devices to return your smile to its natural state',
                    image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
                },
            ],
        }
    },
    computed: {
        product() {
            let productId = this.$route.params.productId;
            return this.$store.getters.getService(productId)
        }
    },
    methods: {
        submitForm() {
            const phoneNumber = '918860012001';
            const message = `Name: ${this.fullName}%0A 
            number: ${this.number}%0A
            Email: ${this.email}%0A
            Note: ${this.message}%0A `;

            const url = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(url, '_blank');
        }
    }
}
</script>
<style>
@media (min-width: 768px) {

    /* Sticky sidebar for desktop view */
    .sticky-sidebar {
        position: sticky;
        top: 10%;
        /* Adjust this value to control the top offset */
    }
}
</style>