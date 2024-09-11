<template>
  <div>
    <div class="container py-3">
      <h1 class="px-2 text-center mb-0">The Dental Roots team</h1>
      <p class="px-2 text-center mb-5">Our award-winning dental team are committed to providing exceptional dental care for all patients</p>
      <div class="position-relative">
        <div class="d-flex gap-3 overflow-x-scroll" ref="techScrollContainer" id="scroll">
          <div class="" v-for="(team, index) in teamMembers" :key="index">
            <div class="card" style="min-width: 18rem;">
              <div class="card-body p-0">
                <img :src="team.image" class="card-img-top"
                  style="width: 100%;max-height: 300px;object-fit: cover;object-position: top;" alt="doctor's image">
                <div class="text-center card-title border-bottom py-2 bg-light">
                  <h5 class="lh-1 mb-0">{{ team.name }}</h5>
                  <p class="small mb-0"  style="min-height: 45px;">{{ team.speciality }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-circle border d-flex justify-content-center align-items-center position-absolute bg-light"
          @click="scrollLeft($refs.techScrollContainer)" style="width: 40px; height:40px ;top: 40%; left: -2%">
          <i class="bi bi-chevron-left"></i>
        </div>
        <div class="rounded-circle border d-flex justify-content-center align-items-center position-absolute bg-light"
          @click="scrollRight($refs.techScrollContainer)" style="width: 40px; height:40px ;top: 40%; right: -2%">
          <i class="bi bi-chevron-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamSection',
  data() {
    return {
      teamMembers: [
        {
          name: "Dr. Prerna Jeloka",
          speciality: "Conservative and Endodontic Dentistry (BDS, MDS)",
          image: "https://www.thedentalroots.com/assets/images/about/Dr_Prerna.jpg",
        },
        {
          name: "Dr. Ritika",
          speciality: "General Dentist (BDS)",
          image: "https://www.thedentalroots.com/assets/images/about/dr-Ritika.jpg",
        },
        {
          name: "Dr. Aditi Chaturvedi",
          speciality: "BDS and MDS in Periodontology and Oral Implantology",
          image: "https://www.thedentalroots.com/assets/images/about/dr_Aditi_Chaturvedi.jpg",
        },
        {
          name: "Dr. Sarveshwari Singh",
          speciality: "Conservative and Endodontic Dentistry (BDS, MDS)",
          image: "https://www.thedentalroots.com/assets/images/about/dr-sarveshwari.png",
        },
        {
          name: "Dr. Anchal Bhat",
          speciality: "Conservative Dentist and Endodontic (MDS)",
          image: "https://www.thedentalroots.com/assets/images/about/Anchal.jpg",
        },
      ],
    }
  },
  methods: {
    scrollLeft(container) {
      const scrollWidth = container.clientWidth;
      const newScrollLeft = Math.max(container.scrollLeft - scrollWidth, 0);

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    },
    scrollRight(container) {
      const scrollWidth = container.clientWidth;
      const maxScrollLeft = container.scrollWidth - scrollWidth;
      const newScrollLeft = Math.min(container.scrollLeft + scrollWidth, maxScrollLeft);

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
/* .card-text {
  max-height: 12rem;
  overflow-y: auto;
} */

#scroll::-webkit-scrollbar {
  display: none;
}
</style>
