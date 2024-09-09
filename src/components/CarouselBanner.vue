<template>
  <div id="CGLCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button v-for="(slide, index) in slides" :key="'indicator-' + index" type="button" data-bs-target="#CGLCarousel"
        :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-current="index === 0"
        :aria-label="'Slide ' + (index + 1)">
      </button>
    </div>
    <div class="carousel-inner">
      <div v-for="(slide, index) in slides" :key="'slide-' + index" class="carousel-item"
        :class="{ active: index === 0 }">
        <img :src="slide.image" class="d-block w-100" alt="dental">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#CGLCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#CGLCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

  </div>

</template>

<script>

export default {
  data() {
    return {
      slides: [
        {
          image: 'https://www.thedentalroots.com/assets/images/home/award-w4.jpg',
          alt: 'First slide',
          title: 'expirence the thrill of peak performance',
          description: 'The 7100 series offers a hassle-free high performance solution that protects your bike and guarantees smiles for miles!',
          button: 'discover',
        },
        {
          image: 'https://www.thedentalroots.com/assets/images/home/award-w1.jpg',
          alt: 'Second slide',
          title: 'Second slide label',
          description: 'Some representative placeholder content for the second slide.'
        },
        {
          image: 'https://www.thedentalroots.com/assets/images/home/award-w2.jpg',
          alt: 'Third slide',
          title: 'Third slide label',
          description: 'Some representative placeholder content for the third slide.'
        }
      ], 
    };
  }
};
</script>

<style scoped>
.overlay {
  background-color: var(--bg-third);
  opacity: 90%;
}

.carousel-item {
  height: 600px;
}

.carousel-indicators {
  top: 0 !important;
}

.carousel-item img {
  object-fit: cover;
  height: 100%;
}

.carousel-caption {
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
}

.card-img {
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease-in-out;
}

.card:hover .card-img {
  transform: scale(1.05);
}
</style>