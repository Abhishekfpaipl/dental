<template>

    <div class="" style="background-image: url('/img/trade-bg.svg')">
        <div class="py-5" style="background-color: var(--bg-forth)">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 text-center justify-content-center align-items-center">
                    <div class="col">
                        <h2 class="d-flex justify-content-center">
                            <AutoCounter :data="22" />&nbsp;+
                        </h2>
                        <p class="fw-bold">Years of outcomes experience</p>
                    </div>
                    <div class="col">
                        <h2 class="d-flex justify-content-center">
                            <AutoCounter :data="10" />&nbsp;k +
                        </h2>
                        <p class="fw-bold">
                            Successful
                            Patients</p>
                    </div>
                    <div class="col">
                        <h2 class="d-flex justify-content-center">
                            <AutoCounter :data="10" />&nbsp;k +
                        </h2>
                        <p class="fw-bold">Dental Implants Patients Treated</p>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>
<script>
import AutoCounter from "@/components/AutoCounter.vue"
export default {
    components: {
        AutoCounter
    },
}
</script>