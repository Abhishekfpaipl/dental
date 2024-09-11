<template>
    <div>
        <SectionTopBanner />
        <div class="container my-5">
            <div class="row">
                <div class="col-md-8">
                    <p class="text-start">
                        Many people assume that getting a root canal is stressful or painful—but that’s a misconception!
                        In
                        reality, our patients are often surprised by how comfortable and seamless the procedure is. Root
                        canal
                        treatment is one of the most effective solutions for stopping painful decay, treating infection,
                        and
                        saving a tooth from extraction.
                    </p>
                    <p class="text-start fw-bold">
                        What is a Root Canal Treatment?
                    </p>
                    <p class="text-start">
                        Root canal treatment, also known as endodontic therapy, is designed to eliminate bacteria from
                        the
                        infected
                        root canal, prevent future infections, and save the natural tooth. This restorative procedure
                        involves
                        removing the inflamed or infected pulp inside the tooth, thoroughly cleaning and disinfecting
                        the
                        root
                        canals, and then sealing the space with a rubber-like material. In many cases, a crown or cap is
                        placed
                        on
                        the tooth afterward to strengthen and protect it.
                    </p>

                    <p class="text-start fw-bold">
                        Comfortable, Advanced Treatment
                    </p>
                    <p class="text-start">

                        Thanks to advancements in modern digital technology and anesthesia, root canal treatments are no
                        longer
                        something to dread. What once was considered painful is now a painless, efficient, and
                        comfortable
                        procedure. At The Dental Roots, we use state-of-the-art equipment and techniques to ensure that
                        your
                        treatment is as smooth and pain-free as possible.
                    </p>

                    <p class="text-start fw-bold">
                        Why Choose Root Canal Treatment?
                    </p>
                    <p class="text-start">

                        Root canal treatment is the best option to preserve your natural tooth and avoid more invasive
                        and
                        costly
                        procedures such as tooth extraction, bridges, or implants. With proper care, a tooth that has
                        undergone
                        a
                        root canal can last a lifetime, giving it a high success rate. It’s also significantly more
                        affordable
                        than
                        replacing a lost tooth.

                        However, maintaining good oral hygiene is essential. Even after a root canal, decay can still
                        occur,
                        so
                        regular dental check-ups and cleanings are necessary to ensure long-term health and function.
                    </p>

                    <p class="text-start fw-bold">
                        Why Choose The Dental Roots?
                    </p>
                    <p class="text-start">

                        At The Dental Roots, we’re proud to be the only dental clinic in Delhi NCR with more than FIVE
                        highly
                        qualified and experienced Endodontists. With over 10 years of expertise and modern technology,
                        we
                        offer
                        painless and highly effective root canal treatments that not only relieve tooth pain but also
                        save
                        your
                        natural tooth. Whether you’re in New Delhi or Gurgaon, our dedicated team ensures a comfortable
                        experience
                        from start to finish.

                        Don’t let fear or outdated information keep you from taking care of your dental health. Schedule
                        your
                        root
                        canal with The Dental Roots and enjoy long-lasting relief and restored confidence in your smile!
                    </p>
                </div>
                <div class="col-md-4 bg-secondary">
                    <p class="text-start py-3 fs-4">Book An Appointment</p>
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <input type="text" class="form-control " placeholder="Your Full Name" v-model="fullName">
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Your Email Address" v-model="email">
                        </div>
                        <div class="mb-3">
                            <input type="number" class="form-control" placeholder="Your phone Number" v-model="number">
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="4" placeholder="Write Message"
                                v-model="message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-warning px-4 py-2">Book Now</button>
                    </form>
                </div>
            </div>
        </div>
        <ImageOverlay imageSrc="/img/banner.jpg" title="Laser Root Canal Treatment" :points="points"
            bookBtnText="Book an appointment" callBtnText="Call us: +91-965 044 0004" phoneNumber="+919650440004" />
            <FaqSection/>
    </div>
</template>
<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';
import ImageOverlay from '@/components/ImageOverlay.vue';
import FaqSection from '@/components/FaqSection.vue';
export default {
    components: {
        SectionTopBanner,
        ImageOverlay,
        FaqSection,
    },
    data() {
        return {
            fullName: '',
            email: '',
            number: '',
            message: '',
            points: [
                'Laser root canal treatment uses a parallel beam of intense light to clean the root canals.',
                'Even after cleaning and shaping the canals, some bacteria can remain. The laser beam kills the remaining bacteria and makes the canal sterile.',
                'To ensure 100% clinical success, patients are thoroughly examined and educated for post-operative care.',
            ]
        }
    },
    methods: {
        submitForm() {
            const phoneNumber = '919711256073';
            const message = `Name: ${this.fullName}%0A 
            number: ${this.number}%0A
            Email: ${this.email}%0A
            Note: ${this.message}%0A `;

            const url = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(url, '_blank');
        }
    }
}
</script>
<style lang="">

</style>