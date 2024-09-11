<template>
    <div>
        <SectionTopBanner />
        <div class="text-start container mt-5">
            <h2 class="text-center mb-4">Privacy Policy</h2>

            <p>
                We understand that information about your health, particularly your dental care, is personal and
                confidential. This
                "Protected Health Information" ("PHI") includes any details that can identify your past, present, or
                future health status,
                the treatment you receive, or payment for the care provided. At <strong>[Dental Clinic Name]</strong>,
                we are committed to
                safeguarding your PHI and ensuring its proper use in accordance with applicable Indian laws and
                regulations.
            </p>

            <h4 class="mt-4">Use and Disclosure of PHI</h4>
            <p>We use and disclose your PHI only for treatment, payment, and operational purposes as detailed below:</p>

            <div class="accordion mb-4" id="privacyAccordion">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTreatment">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTreatment" aria-expanded="true" aria-controls="collapseTreatment">
                            Treatment
                        </button>
                    </h2>
                    <div id="collapseTreatment" class="accordion-collapse collapse show"
                        aria-labelledby="headingTreatment" data-bs-parent="#privacyAccordion">
                        <div class="accordion-body">
                            We may share your PHI with your insurance provider, our dental specialists, or other
                            healthcare professionals involved in your treatment.
                            For example, before performing a procedure, your dentist may consult with your insurance
                            provider to verify coverage.
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingPayment">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsePayment" aria-expanded="false" aria-controls="collapsePayment">
                            Payment
                        </button>
                    </h2>
                    <div id="collapsePayment" class="accordion-collapse collapse" aria-labelledby="headingPayment"
                        data-bs-parent="#privacyAccordion">
                        <div class="accordion-body">
                            Your PHI may be disclosed to check your insurance coverage, determine your benefits, or
                            secure payment for the services rendered.
                            For instance, your PHI is required when processing claims with your insurance provider.
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOperations">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOperations" aria-expanded="false"
                            aria-controls="collapseOperations">
                            Dental Care Operations
                        </button>
                    </h2>
                    <div id="collapseOperations" class="accordion-collapse collapse" aria-labelledby="headingOperations"
                        data-bs-parent="#privacyAccordion">
                        <div class="accordion-body">
                            Your PHI may be used for operational purposes such as quality assessments. For example, we
                            might review your records to evaluate the quality
                            of services you received. We may also be required to provide your PHI to sponsors of your
                            health plan, where permitted by law.
                        </div>
                    </div>
                </div>
            </div>

            <h4 class="mt-4">Other Uses of PHI</h4>
            <p>
                In some cases, we may disclose your PHI without your explicit consent, such as for public health
                activities, audits, research, or emergencies.
                We may also provide your information when required by law, for example, for legal proceedings or
                investigations. In all other circumstances,
                we will seek your written consent before using or disclosing your PHI. You retain the right to revoke
                this consent at any time, except where the
                information has already been used for treatment, payment, or healthcare operations.
            </p>

            <h4 class="mt-4">Policy Changes</h4>
            <p>
                We may revise our privacy policies from time to time. If we make any significant changes, we will update
                our notice and notify you accordingly.
                You can always request a copy of the current policy from our office.
            </p>

            <h4 class="mt-4">Your Rights</h4>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Access to PHI: You have the right to access or request a copy of your PHI.
                </li>
                <li class="list-group-item">Amendments: If you believe there is an error in your records, you may
                    request corrections or additions.</li>
                <li class="list-group-item">Disclosure List: You can request a list of disclosures made without your
                    authorization, except for treatment, payment, or operations.</li>
                <li class="list-group-item">Restrictions: You can request restrictions on how your PHI is used or
                    disclosed for treatment, payment, or operations.</li>
                <li class="list-group-item">Confidential Communications: You may request alternative communication
                    methods if needed to protect your privacy.</li>
            </ul>

            <p class="mt-4">For any questions or concerns about this policy, feel free to contact us at <strong>[Contact
                    Information]</strong>.</p>
        </div>
    </div>
</template>

<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';

export default {
    name: 'PrivacyPolicy',
    components: {
        SectionTopBanner
    },
}
</script>