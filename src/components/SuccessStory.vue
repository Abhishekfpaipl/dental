<template>
    <div class="container">
        <!-- <h1 class="pt-3">Our Success Story</h1> -->
        <div class="row my-5 py-5">
            <div class="col-12 col-md-4 position-relative  d-flex align-items-center justify-content-center pt-5">
                <div class="card rounded-3">
                    <div class="image rounded-3">
                        <img href="#" :src="dentist.image" class="rounded-3" alt="Card image">
                    </div>
                    <div class="content">
                        <h3 class="mt-4 pt-2">{{ dentist.name }}</h3>
                        <p v-if="post" class="text-ellipsis2">{{ dentist.qualifications }}</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-8 mt-5 mt-md-0 text-start">
                <ul>
                    <li v-for="(point, index) in dentist.points" :key=index>{{ point }}</li>
                </ul> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dentist: {
            type: Object
        },
    },

};
</script>

<style scoped>
.card {
    position: relative;
    max-width: 300px;
    height: 215px;
    background-color: #fff;
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
}

.card:hover {
    height: 265px;
}

.image {
    position: relative;
    width: 230px;
    min-height: 230px;
    top: -40%;
    left: 0px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.image img {
    max-width: 100%;
    border-radius: 15px;
}

.content {
    position: relative;
    top: -140px;
    padding: 10px 15px;
    color: #111;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
}

.card:hover .content {
    margin-top: 30px;
    visibility: visible;
    opacity: 1;
    transition-delay: 0.2s;
}
</style>