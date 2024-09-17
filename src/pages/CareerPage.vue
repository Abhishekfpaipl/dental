<template>
    <div>
        <SectionTopBanner />
        <div class="container py-5 rounded-top-5 bg-white" style="margin-top: -40px;" v-observe>
            <div class="row">
                <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <img src="/img/career-benefit.svg" style="width: 500px; max-width: 80%" alt="">
                </div>
                <div class="col-12 col-md-6 text-center mt-4 mt-md-0">
                    <h1>" We encourage new ideas and professionalism mixed with teamwork to achieve your
                        career goals as well as making the customer satisfied. "</h1>
                </div>

            </div>
        </div>
        <CareerSection />
        <div class="py-5" style="background-color: var(--bg-forth)">
            <div class="container">
                <h3 class="text-capitalize mb-4">Employee Benefits</h3>
                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                    <div v-for="(data, index) in works" :key="index" class="col">
                        <div class="d-flex align-items-center border my-1 ps-5 ps-md-2">
                            <i :class="data.icon" class="fs-4 p-1"></i>
                            <small class="text-start fw-bold text-capitalize ms-3">{{ data.heading }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class=" container py-5" v-observe>
            <h3 class="text-center ">Our Core Values</h3>
            <p class="text-center container">
                One thing that we've tried to keep consistent through all these years is our core set of values and
                beliefs.
                They have helped us get to where we are today, and they guide us as we grow. We inculcate these
                values
                in
                everything we do - from the littlest of things to the biggest of decisions.
            </p>
            <div class="p-2 row">
                <div v-for="(data, index) in datas" :key="index" class="col-12 col-md-6 g-3">
                    <div class="d-flex align-items-center border p-2">
                        <i :class="data.icon" class="fs-2 px-2"></i>
                        <div class=" ms-2">
                            <span class="fw-bold">{{ data.heading }}</span>
                            <p class="" style="min-height: 48px;">{{ data.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import SectionTopBanner from "@/components/SectionTopBanner.vue"
// import CareerSection from "@/components/CareerSection.vue";
export default {
    name: 'CareerPage',
    components: {
        SectionTopBanner,
        // CareerSection
    },
    data() {
        return {
            datas: [
                {
                    "icon": "bi bi-lightbulb",
                    "heading": "Innovative Care",
                    "text": "Embrace the latest technology and techniques to provide the best dental care for our patients."
                },
                {
                    "icon": "bi bi-person-lines-fill",
                    "heading": "Patient-Centered Approach",
                    "text": "Our clinic is a place where every patient is treated with personalized care and respect."
                },
                {
                    "icon": "bi bi-people",
                    "heading": "Respect & Compassion",
                    "text": "We treat every individual with kindness, empathy, and understanding."
                },
                {
                    "icon": "bi bi-award",
                    "heading": "Excellence in Service",
                    "text": "Strive for excellence in every procedure, ensuring that 100% patient satisfaction is our goal."
                },
                {
                    "icon": "bi bi-tools",
                    "heading": "Proactive Problem Solving",
                    "text": "Address dental concerns before they become issues. Be proactive in care and solutions."
                },
                {
                    "icon": "bi bi-journal-text",
                    "heading": "Continuous Learning",
                    "text": "Stay updated with the latest in dental care by learning and collaborating with the team regularly."
                }
            ],

            works: [
                {
                    "icon": "bi bi-heart-pulse",
                    "heading": "Comprehensive Health Insurance"
                },
                {
                    "icon": "bi bi-currency-exchange",
                    "heading": "Competitive Salary Packages"
                },
                {
                    "icon": "bi bi-person-badge",
                    "heading": "Continuous Medical Education"
                },
                {
                    "icon": "bi bi-building",
                    "heading": "State-of-the-Art Clinic Facilities"
                },
                {
                    "icon": "bi bi-people",
                    "heading": "Collaborative Work Environment"
                },
                {
                    "icon": "bi bi-clock-history",
                    "heading": "Flexible Work Hours"
                },
                {
                    "icon": "bi bi-emoji-smile",
                    "heading": "Mental Health and Wellness Programs"
                },
                {
                    "icon": "bi bi-trophy",
                    "heading": "Performance-Based Incentives"
                }
            ],
            name: '',
            designation: '',
            note: ''
        }
    },
    methods: {
        submitQuery() {
            if (this.name != "" && this.designation != "" && this.note != "") {
                const phoneNumber = '918860012001'; // Replace with your WhatsApp number
                const message = `Hello, my name is ${this.name}. I am : ${this.designation}. Here are some additional notes: ${this.note}.`;
                const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                this.name = "",
                    this.service = "",
                    this.note = "";
            }
        }
    },

}
</script>

<style lang="scss" scoped></style>