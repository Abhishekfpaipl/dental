<template>
    <div>
        <SectionTopBanner />
        <div class="container text-start py-5 " style="margin-top:-40px;">

            <section class="my-5">
                <h2 class="h4">Introduction</h2>
                <p>
                    Welcome to Dental Solutions. By accessing our website or booking any dental services, you agree
                    to abide by the following terms and conditions. These terms apply to all patients, visitors, and
                    users of our website or dental services. Please read these terms carefully before availing any
                    service. If you disagree with any part of these terms, please do not proceed with using our
                    services.
                </p>
            </section>

            <section class="mb-5">
                <h2 class="h4">Appointments and Cancellations</h2>
                <ul class="list-group">
                    <li class="list-group-item">
                        Appointments can be scheduled through our website, by phone, or in person at our clinic.
                    </li>
                    <li class="list-group-item">
                        You must provide at least 24 hours' notice for cancellations or rescheduling. Failure to do so
                        may result in a cancellation fee.
                    </li>
                    <li class="list-group-item">
                        We reserve the right to cancel or reschedule your appointment due to unforeseen circumstances,
                        such as dentist unavailability or emergencies.
                    </li>
                </ul>
            </section>

            <section class="mb-5">
                <h2 class="h4">Dental Treatment and Procedures</h2>
                <ul class="list-group">
                    <li class="list-group-item">
                        All dental procedures are performed by qualified professionals. You are responsible for
                        providing accurate health information before any treatment.
                    </li>
                    <li class="list-group-item">
                        Treatment outcomes may vary from patient to patient. While we strive to provide the best
                        possible care, we cannot guarantee specific results.
                    </li>
                    <li class="list-group-item">
                        It is your responsibility to follow the post-treatment care instructions provided by our dental
                        team to ensure proper recovery and results.
                    </li>
                </ul>
            </section>

            <section class="mb-5">
                <h2 class="h4">Payments and Insurance</h2>
                <ul class="list-group">
                    <li class="list-group-item">
                        Payment for services is required at the time of treatment unless prior arrangements have been
                        made. We accept cash, credit cards, and online payments.
                    </li>
                    <li class="list-group-item">
                        If you have dental insurance, we will assist in processing claims. However, any balance that
                        your insurance does not cover must be paid by you.
                    </li>
                    <li class="list-group-item">
                        In the event of non-payment, we reserve the right to refer unpaid accounts to a collections
                        agency.
                    </li>
                </ul>
            </section>

            <section class="mb-5">
                <h2 class="h4">Liability</h2>
                <p>
                    While we take utmost care in providing high-quality dental services, Dental Solutions is not
                    liable for any adverse effects or complications arising from the treatment, unless caused by proven
                    negligence. You are responsible for following all pre and post-treatment instructions provided by
                    our team.
                </p>
            </section>

            <section class="mb-5">
                <h2 class="h4">Website Usage</h2>
                <ul class="list-group">
                    <li class="list-group-item">
                        All content on our website, including images, text, and videos, is the property of Dental
                        Solutions and is protected by copyright laws.
                    </li>
                    <li class="list-group-item">
                        You may not use any content from our website for commercial purposes without prior written
                        consent.
                    </li>
                    <li class="list-group-item">
                        We do not guarantee the accuracy of information provided on our website, and we reserve the
                        right to update or modify the website's content at any time without notice.
                    </li>
                </ul>
            </section>

            <section class="mb-5">
                <h2 class="h4">Governing Law</h2>
                <p>
                    These terms and conditions are governed by and construed in accordance with the laws of India. Any
                    disputes arising from these terms or your use of our services will be subject to the jurisdiction of
                    the courts in Delhi, India.
                </p>
            </section>

            <section class="text-center">
                <p class="font-italic">
                    If you have any questions about these terms, please contact us at
                    enquiry@dentalsolutions.com.
                </p>
            </section>
        </div>
    </div>
</template>

<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';

export default {
    name: "TermOfUse",
    components: {
        SectionTopBanner
    }
};
</script>

<style lang="scss" scoped></style>