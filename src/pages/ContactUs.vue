<template>
    <div class="">

        <SectionTopBanner />
        <div class="container bg-white rounded-top-5" v-observe>
            <div class="row p-3">
                <div class="col-12 pt-4 text-center">
                    <form @submit.prevent="submitQuery()" class="mt-4 row g-3 needs-validation" novalidate>
                        <div class="w-100 form-floating mt-0">
                            <input type="text" class="form-control" placeholder="" v-model="name" required>
                            <label for="floatingInput" class="text-muted ms-2">Name</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <input type="number" class="form-control" placeholder="Mobile" v-model="number" required>
                            <label class="ms-2 text-muted">Mobile No</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <input type="email" class="form-control" placeholder="Email" v-model="email" required>
                            <label class="ms-2 text-muted">Email Id</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                v-model="note"></textarea>
                            <label for="floatingTextarea" class="ms-2 text-muted">Describe your requirements</label>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-warning py-2 fs-5 w-100 rounded-0 text-white"
                                type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="container-fluid mt-5 py-5" style="background-color: var(--bg-secondary);" v-observe>
            <div class="row justify-content-center align-items-center">
                <h1 class="text-uppercase mb-4 text-center">Need to get in touch with us?</h1>
                <div class="col-12 col-md-6 mt-5 mt-md-0 ">
                    <div class="row row-cols-1">
                        <div v-for="(icon, index) in contact" :key="index" class="col py-2"
                            @click="handleIconClick(icon.action)">
                            <div class="d-flex justify-content-start align-items-center border p-2 ps-3">
                                <a class="text-white" :href="icon.url" target="_blank">
                                    <i :class="icon.icon" style="color: var(--bg-secondary);"></i>
                                </a>
                                <p class="text-start ms-2 fw-bold mb-0">{{ icon.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img src="/img/contactUs.svg" style="width: 100%;" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTopBanner from "@/components/SectionTopBanner.vue";
export default {
    name: "ContactPage",
    components: {
        SectionTopBanner,
    },
    data() {
        return {
            contact: [
                { name: ' enquiry@dentalsolutions.com', icon: 'bi-envelope fs-3', color: 'red', action: 'openEmail' },
                { name: '+919818149152', icon: 'bi-telephone-fill fs-3', color: 'black', action: 'openDialer' },
                { name: '+919818149152', icon: 'bi-whatsapp fs-3', color: 'green', action: 'openWhatsapp' },
                { name: 'Dental Solutions I -98 , phase1 , Ashok vihar ,New Delhi - 110052', icon: 'bi-geo-fill fs-3', color: 'black', action: 'openMaps' },
            ], 
            name: '',
            number: '',
            email: '',
            note: '',
        }
    },
    methods: {
        handleIconClick(action) {
            const phoneNumber = '+919818149152';
            const emailAddress = 'enquiry@dentalsolutions.com';
            const location = 'Dental Solutions I -98 , phase1 , Ashok vihar, New Delhi - 110052';

            switch (action) {
                case 'openEmail':
                    window.location.href = `mailto:${emailAddress}`;
                    break;
                case 'openDialer':
                    window.location.href = `tel:${phoneNumber}`;
                    break;
                case 'openWhatsapp':
                    window.open(`https://wa.me/${phoneNumber}?text=Hello...`, '_blank');
                    break;
                case 'openMaps':
                    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
                    break;
                default:
                    break;
            }
        },
        submitQuery() {
            if (this.name != "" && this.number != "" && this.email != "" && this.note != "") {
                const phoneNumber = '919818149152'; // Replace with your WhatsApp number
                const message = `Hello, my name is ${this.name}.My No.${this.number}. My Email Id :${this.email}. Here is addtional note: ${this.note}`;
                const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                this.name = "",
                    this.number = "",
                    this.email = "",
                    this.note = "";
            }
        }
    },
}
</script>

<style scoped>
.cutout {
    overflow: hidden;
    text-align: center;
}

.cutout>span {
    position: relative;
    display: inline-block;
}

.cutout>span:before,
.cutout>span:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 900px;
    /* Adjust width as needed */
    margin: 0 20px;
}

.cutout>span:before {
    right: 100%;
    border-bottom: 2px solid;
    border-color: red;
    border-image-slice: 1;
}

.cutout>span:after {
    left: 100%;
    border-bottom: 2px solid;
    border-color: red;
    border-image-slice: 1;
}
</style>
