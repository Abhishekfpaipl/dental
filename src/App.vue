<template>
  <TopNav />
  <transition name="fade">
    <router-view />
    <!-- <div class=""> -->
    <!-- </div> -->
  </transition>
  <a v-if="!hide" href="https://www.google.com/maps/place/Kamniyata+Skin+Centre-+Best+Laser+Hair+Reduction+in+Delhi,+Skin+Whitening,+Hydra+Facial%2FPRP+Hair+Treatment+North+Delhi/@28.685547,77.1664758,17z/data=!3m1!4b1!4m6!3m5!1s0x390d03dda6b498d9:0x8933d95b6a5803c6!8m2!3d28.685547!4d77.1664758!16s%2Fg%2F11ry9bkltn?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D"
    class="query slide d-flex flex-column align-items-center justify-content-center border rounded px-2 text-decoration-none"
    style="background-color: #F7138E;">
    <img src="/img/skin.svg" style="width: 30px; height: 30px;filter: invert(1);" alt="">
    <p class="text-uppercase fw-bold mb-0 smaller text-white">skin</p>
  </a>
  <FooterBar v-if="!hide"/>
</template>
<script>
import TopNav from "@/components/TopNav.vue";
import FooterBar from "@/components/FooterBar.vue";
export default {
  name: "App",
  components: {
    TopNav,
    FooterBar
  },
  computed: {
    hide() {
      const hiddenPages = ['ProductDetail']
      return hiddenPages.includes(this.$route.name)
    },
  }
}
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --bg-primary: rgb(126, 1, 128);
  --bg-secondary: #FCF0FF;
  --bg-third: #481E14;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.text-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-ellipsis2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.primary-btn {
  background: linear-gradient(90deg, rgba(254, 242, 159, 1) 0%, rgba(210, 163, 73, 1) 50%, rgba(254, 242, 159, 1) 100%) !important;
  color: var(--bg-primary) !important;
}

.primary-text {
  background: linear-gradient(90deg, rgba(254, 242, 159, 1) 0%, rgba(210, 163, 73, 1) 50%, rgba(254, 242, 159, 1) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#scroll::-webkit-scrollbar {
  display: none;
}

.smaller {
  font-size: 12px;
}

#scroll::-webkit-scrollbar {
  display: none;
}

.before-enter {
  opacity: 0;
  transform: translateY(80px);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0);
}

.form-control {
  box-shadow: none !important;
}
.accordion-button:not(.collapsed){
  background-color: var(--bg-secondary) !important;
}
.accordion-button:focus{
  box-shadow: none !important;
}
.query {
  z-index: 90;
  position: fixed;
  bottom: 10%;
  right: 10px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

@keyframes slideTop {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5px);
  }
}

.slide {
  display: inline-block;
  animation: slideTop 1.5s ease-in-out infinite;
}
</style>
