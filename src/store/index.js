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
    faqs: [
      {
        "id": 1,
        "name": "General Information",
        "plans": [
          {
            "question": "What services does your dental practice offer?",
            "answer": "Our dental practice offers a wide range of services including routine check-ups, cleanings, fillings, root canals, crowns, bridges, implants, teeth whitening, and orthodontic treatments."
          },
          {
            "question": "Where is your dental office located?",
            "answer": "Our dental office is located at [Address, City, State, Zip Code]. We're conveniently situated [brief description of location, e.g., 'in downtown area', 'near major highways']."
          },
          {
            "question": "How long has your dental practice been in business?",
            "answer": "Our dental practice has been serving the community since [Year]."
          },
          {
            "question": "Do you treat patients of all ages?",
            "answer": "Yes, we are a family dental practice and welcome patients of all ages, from children to seniors."
          }
        ]
      },
      {
        "id": 2,
        "name": "Services",
        "plans": [
          {
            "question": "Do you offer cosmetic dentistry services?",
            "answer": "Yes, we offer various cosmetic dentistry services including teeth whitening, veneers, bonding, and smile makeovers."
          },
          {
            "question": "What types of orthodontic treatments do you provide?",
            "answer": "We offer traditional braces, clear aligners, and other orthodontic solutions tailored to meet individual needs."
          },
          {
            "question": "Do you perform dental implants?",
            "answer": "Yes, we provide dental implant services, including consultation, placement, and restoration."
          },
          {
            "question": "What should I expect during a routine check-up?",
            "answer": "A routine check-up typically includes a thorough cleaning, examination of teeth and gums, oral cancer screening, and x-rays if necessary."
          }
        ]
      },
      {
        "id": 3,
        "name": "Appointments and Emergencies",
        "plans": [
          {
            "question": "How do I schedule an appointment?",
            "answer": "You can schedule an appointment by calling our office at [Phone Number] or using our online booking system on our website."
          },
          {
            "question": "What are your office hours?",
            "answer": "Our regular office hours are [list days and hours]. We also offer [mention any extended hours or weekend availability]."
          },
          {
            "question": "Do you offer emergency dental services?",
            "answer": "Yes, we provide emergency dental services. If you have a dental emergency during office hours, call us immediately. For after-hours emergencies, please call [Emergency Number]."
          },
          {
            "question": "How often should I visit the dentist?",
            "answer": "We recommend visiting the dentist every six months for routine check-ups and cleanings, though some patients may need more frequent visits based on their oral health needs."
          }
        ]
      },
      {
        "id": 4,
        "name": "Insurance and Payment",
        "plans": [
          {
            "question": "What insurance plans do you accept?",
            "answer": "We accept most major dental insurance plans. Please contact our office for a complete list of accepted insurances."
          },
          {
            "question": "Do you offer payment plans?",
            "answer": "Yes, we offer various payment plans to help make dental care more affordable. We can discuss these options during your visit."
          },
          {
            "question": "What forms of payment do you accept?",
            "answer": "We accept cash, credit cards (Visa, MasterCard, American Express), and personal checks."
          },
          {
            "question": "Do you offer any discounts for uninsured patients?",
            "answer": "We offer a discount program for uninsured patients. Please inquire about our in-house savings plan for more details."
          }
        ]
      },
      {
        "id": 5,
        "name": "New Patients",
        "plans": [
          {
            "question": "What should I bring to my first appointment?",
            "answer": "Please bring your ID, insurance card (if applicable), a list of current medications, and any relevant medical history. You can also fill out new patient forms on our website to save time."
          },
          {
            "question": "Do you see new patients for emergencies?",
            "answer": "Yes, we welcome new patients for both routine care and emergencies. Call our office, and we'll do our best to accommodate you as soon as possible."
          },
          {
            "question": "Is parking available at your office?",
            "answer": "Yes, we have [describe parking situation, e.g., 'a dedicated parking lot', 'ample street parking'] available for our patients."
          },
          {
            "question": "Do you offer sedation dentistry for anxious patients?",
            "answer": "Yes, we offer sedation options for patients who experience dental anxiety. We can discuss these options during your consultation."
          }
        ]
      },
      {
        "id": 6,
        "name": "Dental Health Tips",
        "plans": [
          {
            "question": "How often should I brush and floss my teeth?",
            "answer": "You should brush your teeth at least twice a day and floss daily for optimal oral health."
          },
          {
            "question": "What's the best way to prevent cavities?",
            "answer": "Prevent cavities by brushing and flossing regularly, maintaining a healthy diet low in sugary foods, using fluoride toothpaste, and visiting your dentist for regular check-ups and cleanings."
          },
          {
            "question": "How can I whiten my teeth?",
            "answer": "We offer professional in-office and take-home teeth whitening treatments. We can discuss the best option for you during your visit."
          },
          {
            "question": "What should I do if I chip or break a tooth?",
            "answer": "If you chip or break a tooth, rinse your mouth with warm water, apply a cold compress to reduce swelling, and contact our office immediately for guidance and treatment."
          }
        ]
      }
    ]
  },
  getters: {
    getServices: state => state.services,
    getFaq: state => state.faqs,
  },
  mutations: {},
  actions: {},
  modules: {},
});
