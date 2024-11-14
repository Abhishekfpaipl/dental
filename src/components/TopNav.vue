<template>
    <!-- desktop view -->
    <!-- <div class="containerr d-flex justify-content-between align-items-center gap-5" ref="topnav"
        :style="`background: rgba(255,255,255, ${backgroundOpacity});`"> -->
    <div class="containerr d-flex justify-content-between align-items-center gap-5 bg-white" ref="topnav">
        <div class="d-flex align-items-center gap-3">
            <router-link to="/" :class="{ 'hide-on-scroll': hideOnScroll }"
                class="text-decoration-none text-dark d-flex align-items-center gap-2">
                <img src="/img/logo.png" alt="Dental Solutions" style="height: 50px;">
                <!-- <span class="mb-0 fw-bold fs-4 text-uppercase" style="color:var(--bg-primary) !important">Dental
                    Solutions</span> -->
            </router-link>
        </div>
        <div class="flex-fill d-none d-lg-flex justify-content-end gap-5 align-items-center"
            :class="{ 'hide-on-scroll': hideOnScroll }">
            <router-link :to="link.path" v-for="(link, index) in meus" :key="index" class="my-1 text-decoration-none"
                :class="{ 'borderClass': $route.path === link.path }" style="color:var(--bg-primary) !important;">
                <button @click="selectMenu(index)"
                    class="btn rounded border-0 w-100 d-flex align-items-center p-0 py-1">
                    <span>{{ link.title }}</span>
                </button>
            </router-link>
        </div>
        <div class="d-flex d-lg-none gap-1 align-items-center">
            <i class="bi bi-list btn text-white p-0 fs-4 px-1" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
                :class="{ 'hide-on-scroll': hideOnScroll }" style="background-color: var(--bg-primary);"></i>
        </div>
    </div>

    <!-- mobile view -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel" >
        <div class="offcanvas-header" style="border-bottom: 1px solid white;">
            <img src="/img/logo.png" style="height:40px" alt="Dental Solutions"> 
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body" style="background-color: var(--bg-primary);">
            <ul class="nav nav-pills flex-column mb-auto">
                <router-link :to="link.path" v-for="(link, index) in meus" :key="index"
                    class="nav-item my-1 text-decoration-none border-bottom" >
                    <p @click="selectMenu(index)" data-bs-dismiss="offcanvas"
                        class="d-flex justify-content-start text-white mb-2">
                        {{link.title}}
                    </p>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedMenu: null,
            meus: [
                {
                    id: 2,
                    title: 'Home',
                    path: '/',
                },
                {
                    id: 2,
                    title: 'General',
                    path: '/services/general',
                },
                {
                    id: 2,
                    title: 'Cosmetic',
                    path: '/services/cosmetic',
                },
                {
                    id: 2,
                    title: 'Surgical',
                    path: '/services/surgical',
                },
                {
                    id: 2,
                    title: 'Gallery',
                    path: '/gallery',
                },
                {
                    id: 2,
                    title: 'About Us',
                    path: '/about-us',
                },
                {
                    id: 2,
                    title: 'Contact Us',
                    path: '/contact-us',
                }, 
            ],
            backgroundOpacity: 0,
            hideOnScroll: true,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        selectMenu(index) {
            this.selectedMenu = index;
        }, 
    },
}
</script>

<style scoped>
/* .hide-on-scroll {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
} */

.containerr {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: transparent;
    padding: 10px;
    z-index: 10;
    transition: background-color 0.3s ease-in-out;
}

.borderClass {
    border-bottom: 2px solid var(--bg-primary) !important;
}
</style>
