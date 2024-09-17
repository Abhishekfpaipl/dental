<template>
    <div class="container my-5 py-5">
        <h2 class="text-center">Dental Implants</h2>
        <p class="text-center mb-3">India's Premier Dental Clinic for Reliable and Advanced Implant Solutions</p>

        <div class="row align-items-center" style="background-color: var(--bg-primary);">
            <div class="col-md-6 text-center px-0">
                <img src="/img/implant.jpg" alt="Dental Implant" class="img-fluid w-100" />
            </div>
            <div class="col-md-6 text-white my-3 my-md-0">
                <p class="text-start">
                    A dental implant is an artificial tooth root, typically made of titanium, which integrates
                    seamlessly with the bone, allowing it to be accepted naturally by the body. This advanced solution
                    is placed into the jawbone to support a replacement tooth or bridge, restoring both the appearance
                    and functionality of your smile. Dental implants look, feel, and function like natural teeth,
                    offering a long-lasting and realistic solution for those seeking to regain confidence in their oral
                    health. In India, dental implants have become increasingly popular due to their durability and
                    ability to blend with natural teeth, making them an excellent choice for restoring smiles and
                    improving overall dental well-being.
                </p>
                <div class="d-flex justify-content-center align-items-center">
                    <router-link to="/services" class="btn btn-light mt-3 rounded-pill">View All Services</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DentalImplant",
    data() {
        return {
            links: [
                { name: " SINGLE TOOTH IMPLANT" },
                { name: "ALL-ON-4 IMPLANT" },
                { name: " ALL-ON-6/8 IMPLANT" },
            ]
        }
    }
};
</script>

<style scoped></style>