<template>
    <footer class="text-bg-secondary py-5">
        <div class="container">
            <div class="row">
                <!-- Doctor Section -->
                <div class="col-md-3">
                    <h5 class="mb-3">{{ contact.title }}</h5>
                    <p>{{ contact.phoneLabel }} : {{ contact.phone }}</p>
                    <p>{{ contact.email }}</p>
                </div>

                <!-- Quick Links -->
                <div class="col-md-3 text-start" v-for="(section, index) in sections" :key="index">
                    <h5 class="mb-3">{{ section.title }}</h5>
                    <ul class="list-unstyled">
                        <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                            <router-link :to="link.path" class="text-decoration-none text-white">{{ link.text }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="text-center mt-4">
            <p>&copy; Thedentalsolutions. All rights reserved.</p>
            <p>Made by passion</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterBar',
    data() {
        return {
            contact: {
                title: "The Dental Soluction Doctors",
                phoneLabel: "Call us",
                phone: "+91-8860012001",
                email: "enquiry@thedentalsolutions.com"
            },
            sections: [
                {
                    title: "Quick Links",
                    links: [
                        { path: "/about-us", text: "About us" },
                        { path: "/career", text: "Careers" },
                        { path: "/gallery", text: "Gallery" },
                        { path: "/blogs", text: "Blogs" },
                        { path: "/faq", text: "FAQ's" },
                        { path: "/contact-us", text: "Contact Us" },
                        { path: "/terms", text: "Terms & Conditions" },
                    ]
                },
                {
                    title: "Treatments",
                    links: [
                        { path: "/", text: "Painless Root Canal Treatment" },
                        { path: "/", text: "Implants" },
                        { path: "/", text: "Kid's Dentistry" },
                        { path: "/", text: "Painless Extractions (Tooth Removal)" },
                        { path: "/", text: "Painless Wisdom Tooth Extraction" },
                        { path: "/", text: "Braces" },
                    ]
                },
                {
                    title: "Patient Guide",
                    links: [
                        { path: "/testimonials", text: "Testimonials" },
                        { path: "/", text: "Dental Tourism" },
                        { path: "/", text: "International Patients" },
                        { path: "/privacy", text: "Privacy Policy" },
                        { path: "/faq", text: "FAQ's" },
                        { path: "/contact-us", text: "Contact Us" },
                    ]
                }
            ]
        };
    }
};
</script>