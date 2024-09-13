<template>
  <SectionTopBanner />
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="(item, index) in galleryItems" :key="index">
        <div class="card gallery-card" @mouseover="hoverItem = index" @mouseleave="hoverItem = null"
          @click="openOffcanvas(index)">
          <img :src="item.image" class="card-img-top" alt="Gallery image">
          <div class="card-img-overlay" v-if="hoverItem === index">
            <h5 class="card-title">{{ item.title }}</h5>
          </div>
        </div>
      </div>
    </div>

    <!-- Offcanvas -->
    <div class="offcanvas offcanvas-bottom h-100" tabindex="-1" id="offcanvasGallery" aria-labelledby="offcanvasGalleryLabel">
      <!-- <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasGalleryLabel">{{ currentTitle }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div> -->
      <div class="offcanvas-body">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item" :class="{ active: index === 0 }"
              v-for="(carouselItem, index) in currentCarouselImages" :key="index">
              <img :src="carouselItem" class="w-100" alt="carousel image">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
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
      hoverItem: null,
      galleryItems: [
        {
          title: "Sushant Lok Gurgaon",
          image: "img/gallery/1.jpeg",
          carouselImages: ["/img/gallery/2.jpeg", "/img/gallery/3.jpeg"],
        },
        {
          title: "Panchsheel Park Delhi",
          image: "/img/gallery/4.jpeg",
          carouselImages: ["/img/gallery/5.jpg", "/img/gallery/6.jpeg"],
        },
        {
          title: "Our Team",
          image: "/img/gallery/7.jpeg",
          carouselImages: ["/img/gallery/8.jpeg", "/img/gallery/9.jpeg"],
        },
      ],
      currentTitle: '',
      currentCarouselImages: []
    };
  },
  methods: {
    openOffcanvas(index) {
      this.currentTitle = this.galleryItems[index].title;
      this.currentCarouselImages = this.galleryItems[index].carouselImages;
      const offcanvas = new window.bootstrap.Offcanvas(document.getElementById('offcanvasGallery'));
      offcanvas.show();
    }
  }
}
</script>

<style>
.gallery-card {
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-card:hover {
  transform: scale(1.05);
}

.card-img-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-img-overlay h5 {
  margin: 0;
}

.gallery-card:hover .card-img-overlay {
  opacity: 1;
}
</style>