<template>
  <SectionTopBanner />
  <div class="container">
    <ul class="nav nav-pills justify-content-start align-items-center" id="pills-tab" role="tablist">
      <div class="d-flex overflow-x-scroll gap-3 my-3 p-2 px-3 rounded" id="scroll">
        <li class="nav-item   rounded" role="presentation" v-for="(link, index) in links" :key="index"
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
      <div class="tab-pane fade" :class="{ 'show active': index === activeTabIndex }" v-for="(link, index) in links"
        :key="index" :id="'content-' + index" role="tabpanel" :aria-labelledby="'tab-' + index" tabindex="0">
        <div class="row">
          <GallerySection :images="link.images" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';
import GallerySection from '@/components/GallerySection.vue';

export default {
  components: {
    SectionTopBanner,
    GallerySection,
  },
  data() {
    return {
      activeTabIndex: 0,
      links: [
        {
          name: "Name 1",
          images: [
            "/img/gallery/1.jpeg",
            "/img/gallery/2.jpeg",
            "/img/gallery/3.jpeg",
            "/img/gallery/4.jpeg",
            "/img/gallery/5.jpeg",
            "/img/gallery/6.jpeg",
            "/img/gallery/7.jpeg",
            "/img/gallery/8.jpeg",
          ],
        },
        {
          name: "Name 2",
          images: [
            "/img/gallery/9.jpeg",
            "/img/gallery/10.jpeg",
            "/img/gallery/11.jpeg",
            "/img/gallery/12.jpeg",
            "/img/gallery/13.jpeg",
            "/img/gallery/14.jpeg",
            "/img/gallery/15.jpeg",
            "/img/gallery/16.jpeg",
          ],
        },
        {
          name: "Name 3",
          images: [
            "/img/gallery/17.jpeg",
            "/img/gallery/18.jpeg",
            "/img/gallery/19.jpeg",
            "/img/gallery/20.jpeg",
            "/img/gallery/21.jpeg",
            "/img/gallery/22.jpeg",
            "/img/gallery/23.jpeg",
            "/img/gallery/24.jpeg",
          ],
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