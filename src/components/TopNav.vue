<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark position-fixed top-0 w-100" style="z-index: 10;">
        <div class="container-fluid">
            <router-link  class="navbar-brand" to="/">
                <img src="https://www.thedentalroots.com/assets/images/logo.png" alt="The dental roots" height="30">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 text-start">
                        <li class="nav-item">
                            <router-link to="/services" class="nav-link">Services</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#implants">Implants</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#invisalign">Invisalign</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#veneers">Veneers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#smile-makeovers">Smile Makeovers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#kids-dentistry">Kid's Dentistry</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#international-patients">International Patients</a>
                        </li>
                    </ul>
                    <!-- <div class="mt-3">
                        <a href="tel:+919650440004" class="text-light text-decoration-none">+91-9650440004</a>
                    </div> -->
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'TopNav',
    mounted() {
        // Ensure Bootstrap JavaScript is loaded for the offcanvas functionality
        // You may need to import it in your main.js file or include it in your HTML
    }
}
</script>

<style scoped>
/* Add any additional custom styles here */
</style>