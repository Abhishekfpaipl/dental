<template>
    <div>
        <SectionTopBanner />
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
                <div class="col my-5" v-for="(card, index) in cards" :key="index">
                    <div class="card-container bg-light border position-relative rounded p-2">
                        <div class="card border-0">
                            <div class="card-header d-flex justify-content-center algin-items-center">
                                <div class="rounded-circle overflow-hidden border border-white border-2 p-1"
                                    style="width:60px; height:60px; margin-top:-40px;">
                                    <img :src="card.image" alt="Profile" class="rounded-circle"
                                        style="width: 100%; height: 100%;object-fit: cover;" />
                                </div>
                            </div>
                            <div class="card-body bg-white py-2 px-1">
                                <p class="name smaller mb-0 mt-0 text-ellipsis1">{{ card.name }}</p>

                                <p class="text-dark smaller mb-0 text-ellipsis5 py-2">{{ card.review }} Lorem
                                    ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto iste
                                    voluptatibus error tempore qui dolores possimus, nam fugit repudiandae?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';

export default {
    components: {
        SectionTopBanner,
    },
    data() {
        return {
            cards: [
                {
                    image: 'img/members/13.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'Prashant Malik',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/14.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'FA WIZARD PRIVATE LIMITED',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/15.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'Prashant Malik',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/16.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'FA WIZARD PRIVATE LIMITED',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/17.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'Prashant Malik',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/18.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'FA WIZARD PRIVATE LIMITED',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/19.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'FA WIZARD PRIVATE LIMITED',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
            ]
        }
    }
}
</script>
<style >

.card-header {
    background: linear-gradient(180deg, rgba(126, 1, 128, 1) 0%, rgba(255, 255, 255, 1) 95%);
    padding: 10px;
    text-align: center;
    border-bottom: 0px !important;
}

</style>