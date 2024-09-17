<template>
    <footer class="pt-5" style="background-color: var(--bg-secondary); color: var(--bg-primary);">
        <div class="container">
            <div class="row">
                <!-- Doctor Section -->
                <div class="col-md-3">
                    <img src="/img/logo.png" alt="The dental solutions" height="70" style="">
                    <h5 class="mb-3">{{ contact.title }}</h5>
                    <p class="mb-1">{{ contact.address }}</p> 
                    <p class="">{{ contact.email }}</p>
                </div>

                <!-- Quick Links -->
                <div class="col-md-3 text-start" v-for="(section, index) in sections" :key="index">
                    <h5 class="mb-3">{{ section.title }}</h5>
                    <ul class="list-unstyled">
                        <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                            <router-link :to="link.path" class="text-decoration-none "
                                style=" color: var(--bg-primary)">{{ link.text
                                }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="py-2 d-flex justify-content-between px-md-4" style="background-color: var(--bg-primary);">
            <p class="mb-0 text-white">All rights reserved</p>
            <a href="https://www.covisor.in" class="text-white text-decoration-none">Copyright &copy; Covisor Infotech
                Pvt
                Ltd</a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterBar',
    data() {
        return {
            contact: {
                title: "Dental Solutions",
                address: 'Dental Solutions I -98 , phase1 , Ashok vihar ,New Delhi - 110052',
                phoneLabel: "Call us",
                phone: "+91-9818149152",
                email: "enquiry@dentalsolutions.com"
            },
            sections: [
                {
                    title: "Quick Links",
                    links: [
                        { path: "/about-us", text: "About us" },
                        { path: "/career", text: "Careers" },
                        { path: "/gallery", text: "Gallery" },
                        { path: "/faq", text: "FAQ's" },
                        { path: "/contact-us", text: "Contact Us" },

                    ]
                },
                {
                    title: "Treatments",
                    links: [
                        { path: "/product-detail", text: "Painless Root Canal Treatment" },
                        { path: "/product-detail", text: "Implants" },
                        { path: "/product-detail", text: "Kid's Dentistry" },
                        { path: "/product-detail", text: "Painless Extractions (Tooth Removal)" },
                        { path: "/product-detail", text: "Painless Wisdom Tooth Extraction" },
                        { path: "/product-detail", text: "Braces" },
                    ]
                },
                {
                    title: "Patient Guide",
                    links: [
                        { path: "/testimonial", text: "Testimonials" },
                        { path: "/product-detail", text: "Dental Tourism" },
                        { path: "/product-detail", text: "International Patients" },
                        { path: "/privacy", text: "Privacy Policy" },
                        { path: "/terms", text: "Terms & Conditions" },
                    ]
                }
            ]
        };
    }
};
</script>