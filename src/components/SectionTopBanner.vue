<template>
    <div class="banner-container">
        <img src="/img/banner1.jpeg" alt="Product Banner" class="banner-image">
        <div class="overlay">
            <h1 class="display-1 banner-title">{{ pageName }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageName: ''
        };
    },
    mounted() {
        // Set the page name when the component is first mounted
        this.updatePageName();
    },
    watch: {
        '$route': 'updatePageName',  // Watch for route changes and call the method
    },
    methods: {
        updatePageName() {
            // Extract page name from route path
            let pageName = this.$route.path.split('/').pop();
            this.pageName = pageName.replace(/-/g, ' ');  // Replace hyphens with spaces
        }
    }
};
</script>

<style scoped>
.banner-container {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.banner-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(126, 1, 128, 0.5);
    opacity: 90%;
    /* Opacity with transparency */
    display: flex;
    justify-content: center;
    align-items: center;
}

.banner-title { 
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    /* Improved readability */
}
</style>
