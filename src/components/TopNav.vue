<template>
    <!-- desktop view -->
    <div class="containerr d-flex justify-content-between align-items-center gap-5" ref="topnav"
        :style="`background: rgba(252,240,255, ${backgroundOpacity});`">
        <div class="d-flex align-items-center gap-3">
            <router-link to="/" :class="{ 'hide-on-scroll': hideOnScroll }"
                class="text-decoration-none text-dark d-flex align-items-center gap-2">
                <img src="/img/logo.png" alt="Dental Solutions" style="height: 40px;">
                <span class="mb-0 fw-bold fs-4 text-uppercase" style="color:var(--bg-primary) !important">Dental
                    Solutions</span>
            </router-link>
        </div>
        <div class="flex-fill d-none d-lg-flex justify-content-end gap-5 align-items-center"
            :class="{ 'hide-on-scroll': hideOnScroll }">
            <router-link :to="link.path" v-for="(link, index) in meus" :key="index"
                class="my-1 text-decoration-none" :class="{ 'border-bottom': $route.path === link.path }"
                style="color:var(--bg-primary) !important;">
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
    <div class="offcanvas offcanvas-end bg-light" tabindex="-1" id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel" style="">
        <div class="offcanvas-header border-bottom">
            <img src="/img/logo.png" style="height:40px" alt="Dental Solutions">
            <h5 class="offcanvas-title ms-2" id="offcanvasExampleLabel">Covisor</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="nav nav-pills flex-column mb-auto">
                <router-link :to="link.path" v-for="(link, index) in meus" :key="index"
                    class="nav-item my-1 text-decoration-none" :class="{ 'border-bottom': $route.path === link.path }"
                    style="color:var(--bg-primary) !important;">
                    <button @click="selectMenu(index)" data-bs-dismiss="offcanvas"
                        class="btn rounded border-0 w-100 d-flex align-items-center p-0 py-1">
                        <div class="btn-toggle collapsed" data-bs-toggle="collapse"
                            :data-bs-target="'#home-collapse' + index" aria-expanded="false" :disabled="index === 1">
                            <div class="d-flex align-items-center">
                                <span>{{ link.title }}</span>
                            </div>
                        </div>
                    </button>
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
                    title: 'Services',
                    path: '/services',
                },
                {
                    id: 1,
                    title: 'Implants',
                    path: '/product-detail',
                },
                {
                    id: 3,
                    title: 'Invisalign',
                    path: '/product-detail',
                },
                {
                    id: 4,
                    title: 'Veneers',
                    path: '/product-detail',
                },
                {
                    id: 4,
                    title: 'Smile Makeovers',
                    path: '/product-detail',
                },
                {
                    id: 4,
                    title: "Kid's Dentistry",
                    path: '/product-detail',
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
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;

            if (scrollPercentage >= 5) {
                this.backgroundOpacity = 1;
                this.hideOnScroll = false;
            } else if (scrollPercentage >= 3) {
                this.backgroundOpacity = 0.5;
                this.hideOnScroll = false;
            } else {
                this.backgroundOpacity = 0;
                this.hideOnScroll = true;
            }
        },
    },
}
</script>

<style scoped>
.hide-on-scroll {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.containerr {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: transparent;
    padding: 10px;
    z-index: 10;
    transition: background-color 0.3s ease-in-out;
}

.border-bottom {
    border-bottom: 2px solid var(--bg-primary) !important;
    /* Style for active link */
}
</style>
