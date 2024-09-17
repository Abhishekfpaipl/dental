<template>
  <SectionTopBanner />
  <div class="container">
    <ul class="nav nav-pills justify-content-start align-items-center" id="pills-tab" role="tablist">
      <div class="d-flex overflow-x-scroll gap-3 my-3 p-2 px-3 rounded" id="scroll">
        <li class="nav-item border rounded" role="presentation" v-for="(link, index) in links" :key="index">
          <button class="nav-link" style="white-space: nowrap; color: var(--bg-primary);"
            :class="{ 'active': index === activeTabIndex }" :id="'tab-' + index" data-bs-toggle="pill"
            :data-bs-target="'#content-' + index" type="button" role="tab" :aria-controls="'content-' + index"
            :aria-selected="index === activeTabIndex" @click="onTabClick(index)">{{
              link.name
            }}</button>
        </li>
      </div>
    </ul>

    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade" :class="{ 'show active': index === activeTabIndex }" v-for="(link, index) in links"
        :key="index" :id="'content-' + index" role="tabpanel" :aria-labelledby="'tab-' + index" tabindex="0">
        <div class="row">
          <div class="col-md-4" v-for="(item, index) in galleryItems" :key="index">
            <div class="card gallery-card">
              <img :src="item.image" class="card-img-top" alt="Gallery image">
              <div class="card-img-overlay" v-if="hoverItem === index">
                <h5 class="card-title">{{ item.title }}</h5>
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
      activeTabIndex: 0,
      links: [
        {
          name: "Name 1"
        },
        {
          name: "Name 2"
        },
        {
          name: "Name 3"
        },
      ],
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
    };
  },
  methods: {
    onTabClick(index) {
      this.activeTabIndex = index;
      this.scrollTabIntoView(index);
    },
    scrollTabIntoView(index) {
      const tabElement = document.getElementById(`tab-${index}`);
      if (tabElement) {
        tabElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }
}
</script>

<style>
.nav-link {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link.active {
  background-color: var(--bg-primary) !important;
  color: white !important;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}
</style>