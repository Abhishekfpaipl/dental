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
    path: "/terms-and-conditions",
    name: "TermsConditions",
    component: () => import('@/pages/TermsConditions.vue'),
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import('@/pages/AboutUs.vue'),
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import('@/pages/ContactUs.vue'),
  },
  {
    path: "/career",
    name: "CareerPage",
    component: () => import('@/pages/CareerPage.vue'),
  },
  {
    path: "/product-detail/:productId",
    name: "ProductDetail",
    component: () => import('@/pages/ProductDetail.vue'),
  },
  {
    path: '/services/:category',
    name: "ServicePage",
    component: () => import('@/pages/ServicePage.vue'),
  },
  {
    path: "/testimonial",
    name: "ShortsVideosPage",
    component: () => import('@/pages/ShortsVideosPage.vue'),
  },
  // {
  //   path: "/gallery",
  //   // name: "GalleryPage",
  //   children: [
  //     {
  //       path: 'office',
  //       name: 'Gallery-Office',
  //       component: () => import('@/pages/GalleryPageOld.vue'),
  //     },
  //     {
  //       path: 'customers',
  //       name: 'Gallery-Customer',
  //       component: () => import('@/pages/GalleryCustomer.vue')
  //     },
  //     {
  //       path: 'doctors',
  //       name: 'Gallery-Doctors',
  //       component: () => import('@/pages/GalleryDoctors.vue')
  //     },
  //   ]
  // },
  {
    path: "/gallery",
    name: "GalleryPage",
    component: () => import('@/pages/GalleryPage.vue'),
  },
  {
    path: "/certificates",
    name: "CertificatesPage",
    component: () => import('@/pages/CertificatesPage.vue'),
  },
  {
    path: "/faq",
    name: "FaqPage",
    component: () => import('@/pages/FaqPage.vue'),
  },
  {
    path: "/doctor/:productId",
    name: "DoctorDetailPage",
    component: () => import('@/pages/DoctorDetailPage.vue'),
  }
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
