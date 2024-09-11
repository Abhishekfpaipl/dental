<template>
    <div class="image-overlay-container">
        <img :src="imageSrc" alt="Overlay Image" class="image-overlay-image" />
        <div class="image-overlay-text">
            <h2>{{ title }}</h2>
            <ul>
                <li v-for="(point, index) in points" :key="index">{{ point }}</li>
            </ul>
            <div class="action-buttons">
                <button class="btn btn-outline-light" @click="bookAppointment">{{ bookBtnText }}</button>
                <a :href="`tel:${phoneNumber}`" class="btn btn-outline-light">{{ callBtnText }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        points: {
            type: Array,
            required: true,
        },
        bookBtnText: {
            type: String,
            default: "Book an appointment",
        },
        callBtnText: {
            type: String,
            default: "Call us",
        },
        phoneNumber: {
            type: String,
            required: true,
        },
    },
    methods: {
        bookAppointment() {
            // Add custom booking logic here
            alert("Booking appointment...");
        },
    },
};
</script>

<style scoped>
.image-overlay-container {
    position: relative;
    display: inline-block;
    text-align: left;
    color: white;
}

.image-overlay-image {
    width: 100%;
    height: auto;
    display: block;
    filter: brightness(70%);
}

.image-overlay-text {
    position: absolute;
    top: 20%;
    left: 10%;
    transform: translate(-10%, -20%);
    color: white;
    width: 80%;
}

.image-overlay-text h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.image-overlay-text ul {
    list-style: none;
    padding-left: 0;
}

.image-overlay-text ul li {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.action-buttons {
    margin-top: 1rem;
}

.action-buttons .btn {
    margin-right: 1rem;
}
</style>