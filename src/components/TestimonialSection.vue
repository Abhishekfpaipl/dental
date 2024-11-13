<template>
    <div class="my-5 text-dark">
        <div class="d-flex justify-content-center align-items-center position-relative">
            <h1 class="text-center mb-0">Testimonial</h1>
            <router-link to="/testimonial" class="position-absolute end-0 text-decoration-none pe-md-5 pe-1" style="color: var(--bg-primary);">
                See All <i class="bi bi-arrow-right"></i>
            </router-link>
        </div>


        <article :class="['wrapper', { 'wrapper--vertical': isVertical }]" class="pb-5">
            <div class="marquee" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group mt-5" :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container bg-light border position-relative rounded p-2">
                            <div class="card border-0">
                                <div class="card-header d-flex justify-content-center algin-items-center">
                                    <div class="rounded-circle overflow-hidden border border-white border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                </div>
                                <div class="card-body bg-white py-2 px-1" style="max-width: 250px;">
                                    <p class="name smaller mb-0 mt-0 text-ellipsis1">{{ card.name }}</p>
                                    <p class="text-dark smaller mb-0 text-ellipsis5 py-2">{{ card.review }} Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto iste
                                        voluptatibus error tempore qui dolores possimus, nam fugit repudiandae?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group mt-5"
                    :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container bg-light border position-relative rounded p-2">
                            <div class="card border-0">
                                <div class="card-header d-flex justify-content-center algin-items-center">
                                    <div class="rounded-circle overflow-hidden border border-white border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                </div>
                                <div class="card-body bg-white py-2 px-1" style="max-width: 250px;">
                                    <p class="name smaller mb-0 mt-0 text-ellipsis1">{{ card.name }}</p>
                                    <!-- <p class="mb-0 smaller mx-2 pb-2"
                                        style="border-bottom: 2px solid black !important;">Fameset <i
                                            class="bi bi-star-fill text-warning"></i> 8.5</p> -->
                                    <p class="text-dark smaller mb-0 text-ellipsis5 py-2">{{ card.review }} Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto iste
                                        voluptatibus error tempore qui dolores possimus, nam fugit repudiandae?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="marquee marquee--reverse" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group mt-5" :style="{ 'animation-direction': isReverse ? 'normal' : 'reverse' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container bg-light border position-relative rounded p-2">
                            <div class="card border-0">
                                <div class="card-header d-flex justify-content-center algin-items-center">
                                    <div class="rounded-circle overflow-hidden border border-white border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                </div>
                                <div class="card-body bg-white py-2 px-1" style="max-width: 250px;">
                                    <p class="name smaller mb-0 mt-0 text-ellipsis1">{{ card.name }}</p>
                                    <!-- <p class="mb-0 smaller mx-2 pb-2"
                                        style="border-bottom: 2px solid black !important;">Fameset <i
                                            class="bi bi-star-fill text-warning"></i> 8.5</p> -->
                                    <p class="text-dark smaller mb-0 text-ellipsis5 py-2">{{ card.review }} Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto iste
                                        voluptatibus error tempore qui dolores possimus, nam fugit repudiandae?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group mt-5"
                    :style="{ 'animation-direction': isReverse ? 'normal' : 'reverse' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container bg-light border position-relative rounded p-2">
                            <div class="card border-0">
                                <div class="card-header d-flex justify-content-center algin-items-center">
                                    <div class="rounded-circle overflow-hidden border border-white border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                </div>
                                <div class="card-body bg-white py-2 px-1" style="max-width: 250px;">
                                    <p class="name smaller mb-0 mt-0 text-ellipsis1">{{ card.name }}</p>
                                    <!-- <p class="mb-0 smaller mx-2 pb-2"
                                        style="border-bottom: 2px solid black !important;">Fameset <i
                                            class="bi bi-star-fill text-warning"></i> 8.5</p> -->
                                    <p class="text-dark smaller mb-0 text-ellipsis5 py-2">{{ card.review }} Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto iste
                                        voluptatibus error tempore qui dolores possimus, nam fugit repudiandae?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="marquee" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group mt-5" :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container bg-light border position-relative rounded p-2">
                            <div class="card border-0">
                                <div class="card-header d-flex justify-content-center algin-items-center">
                                    <div class="rounded-circle overflow-hidden border border-white border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                </div>
                                <div class="card-body bg-white py-2 px-1" style="max-width: 250px;">
                                    <p class="name smaller mb-0 mt-0 text-ellipsis1">{{ card.name }}</p>
                                    <!-- <p class="mb-0 smaller mx-2 pb-2"
                                        style="border-bottom: 2px solid black !important;">Fameset <i
                                            class="bi bi-star-fill text-warning"></i> 8.5</p> -->
                                    <p class="text-dark smaller mb-0 text-ellipsis5 py-2">{{ card.review }} Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto iste
                                        voluptatibus error tempore qui dolores possimus, nam fugit repudiandae?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group mt-5"
                    :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container bg-light border position-relative rounded p-2">
                            <div class="card border-0">
                                <div class="card-header d-flex justify-content-center algin-items-center">
                                    <div class="rounded-circle overflow-hidden border border-white border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                </div>
                                <div class="card-body bg-white py-2 px-1" style="max-width: 250px;">
                                    <p class="name smaller mb-0 mt-0 text-ellipsis1">{{ card.name }}</p>
                                    <!-- <p class="mb-0 smaller mx-2 pb-2"
                                        style="border-bottom: 2px solid black !important;">Fameset <i
                                            class="bi bi-star-fill text-warning"></i> 8.5</p> -->
                                    <p class="text-dark smaller mb-0 text-ellipsis5 py-2">{{ card.review }} Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto iste
                                        voluptatibus error tempore qui dolores possimus, nam fugit repudiandae?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>

export default {
    name: "AutoScrolling",
    props: {
        brandColorOne: {
            type: String,
            default: '#000'
        }
    },
    data() {
        return {
            isVertical: false,
            isReverse: false,
            links: [
                {
                    id: 1,
                    name: 'Amazon',
                    image: '/img/members/1.png'
                },
                {
                    id: 2,
                    name: 'Apple',
                    image: "/img/members/2.webp"
                },
                {
                    id: 3,
                    name: 'Aws',
                    image: "/img/members/3.png"
                },
                {
                    id: 4,
                    name: 'Facebook',
                    image: "/img/members/4.png"
                },
                {
                    id: 5,
                    name: 'Google',
                    image: "/img/members/5.jpg"
                },
                {
                    id: 6,
                    name: 'Meta',
                    image: "/img/members/6.webp"
                },
                {
                    id: 7,
                    name: 'Microsoft',
                    image: "/img/members/7.jpeg"
                },
                {
                    id: 11,
                    name: 'Vodafone',
                    image: "/img/members/8.png"
                },
            ],
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
        };
    },
    methods: {
        toggleDirection() {
            this.isVertical = !this.isVertical;
            this.isReverse = !this.isReverse;
        },
    },
};
</script>

<style>
:root {
    --color-text: navy;
    --color-bg: papayawhip;
    --color-bg-accent: #ecdcc0;
    --size: clamp(10rem, 1rem + 40vmin, 30rem);
    --gap: calc(var(--size) / 8);
    --duration: 20s;
    --scroll-start: 0;
    --scroll-end: calc(-100% - var(--gap));
}

.marquee {
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: var(--gap);
    mask-image: linear-gradient(var(--mask-direction, to right),
            hsl(0 0% 0% / 0),
            hsl(0 0% 0% / 1) 20%,
            hsl(0 0% 0% / 1) 80%,
            hsl(0 0% 0% / 0));
}

.marquee__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: var(--gap);
    min-width: 100%;
    animation: scroll-x var(--duration) linear infinite;
}

@media (prefers-reduced-motion: reduce) {
    .marquee__group {
        animation-play-state: paused;
    }
}

.marquee--vertical {
    --mask-direction: to bottom;
}

.marquee--vertical,
.marquee--vertical .marquee__group {
    flex-direction: column;
}

.marquee--vertical .marquee__group {
    animation-name: scroll-y;
}

.marquee--reverse .marquee__group {
    animation-direction: reverse;
    animation-delay: -3s;
}

@keyframes scroll-x {
    from {
        transform: translateX(var(--scroll-start));
    }

    to {
        transform: translateX(var(--scroll-end));
    }
}

@keyframes scroll-y {
    from {
        transform: translateY(var(--scroll-start));
    }

    to {
        transform: translateY(var(--scroll-end));
    }
}

/* Parent wrapper */
.wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    margin: auto;
    max-width: 100vw;
}

.wrapper--vertical {
    flex-direction: row;
    height: 100vh;
}


@keyframes fade {
    to {
        opacity: 0;
        visibility: hidden;
    }
}


.card-header {
    background: linear-gradient(180deg, rgba(126, 1, 128, 1) 0%, rgba(255, 255, 255, 1) 95%);
    padding: 10px;
    text-align: center;
    border-bottom: 0px !important;
}

.card-body {
    padding: 20px;
    text-align: center;
}

.loan-type {
    color: #ff6b6b;
    margin-bottom: 10px;
}


.amount {
    font-weight: bold;
    color: #4ecdc4;
}


.name {
    margin-top: 10px;
    font-weight: bold;
}

.rating {
    color: gold;
}

.star::before {
    content: "\2605";
}

.card-container {
    min-width: 15rem !important
}

/* Quotation marks */
.card-container::before {
    content: '“';
    position: absolute;
    font-size: 2em;
    /* color: #4ecdc4; */
    color: white !important;
    font-family: sans-serif;
}

.card-container::after {
    content: '”';
    position: absolute;
    font-size: 2em;
    color: white !important;
    font-family: sans-serif;
}

.card-container::before {
    top: 0;
    left: -5px;
}

.card-container::after {
    bottom: -20px;
    right: -5px;
}
</style>