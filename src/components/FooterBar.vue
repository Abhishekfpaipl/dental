<template>
    <footer class="pt-5 bg-white text-dark">
        <div class="container">
            <div class="row">
                <!-- Doctor Section -->
                <div class="col-md-3">
                    <img src="/img/logo.png" alt="The dental solutions" height="70" style="">
                    <!-- <h5 class="mb-3">{{ contact.title }}</h5> -->
                    <p class="mb-1 mt-3">{{ contact.address }}</p>
                    <p class="">{{ contact.email }}</p>
                </div>

                <!-- Quick Links -->
                <div class="col-md-9 mt-4 mt-md-0">
                    <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-1 justify-content-center ">

                        <div class="col text-center" v-for="(section, index) in sections" :key="index">
                            <h5 class="mb-3">{{ section.title }}</h5>
                            <ul class="list-unstyled">
                                <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                                    <router-link :to="link.path" class="text-decoration-none text-dark"
                                        style=" color: var(--bg-primary)">{{ link.text
                                        }}</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
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
                phone: "+91-9899570734",
                email: "enquiry@dentalsolutions.com"
            },
            sections: [
                {
                    title: "Quick Links",
                    links: [
                        { path: "/gallery", text: "Gallery" },
                        { path: "/certificates", text: "Certificates" },
                        { path: "/faq", text: "FAQ's" },

                    ]
                },
                {
                    title: "Patient Guide",
                    links: [
                        { path: "/testimonial", text: "Testimonials" },
                        { path: "/privacy", text: "Privacy Policy" },
                        { path: "/terms-and-conditions", text: "Terms & Conditions" },
                    ]
                },
                {
                    title: "Treatments",
                    links: [
                        { path: "/services/general", text: "General" },
                        { path: "/services/cosmetic", text: "Cosmetic" },
                        { path: "/services/surgical", text: "Surgical" },
                    ]
                },
                {
                    title: "Connect",
                    links: [
                        { path: "/about-us", text: "About us" },
                        { path: "/contact-us", text: "Contact Us" },
                        { path: "/career", text: "Career" },
                    ]
                },
            ]
        };
    }
};
</script>