<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-6">
                <img src="https://www.thedentalroots.com/assets/images/home/img1.jpg" alt="Dr. Dheeraj Setia"
                    class="img-fluid" />
            </div>
            <div class="col-md-6 text-start bg-light px-3 py-2">
                <h2>{{ name }}</h2>
                <p>{{ position }}</p>
                <p>{{ description }}</p>
                <router-link to="" class="text-decoration-none text-dark border-bottom pb-2 align-self-end">
                    <span>View Complete Profile</span>
                    <i class="bi bi-arrow-right ms-3"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DentistSection',
    data() {
        return {
            name: 'Dr. Dheeraj Setia',
            position: 'Implantologist (American Academy of Implant Dentistry)',
            description:
                'Dr. Dheeraj Setia is a principal dentist at THE DENTAL Solutions, providing patients with treatment involving all aspects of dentistry including painless root canal treatments, cosmetic dentistry, dental implants, rehabilitative and general dental care.\n\nHis vision is to fulfill the need for specialized dental care and treatment resulted in the establishment of The Dental Roots, New Delhi and Gurgaon. He completed his graduation from Pune University, 1999 and did his masters in Conservative and endodontic in 2002 from Rajiv Gandhi University, Karnataka and has been providing dental care to his patients since then.'
        }
    }
}
</script>
<style></style>