<template>
    <div class="py-4" style="background-color: var(--bg-secondary);">
        <div class="container my-5" v-observe>
            <div class="text-start mb-5">
                <p class="text-muted mb-1 text-uppercase">Dental Solutions</p>
                <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Follow us on</h2>
            </div>
            <div class="row row-cols-4">
                <div v-for="(contact, index) in folows" :key="index" class="col py-2">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="rounded-circle border d-flex align-items-center justify-content-center"
                            style="width: 60px; height: 60px;">
                            <a class="text-white" :href="contact.url" target="_blank">
                                <i :class="contact.icon" :style="'color:' + contact.color"></i>
                            </a>
                        </div>
                    </div>
                    <p class="text-center mt-2 fw-bold">{{ contact.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            folows: [
                {
                    icon: 'bi bi-facebook fs-3',
                    name: 'Facebook',
                    color: 'blue',
                    url: 'https://www.facebook.com/yourpage'
                },
                {
                    icon: 'bi bi-twitter-x fs-3',
                    name: 'Twitter',
                    color: 'black',
                    url: 'https://www.instagram.com/yourprofile'
                },
                {
                    icon: 'bi bi-youtube fs-3',
                    name: 'YouTube',
                    color: 'red',
                    url: 'https://www.youtube.com/'
                },
                {
                    icon: 'bi bi-linkedin fs-3',
                    name: 'LinkedIn',
                    color: 'blue',
                    url: 'https://www.linkedin.com/in/yourprofile'
                },
            ],
        }
    }
}
</script>
<style lang="">

</style>