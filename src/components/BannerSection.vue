<template>
    <div class="container-fluid" style="background-color: var(--bg-secondary); height: 95vh;">
        <div class="row justify-conten-center align-items-center mt-5 pt-5">
            <div class="col-md-5 px-md-5">
                <h1 class="mt-4 mt-md-0">Dental Solutions</h1>
                <AutoTypeDeleteText :texts="services" :typingSpeed="150" :deleteSpeed="50" :delay="500" />
                <div class="mt-3 text-center">
                    <p class="my-1"><i class="bi bi-check2-square me-2"></i>&nbsp;Lorem ipsum dolor sit amet.</p>
                    <p class="my-1"><i class="bi bi-check2-square me-2"></i>&nbsp;Lorem ipsum dolor sit amet.</p>
                    <p class="my-1"><i class="bi bi-check2-square me-2"></i>&nbsp;Lorem ipsum dolor sit amet.</p>
                </div>
                <router-link to="/services" class="btn mt-4"
                    style="color: var(--bg-primary); border: 1px solid var(--bg-primary);">Explore our services</router-link> 
            </div>
            <div class="col-md-7 mt-5 mt-md-0">
                <img src="/img/contactUs.svg" alt="Banner" style="width: 100%;">
            </div>
        </div>
    </div>
    <!-- <div class="col-12 ">
        <img src="/img/homeBannerDesk.jpg" class="position-relative min-vh-100 d-none d-md-block"
            style="width:100%; height:400px; object-fit:cover;">
        <img src="/img/homeBannerMob.jpg" class="position-relative d-md-none" style="width:100%;object-fit:cover;">
        <div class="position-absolute top-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
            style="background-color:#0000008c">
            <img src="/img/logo.svg" alt="" style="width:250px;filter: brightness(150);">
            <h3 class="mt-3 lh-1 fs-1 fw-bold text-uppercase">Covisor</h3>
            <div class="text-md-start text-center">
                <p class="h3 mb-2 text-capitalize">Solutions for business</p>
            </div>
            <AutoTypeDeleteText :texts="services" :typingSpeed="150" :deleteSpeed="50" :delay="500" />
            <div class="mt-3 text-center text-md-start">
                <p class="my-1"><i class="bi bi-check2-square me-2"></i>&nbsp;How to start your digital journey.</p>
                <p class="my-1"><i class="bi bi-check2-square me-2"></i>&nbsp;How to grow your business online.</p>
                <p class="my-1"><i class="bi bi-check2-square me-2"></i>&nbsp;How to compete online with big giants.</p>
            </div>
            <RouterLink to="/free-trial">
                <div class="btn my-4 fs-5 fw-bold border bg-white text-capitalize" style="color:var(--brand-color)">
                    free consultation
                </div>
            </RouterLink>
            <a href="#second"><i class="bi bi-chevron-down fs-1 text-white"></i></a>
        </div>
    </div> -->
</template>
<script>
import AutoTypeDeleteText from "@/components/AutoTypeDeleteText.vue"
export default {
    components: {
        AutoTypeDeleteText,
    },
    data() {
        return {
            services: [
                'General Dentistry',
                'Cosmetic Dentistry',
                'Surgical Dentistry',
            ],
        }
    },
    methods: {
        openDialer() {
            const phoneNumber = 918860012001;
            window.location.href = `tel:${phoneNumber}`;
        },
    }
}
</script>
<style lang="">

</style>