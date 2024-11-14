<template>
    <div class="" style="background-color: var(--bg-secondary); border-top: 1px solid var(--bg-primary);">
        <div class="container py-4" v-observe>
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6">
                    <h1 class="text-center text-md-start display-4" style="color: var(--bg-primary);">Let's <span
                            class="fw-bold">
                            Follow Us</span></h1>
                    <!-- <h1 class="text-center text-md-start fw-bold" style="color:var(--bg-primary) !important">Follow Us</h1> -->
                </div>
                <div class="col-md-6">
                    <div class="row row-cols-4">
                        <div v-for="(contact, index) in folows" :key="index" class="col py-2">
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="rounded-circle bg-white d-flex align-items-center justify-content-center shadow-sm"
                                    style="width: 60px; height: 60px;">
                                    <a class="text-white" :href="contact.url" target="_blank">
                                        <i v-if="contact.icon" :class="contact.icon"
                                            :style="'color:' + contact.color"></i>
                                        <img v-else :src="contact.image" :alt="contact.name" class="rounded-circle"
                                            style="width: 50px;">
                                    </a>
                                </div>
                            </div>
                            <p class="text-center mt-2 fw-bold">{{ contact.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="pt-5 bg-white text-dark" style="border-top: 1px solid var(--bg-primary);">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <img src="/img/logo.png" alt="The dental solutions" height="70" style="">
                    <p class="mb-1 mt-3">{{ contact.address }}</p>
                    <p class="">{{ contact.email }}</p>
                </div>

                <div class="col-lg-9 mt-4 mt-md-0">
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
            ],
            folows: [
                {
                    icon: 'bi bi-google fs-3',
                    name: 'Google',
                    color: 'blue',
                    url: 'https://www.google.com/maps/place/Dental+Solutions/@28.685582,77.1569691,16z/data=!4m6!3m5!1s0x390d018900000001:0xe445d23a1a4ce87a!8m2!3d28.685582!4d77.1664963!16s%2Fg%2F1tl_k2mq?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D'
                },
                {
                    icon: 'bi bi-instagram fs-3',
                    name: 'Instagram',
                    color: 'red',
                    url: 'https://www.instagram.com/delhi_dental_solutions/?igsh=YmI2dmc1OHRwZ2I4'
                },
                {
                    icon: 'bi bi-youtube fs-3',
                    name: 'YouTube',
                    color: 'red',
                    url: 'https://www.youtube.com/channel/UCIE_cWx_ThotpYd2eOe9Gyw/abou'
                },
                {
                    image: '/img/practo.jpg',
                    name: 'Practo',
                    color: 'blue',
                    url: 'https://www.practo.com/delhi/clinic/dental-solutions-ashok-vihar/overview'
                },
            ],
        };
    }
};
</script>