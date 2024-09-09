<template>
  <DashboardNav />
  <transition name="fade">
    <router-view />
  </transition>
  <FooterBar />
</template>
<script>
// import DashboardNav from "@/components/TopNav.vue";
// import FooterBar from "@/components/FooterBar.vue";
export default {
  name: "App",
  components: {
    // DashboardNav,
    // FooterBar
  },
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
  --bg-primary: #EB5B00;
  --bg-secondary: #FFB200;
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
</style>
