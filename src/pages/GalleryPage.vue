<template>
  <SectionTopBanner />
  <!-- <div class="container">
    <ul class="nav nav-pills justify-content-start align-items-center" id="pills-tab" role="tablist">
      <div class="d-flex overflow-x-scroll gap-3 my-3 p-2 px-3 rounded" id="scroll">
        <li class="nav-item   rounded" role="presentation" v-for="(link, index) in gallery" :key="index"
          style="border: 1px solid var(--bg-primary)">
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
      <div class="tab-pane fade" :class="{ 'show active': index === activeTabIndex }" v-for="(link, index) in gallery"
        :key="index" :id="'content-' + index" role="tabpanel" :aria-labelledby="'tab-' + index" tabindex="0">
        <div class="row">
          <GallerySection :images="link.images" />
        </div>
      </div>
    </div>
  </div> -->
  <div class="container">
    <GalleryLinks />
    <GallerySection :images="images" />
  </div>
  <TestComp />
</template>

<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';
import GallerySection from '@/components/GallerySection.vue';
import TestComp from '@/components/TestComp.vue';
import GalleryLinks from '@/components/GalleryLinks.vue';

export default {
  components: {
    SectionTopBanner,
    GallerySection,
    TestComp,
    GalleryLinks
  },
  data() {
    return {
      activeTabIndex: 0,
      images: [
        "/img/officeImages/1.jpeg",
        "/img/officeImages/2.jpeg",
        "/img/officeImages/3.jpeg",
        "/img/officeImages/4.jpeg",
        "/img/officeImages/5.jpeg",
        "/img/officeImages/6.jpeg",
        "/img/officeImages/7.jpeg",
        "/img/officeImages/8.jpeg",
        "/img/officeImages/9.jpeg",
        "/img/officeImages/10.jpeg",
        "/img/officeImages/11.jpeg",
        "/img/officeImages/12.jpeg",
        "/img/officeImages/13.jpeg",
        "/img/officeImages/14.jpeg",
      ],
    };
  },
  computed: {
    gallery() {
      return this.$store.getters['gallery/getGalleryImages']
    }
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

<style scoped>
.nav-link {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link.active {
  background-color: var(--bg-primary) !important;
  color: white !important;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}
</style>