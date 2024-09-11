import { createStore } from "vuex";

export default createStore({
  state: {
    services: [
      {
        title: 'Invisalign',
        description: 'Preview your smile visualize your teeth after invisalign',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/invisalign-and-braces-the-dental-roots.jpg'
      },
      {
        title: 'Tooth Coloured Restoration',
        description: 'A painless cosmetic solution for a smile you\'ll love',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/tooth-coloured-restoration-the-dental-roots.jpg'
      },
      {
        title: 'Veneers',
        description: 'Get porcelain Veneers treatment at The Dental Roots and enhance your smile',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Implants',
        description: 'India’s leading and most trusted Dental Clinic',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/tooth-coloured-restoration-the-dental-roots.jpg'
      },
      {
        title: 'Laser Dentistry',
        description: 'In recent years, laser dentistry has superseded  many traditional dentistry practices',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Smile Makeovers',
        description: 'Hollywood smile makeovers treatment',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Kids Dentistry',
        description: 'Trusted pediatric dentistry at the Dental Solutions',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Painless Extraction (Tooth Removal)',
        description: 'Painless tooth extraction in Delhi NCR, India',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Teeth Whitening',
        description: 'Bring back  the glow  of your smile - safe, effective, and fast with long-lasting white',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Painless Wisdom Tooth Extraction',
        description: 'A surgial procedure to remove one or more wisdom teeth',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Dentures',
        description: 'Find the right denture for you!',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Braces',
        description: 'We perfect  your smile with love, braces, and aligners',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Dental Bridges',
        description: 'Restore your smile to perfect condition',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Procelain Crowns',
        description: 'This restoractive procedure uses prosthetic devices to return your smile to its natural state',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
    ],
  },
  getters: {
    getServices: state => state.services
  },
  mutations: {},
  actions: {},
  modules: {},
});
