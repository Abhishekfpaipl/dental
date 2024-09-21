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
            <ImageTextSection :image-src="product.image" image-alt="Sample Image" :heading="product.extraInfo.title"
                :text="product.extraInfo.description" :points="product.features" :imageFirst="true" />
        </div>

        <div v-if="product.extraInfo2" class="">
            <ImageTextSection image-src="/img/banner.jpg" image-alt="Sample Image" :heading="product.extraInfo2.title"
                :text="product.extraInfo2.description" :points="product.features2" :imageFirst="false" />
        </div>

        <!-- <ImageOverlay imageSrc="/img/banner.jpg" title="Laser Root Canal Treatment" :points="points"
            bookBtnText="Book an appointment" callBtnText="Call us: +91-8860012001" phoneNumber="+918860012001" /> -->
        <MoreServices :slides="services" title="More services"
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
        }
    },
    computed: {
        product() {
            let productId = this.$route.params.productId;
            return this.$store.getters.getService(productId)
        },
        services() {
            return this.$store.getters.getServices
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
    .sticky-sidebar {
        position: sticky;
        top: 10%;
    }
}
</style>