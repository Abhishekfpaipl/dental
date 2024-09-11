import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: "/privacy",
    name: "PrivacyPolicy",
    component: () => import('@/pages/PrivacyPolicy.vue'),
  },
  {
    path: "/terms",
    name: "TermsConditions",
    component: () => import('@/pages/TermsConditions.vue'),
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import('@/pages/AboutUs.vue'),
  },
  {
    path: "/product-detail",
    name: "ProductDetail",
    component: () => import('@/pages/ProductDetail.vue'),
  },
  {
    path: "/services",
    name: "ServicePage",
    component: () => import('@/pages/ServicePage.vue'),
  },
  {
    path: "/testimonial",
    name: "TestimonialPage",
    component: () => import('@/pages/TestimonialPage.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
