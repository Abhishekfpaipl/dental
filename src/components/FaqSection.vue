<template>
    <div class="container pb-5">
        <h1 class="text-center my-4">Questions To Ask Your Doctor</h1>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item" v-for="(question, index) in questions" :key="index">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#flush-collapseOne' + index" aria-expanded="false"
                        :aria-controls="'flush-collapseOne' + index">
                        {{ question.question }}
                    </button>
                </h2>
                <div :id="'flush-collapseOne' + index" class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">{{ question.answer }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "PriceSection",
    data() {
        return {
            questions: [
                {
                    "question": "What is a root canal treatment and why do I need it?",
                    "answer": "Root Canal Treatment is a procedure to repair and save a badly damaged or infected tooth instead of removing it. The term 'Root Canal' refers to the cleaning of the canal inside the tooth's root to relieve severe pain. The procedure involves removing the damaged or infected area of the tooth, known as the pulp, which contains nerves and blood vessels, cleaning and disinfecting it, then filling and sealing it with an artificial inert material."
                },
                {
                    "question": "What will happen during the RCT procedure?",
                    "answer": "The first step in the procedure is to take an X-ray to assess the shape of the root canals and check for any signs of infection in the surrounding bone. Local anaesthesia is then administered to numb the area near the tooth, ensuring you are relaxed and comfortable. An access hole is drilled into the tooth, and the pulp, along with bacteria, decayed nerve tissue, and debris, is removed using root canal files. Various irrigating solutions are used to flush out the debris. Once the tooth is thoroughly cleaned, it is sealed by filling the cleaned root canals with a rubber-like material and using adhesive cement to seal the canals completely. After the root canal is completed, the tooth will likely need a crown to protect it from future fractures."
                },
                {
                    "question": "Is root canal treatment painful?",
                    "answer": "When people hear they need a Root Canal Treatment (RCT), they often think of pain. However, the pain experienced is usually due to an infection in the tooth and not the RCT itself. RCT is performed to eliminate pain, and the procedure itself is generally painless. Our specialized Endodontists use local anaesthesia and modern techniques to ensure a comfortable, pain-free experience. We prioritize reducing patient anxiety and using the latest equipment to provide a smooth treatment."
                },
                {
                    "question": "Would extraction (pulling the tooth) be a better alternative?",
                    "answer": "Retaining your natural teeth through Root Canal Treatment is usually preferable to extraction. Replacing natural teeth with artificial ones can lead to additional issues. Root Canal Treatment, while initially more expensive, often proves cost-effective in the long run. After an extraction, the gap left by the lost tooth typically requires replacement with a dental bridge, implant, or partial denture, all of which can be more expensive than RCT. Additionally, gaps from missing teeth can cause difficulties in chewing and biting. RCT is generally less painful than extraction and has a high success rate, preserving the natural tooth with minimal time and discomfort."
                },
                {
                    "question": "How long does a root canal treatment take?",
                    "answer": "The duration of a root canal treatment varies depending on the complexity of the case and the tooth involved. On average, the procedure can take between 60 to 90 minutes per visit. In some cases, multiple visits may be required, especially if the infection is severe or if a crown is needed to complete the restoration."
                },
                {
                    "question": "What should I expect after a root canal treatment?",
                    "answer": "After a root canal treatment, you may experience some discomfort or mild pain in the treated tooth and surrounding area. This is usually temporary and can be managed with over-the-counter pain medications. It's important to follow your dentist’s post-treatment care instructions, which may include avoiding hard or sticky foods for a few days. The tooth will eventually be restored with a crown to protect it and restore its full function."
                },
                {
                    "question": "Can a root canal fail, and what should I do if it does?",
                    "answer": "While root canal treatments have a high success rate, there is a possibility of failure. Factors such as complex canal anatomy, missed canals, or new infections can contribute to treatment failure. If you experience persistent pain or symptoms after a root canal, it's important to contact your dentist. They can evaluate the situation and determine if additional treatment, such as retreatment or an apicoectomy, is needed to address the issue."
                },
                {
                    "question": "How much does root canal treatment cost?",
                    "answer": "The cost of root canal treatment varies depending on factors such as the tooth's location, the complexity of the procedure, and the dentist's fees. Generally, the cost is higher for molars compared to front teeth due to the complexity of the root system. Most dental insurance plans cover a portion of the cost, so it's a good idea to check with your insurance provider and discuss payment options with your dentist."
                }
            ]
        };
    },
};
</script>

<style scoped>
.form-control {
    box-shadow: none !important;
}
</style>
