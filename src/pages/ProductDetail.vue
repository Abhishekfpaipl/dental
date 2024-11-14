<template>
    <div class="mb-5 pb-5">
        <SectionTopBanner />
        <div class="container my-5">
            <div class="row">
                <div class="col-12 mb-5 ">
                    <div class="d-none d-md-flex justify-content-center align-items-center gap-3">
                        <button class="btn w-25 text-white"
                            style="background-color: var(--bg-primary)" data-bs-toggle="modal"
                            data-bs-target="#enquirymodal"><span> Enquiry </span><i class="bi bi-arrow-right ms-2"></i>
                        </button>
                    </div>
                </div>
                <!-- <div class="col-md-8"> -->
                <div class="col-12">
                    <p v-if="product.long_description" class="text-start">{{ product.long_description }}</p>
                    <div v-show="product.questions" v-for="(question, index) in product.questions" :key="index">
                        <p class="text-start fw-bold">{{ question.title }}</p>
                        <p class="text-start">{{ question.description }}</p>
                    </div>
                    <ProductBenefitSection :title="product.benefitTitle" :benefits="product.benefits" />
                    <ProductBenefitSection :title="product.typeTitle" :benefits="product.types" />
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
        <MoreServices :slides="services" title="More services"
            subtitle="India’s leading and most trusted Dental Clinic" />
    </div>
    <div class="position-fixed bottom-0 w-100 btn-group d-flex d-md-none" style="z-index:10">
        <button class="btn btn-dark w-25 rounded-0" @click="share">
            <i class="bi bi-share"></i>
        </button>
        <button class="btn w-75 rounded-0 d-flex align-items-center justify-content-center text-white"
            data-bs-toggle="modal" data-bs-target="#enquirymodal" style="background-color: var(--bg-primary)">
            <span class="mb-1 fs-5">Enquiry</span>
            <i class="bi bi-arrow-right ms-2 fs-5"></i>
        </button>
    </div>
    <div class="modal fade" id="enquirymodal" tabindex="-1" aria-labelledby="enquirymodalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content position-relative">
                <div class="modal-header border-0 pt-4">
                    <h1 class="modal-title fs-5" id="enquirymodalLabel">{{ pageName }}</h1>
                </div>
                <div class="position-absolute rounded-circle wh-40 bg-danger text-white px-2 p-1 end-0"
                    data-bs-dismiss="modal" style="top: -3%;">
                    <i class="bi bi-x fs-5"></i>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submitForm" class="">
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Your Full Name" v-model="fullName">
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Your Email Address" v-model="email">
                        </div>
                        <div class="mb-3">
                            <input type="number" class="form-control" placeholder="Your phone Number" v-model="number">
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="4" placeholder="Write Message"
                                v-model="message"></textarea>
                        </div>
                        <button type="submit" class="btn px-4 py-2 text-white"
                            style="background-color: var(--bg-primary)">Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';
import ProductBenefitSection from '@/components/ProductBenefitSection.vue';
import ImageTextSection from '@/components/ImageTextSection.vue';
import MoreServices from '@/components/MoreServices.vue';
export default {
    components: {
        ProductBenefitSection,
        SectionTopBanner,
        ImageTextSection,
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
            const phoneNumber = '919899570734';
            const message = `Name: ${this.fullName}%0A 
            number: ${this.number}%0A
            Email: ${this.email}%0A
            Note: ${this.message}%0A 
            Service: ${this.product.title}%0A`;

            const url = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(url, '_blank');
        },
        share() {
            if (navigator.share) {
                navigator
                    .share({
                        title: document.title,
                        text: 'Check out this content!',
                        url: window.location.href,
                    })
                    .then(() => console.log("Content shared successfully"))
                    .catch(error => console.error("Error sharing:", error));
            }
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