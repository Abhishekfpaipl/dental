<template>
    <div class="container-fluid video-section">
        <div class="video-wrapper position-relative">
            <iframe class="video-iframe" :src="videoUrl" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <div class="video-overlay d-flex justify-content-center align-items-end">
                <div class="text-center text-white overlay-content">
                    <h2 class="video-title">{{ title }}</h2>
                    <p>{{ description }}</p>
                    <button class="btn btn-danger rounded-pill">Book an aapointment</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        videoUrl: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            default: "Our Video",
        },
        description: {
            type: String,
            default: "Watch our introduction video.",
        },
    },
};
</script>

<style scoped>
.video-section {
    background-color: #f8f9fa;
}

.video-wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
}

.video-iframe {
    width: 100%;
    height: 100%;
}

.video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    /* Semi-transparent black */
}

.overlay-content {
    padding: 20px;
}

.video-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

p {
    font-size: 1.2rem;
}
</style>