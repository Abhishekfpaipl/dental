<template>
    <div>
        <a href="https://www.google.com/maps/place/Kamniyata+Skin+Centre-+Best+Laser+Hair+Reduction+in+Delhi,+Skin+Whitening,+Hydra+Facial%2FPRP+Hair+Treatment+North+Delhi/@28.685547,77.1664758,17z/data=!3m1!4b1!4m6!3m5!1s0x390d03dda6b498d9:0x8933d95b6a5803c6!8m2!3d28.685547!4d77.1664758!16s%2Fg%2F11ry9bkltn?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D"
            class="query slide d-flex flex-column align-items-center justify-content-center border rounded px-2 text-decoration-none"
            style="background-color: #F7138E;">
            <img src="/img/skin.svg" style="width: 25px; height: 25px;filter: invert(1);" alt="">
            <p class="text-uppercase fw-bold mb-0 smaller text-white">skin</p>
        </a>

        <div class="modal fade" id="welcomeModal" tabindex="-1" aria-labelledby="welcomeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg " role="document">
                <div class="modal-content text-bg-white position-relative" style="">
                    <div class="modal-body">
                        <h3 class="my-2 text-capitalize text-center">Book Appointment</h3>
                        <div class="row d-flex align-items-center">
                            <div class="col-md-6 mt-4 mt-md-0">
                                <img src="/img/logo1.png" style="width: 200px; max-width: 90%;" alt="">
                            </div>
                            <div class="col-md-6">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    <div class="position-absolute rounded-circle wh-40 text-white px-2 p-1 end-0"
                        data-bs-dismiss="modal" style="top: -3%; background-color: var(--bg-primary);">
                        <i class="bi bi-x fs-5"></i>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="modal" id="welcomeModal" tabindex="-1" role="dialog" aria-labelledby="welcomeModalLabel"
            aria-hidden="true" :class="{ 'show': showModal }">
            <div class="modal-dialog modal-dialog-centered modal-lg " role="document">
                <div class="modal-content text-white position-relative" style="background-color: var(--bg-primary)">
                    <div class="modal-body">
                        <h3 class="my-2 text-capitalize">Hello, how can we help you?</h3>
                        <div class="row d-flex align-items-center">
                            <div class="col-md-6 mt-4 mt-md-0">
                                <img src="/img/welcome.svg" style="width: 200px; max-width: 90%" alt="">
                            </div>
                            <div class="col-md-6">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    <div class="position-absolute rounded-circle wh-40 bg-light text-dark px-2 p-1 end-0"
                        @click="closeModal" style="top: -3%">
                        <i class="bi bi-x fs-5"></i>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
    components: {
        ContactForm,
    },
    // data() {
    //     return {
    //         showModal: false,
    //     };
    // },
    // mounted() {
    //     if (!localStorage.getItem('popupShown')) {
    //         setTimeout(() => {
    //             this.showModal = true;
    //         }, 2000);
    //     }
    // },
    // methods: {
    //     openModal() {
    //         this.showModal = true;
    //     },
    //     closeModal() {
    //         this.showModal = false;
    //         localStorage.setItem('popupShown', 'true');
    //     },
    // }
};
</script>

<style scoped>
/* Optional: Add custom styles for the modal */
.modal {
    display: none;
    background: rgba(0, 0, 0, 0.5);
    /* semi-transparent background */
    transition: opacity 0.3s ease;
}

.modal.show {
    display: block;
    opacity: 1;
}

.query {
    z-index: 9;
    position: fixed;
    bottom: 10%;
    right: 10px;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
}

@keyframes slideTop {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(5px);
    }
}

.slide {
    display: inline-block;
    animation: slideTop 1.5s ease-in-out infinite;
}
</style>
