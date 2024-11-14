import { createStore } from "vuex";
import gallery from "./gallery";

export default createStore({
  state: {
    services: [
      {
        title: 'Invisalign',
        sid: "invisalign",
        category: "cosmetic",
        description: 'Preview your smile visualize your teeth after invisalign',
        image: '/img/products/invis.jpg',
        long_description: "Invisalign aligners are virtually invisible, custom-made, and removable braces designed to correct a variety of dental issues such as crowding, overbites, and misaligned teeth. This sophisticated treatment utilizes 3D technology to create a precise series of clear aligners that gradually move your teeth into their optimal position. The journey begins with a detailed scan or impression of your teeth, followed by the creation of a customized treatment plan that maps out the movements of each tooth in a virtual setup. Once approved by your orthodontist, the aligners are crafted, and your treatment can begin. You’ll be required to wear the aligners for 20-22 hours daily, switching to the next set as instructed by your orthodontist. To ensure optimal progress, your orthodontist will schedule regular appointments at our branches in Panchsheel Park, Sushant Lok (Gurgaon), or Tata Primanti (Sohna Road). With countless satisfied patients globally, Invisalign has proven to deliver outstanding results. Our certified providers at Dental Solutions are committed to giving you the flawless smile you've always wanted—quickly and comfortably.",
        benefitTitle: "Benefits of Invisalign",
        benefits: [
          {
            "image": "/img/productBenefits/invisible.svg",
            "title": "Virtually Invisible",
            "description": "Invisalign aligners are nearly invisible, allowing you to maintain a natural, confident smile without the appearance of traditional metal braces. Say goodbye to the self-consciousness that comes with visible orthodontic treatments."
          },
          {
            "image": "/img/productBenefits/thumbs.svg",
            "title": "Effortless Maintenance",
            "description": "Invisalign aligners are easy to clean. Simply remove them, brush your teeth, clean the aligners, and reinsert them. Unlike braces, Invisalign significantly reduces the risk of cavities and tooth damage during treatment."
          },
          {
            "image": "/img/productBenefits/food.svg",
            "title": "No Food Restrictions",
            "description": "Enjoy all your favorite foods without worry. With Invisalign, you can remove the aligners while eating and put them back on afterward—no restrictions on what you can enjoy."
          },
          {
            "image": "/img/productBenefits/tooth.svg",
            "title": "Comfortable Fit",
            "description": "Custom-made for your teeth, Invisalign aligners offer a snug and comfortable fit, minimizing pain, irritation, and discomfort commonly associated with traditional braces."
          },
          {
            "image": "/img/productBenefits/sport.svg",
            "title": "Freedom in Sports",
            "description": "Whether you’re playing sports or engaging in physical activities, Invisalign gives you flexibility. You can either keep wearing the aligners or take them out without compromising your treatment or comfort."
          },
          {
            "image": "/img/productBenefits/music.svg",
            "title": "Easier for Musicians",
            "description": "Playing musical instruments with Invisalign is hassle-free. Since there are no metal brackets, you won’t face the challenges that often come with traditional braces, making it easier to continue playing without discomfort."
          },
          {
            "image": "/img/productBenefits/happy.svg",
            "title": "Boost in Confidence",
            "description": "A perfect smile can greatly enhance your self-confidence. Invisalign helps you achieve that beautiful smile discreetly, boosting your self-esteem and overall sense of well-being."
          }
        ],
        typeTitle: "Types of Invisalign",
        types: [
          {
            image: "https://www.thedentalroots.com/assets/images/Invisalign/Overbite.jpg",
            title: "Overbite",
          },
          {
            image: "https://www.thedentalroots.com/assets/images/Invisalign/Underbite.jpg",
            title: "Underbite",
          },
          {
            image: "https://www.thedentalroots.com/assets/images/Invisalign/Crossbite.jpg",
            title: "Crossbite",
          },
          {
            image: "https://www.thedentalroots.com/assets/images/Invisalign/Gap-Teeth.jpg",
            title: "Gap Teeth",
          },
          {
            image: "https://www.thedentalroots.com/assets/images/Invisalign/Open-Bite.jpg",
            title: "Open Bite",
          },
          {
            image: "https://www.thedentalroots.com/assets/images/Invisalign/Crowded-teeth.jpg",
            title: "Crowded Teeth",
          },
        ],
        extraInfo: {
          title: "Discover the Benefits of Invisalign Teen",
          description: "Invisalign Teen® combines the advanced technology of the Invisalign® system with unique features tailored to the active lifestyles and specific needs of teenagers. Here’s how Invisalign Teen® stands out as a superior alternative to traditional braces. Features of this alternative to braces include.",
        },
        features: [
          "Room for growth. Invisalign Teen® has eruption tabs that adjust to your teen’s changing mouth, enabling treatment to be started even when there is a mixture of adult and baby teeth.",
          "Peace of mind. There is no need to worry about whether your teen is wearing the aligners often enough. Invisalign Teen® is designed with a Blue Dot Wear Indicator that fades to clear over a two-week period.",
          "Flexibility. While it’s important for your teen to wear aligners as often as possible, aligners can be removed for those important special occasions like school pictures, prom, and graduation.",
          "Sports safety. With Invisalign Teen®, there is less risk for the painful sports impact injuries that can occur when teens get hit in the mouth while participating in soccer, basketball, football, or similar activities. What’s more, custom mouthguards fit better over Invisalign aligners than over traditional braces.",
          "Something to smile about. According to recent surveys, more than half of today’s teens feel self-conscious about wearing conventional metal braces. Since Invisalign Teen® is virtually invisible, your teen can smile with confidence.",
        ]

      },
      {
        title: 'Painless Root Canal Treatment',
        sid: 'painless-root-canal-treatment',
        category: "general",
        description: 'A painless cosmetic solution for a smile you\'ll love',
        image: '/img/products/rootcanal.jpg',
        long_description: " Many people assume that getting a root canal is stressful or painful—but that’s a misconception! In reality, our patients are often surprised by how comfortable and seamless the procedure is. Root canal treatment is one of the most effective solutions for stopping painful decay, treating infection, and saving a tooth from extraction.",
        questions: [
          {
            title: "What is a Root Canal Treatment?",
            description: "Root canal treatment, also known as endodontic therapy, is designed to eliminate bacteria from the infected root canal, prevent future infections, and save the natural tooth. This restorative procedure involves removing the inflamed or infected pulp inside the tooth, thoroughly cleaning and disinfecting the root canals, and then sealing the space with a rubber-like material. In many cases, a crown or cap is placed on the tooth afterward to strengthen and protect it.",
          },
          {
            title: "Comfortable, Advanced Treatment?",
            description: "Thanks to advancements in modern digital technology and anesthesia, root canal treatments are no longer something to dread. What once was considered painful is now a painless, efficient, and comfortable procedure. At Dental Solutions, we use state-of-the-art equipment and techniques to ensure that your treatment is as smooth and pain-free as possible.",
          },
          {
            title: "Why Choose Root Canal Treatment?",
            description: "Root canal treatment is the best option to preserve your natural tooth and avoid more invasive and costly procedures such as tooth extraction, bridges, or implants. With proper care, a tooth that has undergone a root canal can last a lifetime, giving it a high success rate. It’s also significantly more affordable than replacing a lost tooth. However, maintaining good oral hygiene is essential. Even after a root canal, decay can still occur, so regular dental check-ups and cleanings are necessary to ensure long-term health and function.",
          },
          {
            title: "Why Choose Dental Solutions?",
            description: "At Dental Solutions, we’re proud to be the only dental clinic in Delhi NCR with more than FIVE highly qualified and experienced Endodontists. With over 10 years of expertise and modern technology, we offer painless and highly effective root canal treatments that not only relieve tooth pain but also save your natural tooth. Whether you’re in New Delhi or Gurgaon, our dedicated team ensures a comfortable experience from start to finish. Don’t let fear or outdated information keep you from taking care of your dental health. Schedule your root canal with Dental Solutions and enjoy long-lasting relief and restored confidence in your smile!",
          },
          {
            title: "Save Your Tooth with Confidence",
            description: "At Dental Solutions, we’re dedicated to providing the best root canal treatments with minimal discomfort and maximum effectiveness. Contact us today to book an appointment or learn more about how our advanced techniques can help you maintain a healthy, pain-free smile."
          }
        ],
        typeTitle: "Types of Root Canal Treatments",
        // types: [
        //   {
        //     "image": "https://www.thedentalroots.com/assets/images/Invisalign/Overbite.jpg",
        //     "title": "Infected Tooth Before Treatment"
        //   },
        //   {
        //     "image": "https://www.thedentalroots.com/assets/images/Invisalign/Underbite.jpg",
        //     "title": "Access Opening Made in the Tooth"
        //   },
        //   {
        //     "image": "https://www.thedentalroots.com/assets/images/Invisalign/Crossbite.jpg",
        //     "title": "Infected Tissue Removed and Canals Cleaned"
        //   },
        //   {
        //     "image": "https://www.thedentalroots.com/assets/images/Invisalign/Gap-Teeth.jpg",
        //     "title": "Canals Filled with Permanent Material"
        //   },
        //   {
        //     "image": "https://www.thedentalroots.com/assets/images/Invisalign/Open-Bite.jpg",
        //     "title": "Tooth Sealed with Filling; Post Added for Extra Support if Needed"
        //   },
        //   {
        //     "image": "https://www.thedentalroots.com/assets/images/Invisalign/Crowded-teeth.jpg",
        //     "title": "New Crown Cemented onto the Rebuilt Tooth"
        //   }
        // ],
        extraInfo: {
          title: "Save your Teeth, Take Back your Life",
          description: "We offer an inclusive, non-judgemental environment where you can seek treatment for dental concerns like advanced decay. At Dental Solutions New Delhi and Gurgaon, our team is focused on delivering an enjoyable experience and successful outcomes. It all starts with our years of experience and commitment to advanced technology and the latest techniques. We’ll help you feel at home here.",
        },
        features: [
          "Laser root canal treatment utilizes a focused beam of intense light to clean the root canals with precision, ensuring a more thorough and efficient cleaning process.",
          "While traditional methods may leave some bacteria in the canal, the laser's intense light effectively eradicates any remaining bacteria, ensuring a sterile and infection-free environment.",
          "To guarantee the highest level of clinical success, each patient undergoes a comprehensive examination and is educated about their specific condition. This personalized approach helps in selecting the most suitable treatment plan and minimizes potential post-operative issues.",
          "Laser technology significantly reduces post-treatment complications associated with traditional root canals. By minimizing inflammation, swelling, and discomfort, it ensures a more comfortable recovery as the effects of anesthesia subside."
        ],

      },
      {
        title: 'Tooth Coloured Restoration',
        sid: 'tooth-coloured-restoration',
        category: "general",
        description: 'A painless cosmetic solution for a smile you\'ll love',
        image: '/img/products/teethcolor.jpg',
        long_description: "In today's advanced world of dentistry, achieving the perfect smile goes beyond just maintaining excellent oral hygiene—it also involves the art of restorative techniques. Tooth-colored fillings and composite restorations represent a modern, innovative solution that surpasses conventional methods. These state-of-the-art procedures provide a flawless fusion of aesthetics and functionality, ensuring a natural, beautiful smile while restoring the strength and integrity of your teeth.",
        questions: [
          {
            title: "Revolutionizing Dental Aesthetics",
            description: "Gone are the days when dental fillings meant unsightly metal. Tooth-colored fillings, also known as composite fillings, are now at the forefront of modern dentistry, offering both aesthetic appeal and strength. Made from a blend of resin and fine glass particles, these fillings perfectly match the natural color of your teeth while providing structural integrity.",
          },
          {
            title: "Aesthetic Harmony with Composite Restorations",
            description: "Composite restorations elevate the concept of tooth-colored fillings by meticulously layering composite materials onto damaged or decayed teeth. This process not only recreates the natural appearance of your teeth but also reinforces their strength. The result? A flawless smile that doesn't compromise on durability or function.",
          },
          {
            title: "Advantages That Go Beyond Aesthetics",
            description: "Preserving Natural Tooth Structure. One of the most significant benefits of tooth-colored fillings and composite restorations is the preservation of your natural tooth structure. Unlike traditional amalgam fillings, which often require the removal of healthy tooth material, composite restorations bond directly to the tooth, minimizing the need for aggressive reshaping and allowing more of your natural tooth to remain intact.",
          },
          {
            title: "Reducing Sensitivity",
            description: "Metal fillings are notorious for conducting temperature changes, leading to heightened sensitivity. Tooth-colored fillings, in contrast, are non-conductive, reducing the risk of temperature-related discomfort. This makes them an excellent choice for individuals who experience sensitivity with traditional fillings.",
          },
          {
            title: "Enhanced Durability",
            description: "Modern composite materials have been developed to provide impressive durability. Not only do they withstand the daily wear and tear of chewing and biting, but they are also just as strong, if not stronger, than traditional fillings. This ensures your dental work remains intact and functional for many years.",
          },
          {
            title: "What is Tooth Bonding?",
            description: "Teeth bonding, or dental composite bonding, is a cosmetic dental procedure used to improve the appearance of teeth and restore a beautiful smile. A composite resin—a tooth-colored material similar to that used in composite fillings—is applied to the tooth and hardened with ultraviolet light. This seamless, natural-looking material blends with your surrounding teeth to produce an aesthetically pleasing result.",
          },
          {
            title: "The Dental Bonding Process",
            description: "The tooth bonding process begins with selecting the right shade of composite material to match your natural teeth. Once the perfect color is chosen, the dentist prepares the tooth and applies the putty-like resin, carefully molding it into shape. A painless laser is then used to harden the material. After the composite has set, our dentists make final adjustments and polish the surface to match the look and texture of your surrounding teeth. The entire bonding process typically takes 30 to 60 minutes per tooth and can be completed in one visit at Dental Solutions locations in Panchsheel Park, New Delhi; Sushant Lok, Gurgaon; or Tata Primanti, Sohna. Bonding for multiple teeth may require more time and could be spread over several visits.",
          },
          {
            title: "Lifespan and Maintenance",
            description: "With proper care, dental bonding can last between 5 and 10 years before touch-ups or replacements may be needed. The team at Dental Solutions can guide you through the entire process, ensuring long-lasting, beautiful results for years to come.",
          },
        ],
        extraInfo: {
          title: "Biomimetic Dentistry: The Future of Natural Tooth Restoration",
          description: "Biomimetic dentistry is a revolutionary approach that restores teeth by replicating their natural structure and function. Your teeth have evolved to be both strong and flexible, perfectly suited to withstand daily wear and tear. Biomimetic techniques aim to mimic these unique qualities, ensuring that each tooth restoration closely resembles the original in both appearance and strength. By using advanced materials and methods, our dentists at Dental Solutions focus on preserving as much of the natural tooth as possible, offering treatments that restore the tooth’s original functionality, aesthetic appeal, and resilience. This minimally invasive approach helps maintain the integrity of your teeth, ensuring that the restoration blends seamlessly with the natural structure, promoting long-term oral health and durability.",
        },
        features: [
          "Tooth Preservation: Maintaining as much of the original tooth structure as possible is the cornerstone of biomimetic dentistry. By preserving healthy tooth tissue, this approach prevents unnecessary drilling and weakening of the tooth, resulting in a stronger, more natural outcome.",
          "Dental Conservation: Biomimetic techniques emphasize conserving the tooth’s natural anatomy. Rather than relying on traditional methods that may involve removing significant amounts of healthy tooth, these treatments are designed to maintain the tooth's natural integrity, ensuring longevity.",
          "Restoration of Weak or Damaged Teeth: Biomimetic restorations are specifically tailored to strengthen weakened or damaged teeth. Using advanced materials that closely mimic the natural properties of enamel and dentin, these restorations help protect the tooth from further damage while restoring its original functionality and aesthetics.",
          "Maintaining Tooth Strength While Sealing Out Infection: Biomimetic treatments focus on reinforcing the natural strength of the tooth while providing a durable seal to prevent bacterial infection. This combination ensures the tooth remains healthy, functional, and free from further decay.",
          "Long-Lasting Treatments: By using state-of-the-art materials and techniques that closely replicate the natural structure of the tooth, biomimetic dentistry provides restorations that are built to last. This results in fewer replacements and less invasive procedures over time, preserving your oral health for years to come."
        ],
        extraInfo2: {
          title: "Addressing Localized Tooth Discoloration with Dental Bonding",
          description: "Dental bonding is an effective solution for addressing localized tooth discoloration, offering a way to blend a single discolored tooth seamlessly with the surrounding teeth. However, for patients experiencing widespread discoloration, professional teeth whitening may be recommended as a preliminary step. This ensures that the bonding material matches the newly whitened shade, as once applied, the bonding material cannot be altered to adjust to any further changes in tooth color.",
        },
        features2: [
          "Significant Tooth Damage: Extensive damage to a tooth might require more comprehensive treatments such as crowns or veneers to ensure proper restoration and durability.",
          "Severe Tooth Decay: If a tooth has severe decay, it’s crucial to address the underlying issues with restorative treatments before considering bonding. Decayed teeth need to be treated to prevent further deterioration and ensure the success of any cosmetic procedures.",
          "Extremely Discolored Teeth: For teeth with extensive discoloration that affects more than one or two teeth, professional whitening treatments are often recommended first. This approach ensures that bonding material and existing teeth have a uniform appearance.",
          "Grinding or Clenching Habits: If you have a habit of grinding or clenching your teeth, this can significantly impact the longevity of dental bonding. In such cases, it’s crucial to address these habits with a custom night guard or other interventions before undergoing bonding."
        ]
      },
      {
        title: 'Veneers',
        sid: 'veneers',
        category: "cosmetic",
        description: 'Get porcelain Veneers treatment at Dental Solutions and enhance your smile',
        image: '/img/products/veneers.jpg',
        long_description: "A beautiful smile is a powerful asset, and dissatisfaction with yours can impact every facet of your life. If you often find yourself hiding your smile or feeling self-conscious about your teeth, it could affect your confidence, job opportunities, personal relationships, and overall happiness. But you don’t have to feel this way anymore. With porcelain veneers from Dental Solutions, you can achieve a radiant smile that reflects your confidence and enhances your appearance. Our expert team in New Delhi and Gurgaon works closely with a renowned master ceramist to design veneers that are custom-crafted to complement your unique smile and facial features. The veneers we offer are not only stunning but also durable, addressing a wide range of cosmetic concerns to give you a smile that you’ll be proud to share with the world. Porcelain veneers are thin, custom-made shells made of tooth-coloured materials like porcelain or resin composite. They are expertly designed to cover the front surface of teeth, improving their shape, size, and colour. Minimal tooth preparation is required, as only a small portion of the tooth's front surface is trimmed. Veneers are ideal for those with discoloured, chipped, uneven, or irregularly shaped teeth, or for closing gaps. Veneers are one of our most sought-after cosmetic treatments for a reason—they offer a transformative boost to your confidence. Not only do they conceal imperfections, but they can also enhance your facial symmetry, highlighting your natural features like cheekbones.",
        questions: [
          {
            title: "How We Craft Your Perfect Smile",
            description: "At Dental Solutions, Dr. Gupta and his team take a highly personalized approach to every veneer transformation. Our clinic is dedicated to crafting custom porcelain veneers that enhance your natural beauty. Whether you choose traditional or no-prep veneers, we guide you through the process to help you determine the best option for your smile.",
          },
          {
            title: "First Appointment: Tailored Just for You",
            description: "Your smile journey begins with advanced 3D imaging technology, allowing you to visualize the results before treatment. During this appointment, Dr. Dheeraj will prepare your teeth for temporary veneers and fit you with a “trial smile” that you’ll wear for about a week. This gives you the opportunity to experience your new smile and provide input on its look and feel before moving forward with the final veneers.",
          },
          {
            title: "Second Appointment: Your Opinion Shapes the Outcome",
            description: "After wearing the temporary smile, you’ll return to discuss your experience. Your feedback is invaluable, and Dr. Gupta will use it to fine-tune the design. A master ceramist will then create a new mould based on your input, ensuring that the final veneers are an ideal fit for both aesthetics and comfort.",
          },
          {
            title: "Third Appointment: Custom-Crafted Perfection",
            description: "In this final step, your veneers—designed specifically for you—are ready for placement. Dr. Gupta will carefully remove the temporary veneers and fit your permanent ones, ensuring they seamlessly blend with your natural teeth for a flawless, lasting smile. Our team will apply the finishing touches to make sure everything is perfect.",
          },
          {
            title: "A Smile That Lasts a Lifetime",
            description: "Porcelain veneers are not only beautiful but incredibly durable. With proper care, they can last for decades. Most patients find that after a short adjustment period, their veneers feel as natural as their original teeth, blending perfectly into their smile.",
          },
          {
            title: "Meet Your Veneers Team",
            description: "Choosing a skilled and experienced team is essential to achieving the best results. At Dental Solutions, our expert team is committed to delivering exceptional outcomes using the latest techniques and advanced technology. With years of experience and a passion for creating life-changing smiles, we ensure that you leave our clinic with confidence and pride in your new look.",
          },
        ],
        extraInfo: {
          title: "The Advantages of Porcelain Veneers",
          description: "Porcelain veneers offer a versatile solution to a wide range of cosmetic dental concerns in a relatively short time. But their benefits extend beyond aesthetic improvements. At Dental Solutions, our expert cosmetic dentists provide custom veneers that are designed to deliver lasting beauty and function",
        },
        features: [
          "Tailored for a Seamless Smile Each veneer is meticulously crafted to blend harmoniously with your natural teeth, ensuring that your smile looks perfectly balanced. The customization allows veneers to fit your individual tooth structure, enhancing both appearance and function.",
          "Made from High-Quality Materials We use only the finest porcelain materials that mimic the translucency and luster of natural enamel. These advanced materials not only ensure that your veneers look beautiful but also provide remarkable durability.",
          "Durable and Long-Lasting Porcelain veneers are renowned for their strength and longevity. With proper care, they can last for many years—potentially decades—without losing their charm. This durability means fewer replacements and less upkeep over time.",
          "Simple to Care For Caring for your veneers is as easy as maintaining your natural teeth. Regular brushing, flossing, and dental check-ups will keep them looking and feeling fresh, while their resistance to staining means they stay bright without extra effort.",
          "Enhance Your Facial Aesthetics Veneers are not just about improving individual teeth—they’re about perfecting your overall look. They are designed to complement your unique facial features, whether that means accentuating your cheekbones or balancing asymmetry in your smile.",
          "Stain-Resistant and Color-Stable The porcelain material we use resists stains from coffee, tea, and other common culprits. While they may eventually need replacement after many years, the veneers can be replaced one at a time, ensuring your smile retains its brilliance with minimal disruption."
        ],
        extraInfo2: {
          title: "Tips for Preserving Your Porcelain Veneers",
          description: "To ensure that your porcelain veneers remain in pristine condition and continue to enhance your smile for years to come, follow these essential care tips:",
        },
        features2: [
          "Opt for a Soft-Bristled Toothbrush Use a toothbrush with soft bristles to gently clean your veneers. Hard or medium-bristled brushes can be abrasive and may scratch or damage the surface of your veneers over time.",
          "Avoid Abrasive Toothpaste Steer clear of toothpaste containing baking soda, charcoal, or other abrasive agents. These can erode the glaze on your veneers and lead to dulling or surface damage. Instead, choose a non-abrasive, fluoride toothpaste designed for sensitive or cosmetic dental work.",
          "Skip Astringent Mouthwashes Astringent mouthwashes can contain harsh chemicals that may weaken or discolor the bonding material holding your veneers in place. Opt for a mild, alcohol-free mouthwash that is gentle on both your veneers and your natural teeth.",
          "Maintain Regular Dental Visits Regular check-ups with your dentist are crucial. Professional cleanings and examinations ensure that your veneers are in good condition and provide an opportunity to address any issues before they become more significant problems.",
          "Avoid Hard or Sticky Foods Be cautious with foods that are overly hard or sticky, as they can put undue pressure on your veneers and potentially cause damage or dislodgement. Cutting food into smaller pieces and avoiding biting into hard items can help protect your veneers.",
          "Practice Good Oral Hygiene Continue to brush and floss regularly, focusing on both your natural teeth and veneers. Flossing helps remove food particles and plaque from between your teeth and veneers, reducing the risk of gum issues and decay."
        ]
      },
      {
        title: 'Implants',
        sid: 'implants',
        category: "surgical",
        description: 'India’s leading and most trusted Dental Clinic',
        image: '/img/products/implant1.jpg',
        long_description: "A radiant smile can be transformative, and at Dental Solutions, we understand the importance of achieving the highest standard of dental care. Our clinic, renowned for luxury and excellence, offers state-of-the-art dental implant services in Delhi and Gurgaon. With the latest technology and personalized treatment plans, we ensure that every patient receives the best care for a stunning and functional smile.",
        questions: [
          {
            title: "Understanding Dental Implants",
            description: "Dental implants offer a durable, long-term solution for replacing missing or damaged teeth. Unlike traditional dentures, which can be removable and less stable, dental implants provide a permanent solution. Made from titanium, these implants serve as artificial roots anchored securely into the jawbone. They are topped with custom dental crowns that blend seamlessly with your natural teeth, creating a realistic and natural appearance. Implants restore not only the functionality of your smile but also enhance its aesthetics, making it virtually indistinguishable from your natural teeth.",
          },
          {
            title: "Why Choose Dental Implants at Dental Solutions?",
            description: "At our clinics in Panchsheel Park, South Delhi, Sushant Lok, and Tata Primanti, Gurgaon, we pride ourselves on delivering exceptional results. Our approach ensures that your implants look and feel like natural teeth while preserving the health of surrounding teeth. Implants prevent bone loss, maintain facial structure, and help distribute chewing forces evenly, thereby protecting your remaining teeth from excessive strain. They are fixed in place, eliminating the need for removal and avoiding issues such as sensitivity or the need for fillings.",
          },
          {
            title: "The Comprehensive Implant Placement Process",
            description: "Your journey to a perfect smile begins with a thorough consultation with Dr. Dheeraj Setia and his expert team. We take the time to understand your needs and tailor a bespoke treatment plan. The planning phase involves detailed imaging and three-dimensional assessments to ensure precise implant placement.",
          },
        ],
        benefitTitle: "Benefits of Implants",
        benefits: [
          {
            // "image": "/img/implants/standardImplant.svg",
            "title": "Standard Dental Implants",
            "description": "Standard dental implants are the most common type, providing a reliable and durable solution for replacing missing teeth. Made from titanium, they offer excellent integration with the jawbone and support for long-term restoration."
          },
          {
            // "image": "/img/implants/miniImplant.svg",
            "title": "Mini Dental Implants",
            "description": "Mini dental implants are smaller in diameter than standard implants, making them ideal for areas with limited bone structure. They offer a less invasive option with quicker recovery times and are often used for stabilizing dentures."
          },
          {
            // "image": "/img/implants/allOn4.svg",
            "title": "All-on-4 Implants",
            "description": "All-on-4 implants involve placing four strategically positioned implants to support a full arch of teeth. This method minimizes the need for bone grafting and provides a stable, functional, and aesthetically pleasing solution for full-mouth restoration."
          },
          {
            // "image": "/img/implants/subperiostealImplant.svg",
            "title": "Subperiosteal Implants",
            "description": "Subperiosteal implants are placed under the gum but above the jawbone. They are suitable for patients with insufficient bone height who cannot undergo bone grafting. This type provides a stable foundation for prosthetics with minimal discomfort."
          },
          {
            // "image": "/img/implants/zirconiaImplant.svg",
            "title": "Zirconia Implants",
            "description": "Zirconia implants are made from a biocompatible ceramic material, offering a metal-free alternative to traditional titanium implants. They are known for their natural appearance and strength, making them ideal for those with metal sensitivities."
          }
        ],
        extraInfo: {
          title: "Experience Cutting-Edge Comfort with Our Advanced Dental Implant Technology",
          description: "At Dental Solutions, we are dedicated to transforming your dental implant experience with the latest advancements in dental technology. Our state-of-the-art clinic ensures a smooth and comfortable journey from start to finish. We offer pain-free procedures using local anesthesia, prioritizing your comfort and relaxation throughout the process. Our clinic is outfitted with high-tech diagnostic tools, enabling precise and efficient treatment planning. We maintain the highest standards of cleanliness with our built-in air purification system and rigorous medical-grade sterilization protocols, ensuring a safe environment for every patient.",
        },
        features: [
          "Custom-Fit for Natural Integration: Each dental implant is carefully designed and placed to seamlessly integrate with your natural bone structure and gum tissue. This customization ensures a natural appearance and optimal function, blending harmoniously with your existing teeth.",
          "High-Quality Titanium and Materials: We use premium-grade titanium for the implant posts, which provides exceptional strength and biocompatibility. The crowns placed on top are crafted from advanced materials that mimic the translucency and sheen of natural teeth, ensuring both aesthetic appeal and durability.",
          "Long-Term Durability: Dental implants are known for their robustness and longevity. With proper care, they can last for decades, offering a stable and reliable solution for replacing missing or damaged teeth. This long-lasting nature means fewer replacements and a stable, confident smile.",
          "Minimal Maintenance Required: Caring for your dental implants is straightforward. Routine brushing, flossing, and regular dental check-ups are typically sufficient to maintain their function and appearance. Implants are resistant to staining and wear, reducing the need for extensive upkeep.",
          "Enhanced Aesthetic and Functional Benefits: Implants not only restore the functionality of your smile but also enhance your overall facial aesthetics. They can improve the alignment and symmetry of your teeth, contributing to a balanced and pleasing appearance that complements your unique facial features.",
          "Bone Preservation and Structural Support: Implants help preserve the jawbone by preventing bone loss that typically occurs with missing teeth. By maintaining the bone structure, implants support surrounding teeth and help maintain facial contours, ensuring long-term oral health and stability."
        ],
      },
      {
        title: 'Laser Dentistry',
        sid: 'laser-dentistry',
        category: "surgical",
        description: 'In recent years, laser dentistry has superseded  many traditional dentistry practices',
        image: '/img/products/laser.jpg',
        long_description: "In recent years, laser dentistry has revolutionized traditional practices, offering precision and reducing discomfort. At Dental Solutions, with locations in Panchsheel Park New Delhi, Sushant Lok Gurgaon, and Tata Primanti Sohna Road, we leverage cutting-edge dental lasers to enhance a wide range of treatments. Our team is dedicated to incorporating the latest advancements to provide superior care and optimal patient outcomes.",
        questions: [
          {
            title: "Embracing Advanced Laser Dentistry",
            description: "In recent years, laser dentistry has revolutionized traditional practices, offering precision and reducing discomfort. At Dental Solutions, with locations in Panchsheel Park New Delhi, Sushant Lok Gurgaon, and Tata Primanti Sohna Road, we leverage cutting-edge dental lasers to enhance a wide range of treatments. Our team is dedicated to incorporating the latest advancements to provide superior care and optimal patient outcomes.",
          },
          {
            title: "Precision in Periodontal Disease Treatment",
            description: "Our use of lasers extends to treating periodontal disease, where the technology plays a crucial role in improving patient experiences. By employing lasers, we vaporize infected tissue, effectively disinfecting the area while promoting tissue regeneration. The laser's ability to seal blood vessels and nerve endings minimizes post-procedure pain and accelerates healing.",
          },
          {
            title: "Sculpting Your Smile with Gum Contouring",
            description: "Lasers are ideal for refining your gumline, whether you're addressing a gummy smile or preparing for a dental crown. By using lasers for gum contouring, we create a more balanced and aesthetically pleasing gumline, contributing to a more symmetrical smile.",
          },
          {
            title: "Expanding Soft Tissue Applications",
            description: "Our dental lasers are versatile tools for a range of soft tissue treatments. From exposing unerupted permanent teeth in children to performing frenectomies and removing tissue from partially exposed wisdom teeth, we continuously explore new uses for laser technology. Additionally, lasers are effective in treating canker sores and other oral lesions.",
          },
          {
            title: "Innovative Hard Tissue Treatments",
            description: "Laser technology also extends to hard tissue applications. We use lasers to remove tooth decay without the need for traditional drilling, preparing enamel for composite resin fillings. Lasers are highly efficient in excavating deep pits and fissures in molars before applying sealants. By effectively etching tooth enamel, lasers improve the surface for bonding and sealant application.",
          },
        ],
        extraInfo: {
          title: "A New Era of Pain-Free Dental Treatments",
          description: "In Delhi NCR, Dental Solutions is at the forefront of revolutionizing dental care with cutting-edge laser technology. Imagine a dental experience free from the fear of noisy drills and discomfort. Laser dentistry transforms routine procedures—such as gum contouring, cavity fillings, and root canal treatments—into quicker, more precise, and remarkably comfortable experiences.",
        },
        features: [
          "At Dental Solutions in New Delhi and Gurgaon, our team is expertly trained in performing a comprehensive range of dental procedures with exceptional care, whether utilizing advanced laser technology or traditional methods. While every procedure is handled with the utmost precision, laser dentistry offers distinct advantages over conventional techniques.",
          "Laser technology provides unparalleled accuracy, often surpassing traditional scalpel precision. The thermal energy from the laser beam not only cuts but also cauterizes blood vessels simultaneously. This results in reduced bleeding, improved visibility of the surgical site, and a significant decrease in downtime and discomfort following the procedure.",
          "With Dental Solutions, you can say goodbye to discomfort and embrace the future of dental care. Our skilled team harnesses the power of lasers to provide outstanding results in both gum health and tooth restoration. Don’t let fear or anxiety prevent you from achieving optimal oral health. Contact Dental Solutions and experience firsthand the transformative benefits of laser dentistry. Your journey to a healthier, more confident smile begins with us.",
          "Our expertise in laser dentistry ensures you receive top-tier care and a more relaxed visit, transforming your dental experience into something you can look forward to. Bid farewell to the anxiety of past dental visits and step into a new era of pain-free, efficient treatments."
        ],
        extraInfo2: {
          title: "Discover the Advantages of Laser Dentistry",
          description: "Laser dentistry brings a host of benefits that significantly enhance the overall dental experience. Here’s how it makes a difference",
        },
        features2: [
          "Accelerated Healing and Tissue Regeneration Laser technology promotes quicker healing by stimulating tissue regeneration. This means your mouth recovers faster, with less discomfort compared to traditional methods.",
          "Preservation of Natural Tooth Structure Lasers allow for precise treatment, preserving more of your natural tooth. This is crucial for maintaining the integrity and strength of your teeth.",
          "Minimal Bleeding During and After Treatment The laser’s thermal energy cauterizes blood vessels as it cuts, which minimizes bleeding during the procedure and reduces post-treatment bleeding.",
          "Reduced Need for Anesthesia Laser procedures often require less anesthesia, making the treatment more comfortable and less invasive. This is particularly beneficial for patients who are sensitive to numbing agents.",
          "Less Need for Stitches and Sutures With lasers, many procedures that traditionally require stitches can now be performed without them. This results in less discomfort and a quicker recovery time.",
          "Lower Risk of Bacterial Infections The laser’s precision and its ability to sterilize the treatment area reduce the risk of bacterial infections after the procedure, promoting a cleaner and healthier healing process."
        ]
      },
      {
        title: 'Smile Makeovers',
        sid: 'smile-makeovers',
        category: "cosmetic",
        description: 'Hollywood smile makeovers treatment',
        image: '/img/products/smile.jpg',
        long_description: "",
        questions: [
          {
            title: "Is a Smile Makeover the Right Choice?",
            description: "Considering a smile makeover but unsure if it’s the best option for you? At Dental Solutions, we offer comprehensive evaluations to determine if a makeover aligns with your needs. Our team is dedicated to addressing a wide range of oral health and cosmetic concerns, and we’ll provide you with honest advice and explore all potential treatments to ensure you receive the best care.",
          },
          {
            title: "How We Design Your Perfect Smile",
            description: "Transform your smile into a Hollywood-worthy masterpiece at Dental Solutions. We begin with a thorough clinical evaluation of your teeth and gums, complemented by professional photographs and videos. Using advanced digital and 3D smile design technology, we meticulously craft the smile you’ve always dreamed of. Our clinic in New Delhi and Gurgaon is equipped with cutting-edge techniques and treatments such as dental veneers and laminates. Our skilled team ensures that your smile makeover is both precise and tailored to your unique needs, all while prioritizing your comfort and safety.",
          },
          {
            title: "Post-Makeover Eating and Drinking",
            description: "The ability to eat and drink immediately after a smile makeover varies depending on the procedures performed. For instance, if you’ve had dental implants, we may recommend sticking to soft foods and avoiding chewy, crunchy, or sticky items for a day or two. Our team will provide specific aftercare instructions to ensure a smooth recovery.",
          },
          {
            title: "The Benefits of a Smile Makeover",
            description: "A smile makeover can significantly enhance your confidence and overall well-being. Addressing issues such as cracks, chips, misalignment, crowding, or staining can not only improve your appearance but also reduce the risk of oral health problems. With our state-of-the-art solutions, we can completely rejuvenate your smile, helping you feel more confident and revitalized.",
          },
          {
            title: "Are Smile Makeover Procedures Painful?",
            description: "Thanks to advancements in dental technology, most procedures are minimally uncomfortable. Anesthesia is used to numb the treatment area, and over-the-counter pain relief can manage any post-procedure discomfort. Typically, any soreness subsides within 24-48 hours, allowing you to enjoy your new smile with minimal disruption.",
          },
          {
            title: "Can Teenagers Get a Smile Makeover?",
            description: "Absolutely. Provided your teeth and gums are healthy, a smile makeover can be a fantastic option for teenagers. A beautiful smile can greatly enhance self-esteem and social interactions during these formative years. If you’re a teenager or a parent considering a smile makeover, consult with us to explore the best options for achieving the smile you want.",
          },
          {
            title: "How Long Does a Smile Makeover Take?",
            description: "The duration of a smile makeover varies based on the complexity of the procedures and the extent of the changes desired. Some makeovers can be completed in a single visit, while others may require several appointments. We will work with you to develop a timeline that fits your schedule and meets your smile goals.",
          },
        ],
        extraInfo: {
          title: "Transform Your Smile, Transform Your Life",
          description: "A smile is often the centerpiece of your personality and a key factor in how you perceive yourself. A radiant, confident smile not only enhances your own happiness but also positively impacts those around you. At Dental Solutions, our goal is to not only perfect your smile but also to foster a positive outlook on life. We are driven by the desire to bring joy to our patients, continuously improving our services and embracing cutting-edge technology to make a meaningful difference in your life. Let us help you shine brighter and feel more confident every day."
        },
        features: [
          "Tailored Treatments for Your Unique Smile: Each treatment is customized to meet your specific needs and goals, ensuring that your new smile perfectly complements your individual features and enhances your natural beauty.",
          "State-of-the-Art Technology: We use the latest advancements in dental technology to deliver precise, efficient, and comfortable treatments. From digital imaging to advanced laser technology, our tools ensure optimal results.",
          "Expert Care and Personal Attention: Our experienced team provides personalized care, addressing all your concerns and working closely with you to achieve the smile you’ve always dreamed of. We prioritize your comfort and satisfaction throughout the entire process.",
          "Comprehensive Smile Solutions: Whether you need veneers, implants, whitening, or other cosmetic enhancements, we offer a wide range of services to address various dental concerns and achieve a complete smile makeover.",
          "Commitment to Your Well-Being: We focus on not just enhancing your smile but also improving your overall well-being. Our goal is to boost your confidence and self-esteem, making you feel great both inside and out.",
          "Long-Lasting Results: Our treatments are designed to provide durable and aesthetically pleasing results. With proper care, your new smile will continue to shine brightly for years to come, bringing ongoing joy and satisfaction."
        ],
        extraInfo2: {
          title: "Does Dental Insurance Cover the Cost of Smile Makeovers?",
          description: "Dental insurance typically provides limited coverage for cosmetic procedures like smile makeovers. Most insurance plans classify these treatments as elective or aesthetic enhancements rather than essential dental care. As a result, coverage is often minimal, if available at all. However, don’t let this deter you from achieving your dream smile. Numerous financing options are available to help you manage the costs of a smile makeover. These flexible payment plans allow you to spread the cost over an extended period, making it easier to fit the investment into your budget. At Dental Solutions, we are committed to helping you explore all available options to make your smile transformation as accessible and affordable as possible. Reach out to our team to discuss how we can assist you in achieving the smile you deserve."
        }
      },
      {
        title: 'Kids Dentistry',
        sid: 'kids-dentistry',
        category: "general",
        description: 'Trusted pediatric dentistry at the Dental Solutions',
        image: '/img/products/kids.jpg',
        long_description: "Welcome to Dental Solutions, where we warmly invite parents and children alike, because we believe that kids bring joy to every environment—and our clinic is no exception. At Dental Solutions, we are dedicated to providing top-notch dental care for children of all ages, from toddlers to teenagers. Our highly skilled pediatric dentists ensure that every dental visit is stress-free, relaxing, and positive for your child. So, if you're searching for a trusted pediatric dental clinic near you, we’re here to help. We pride ourselves on creating a welcoming atmosphere with a friendly, caring team and in-chair entertainment to keep your child engaged and comfortable. Our dentists take the time to explain treatments in a way that your child can understand, making dental care a fun and educational experience rather than a fearful one. Additionally, Dental Solutions offers emergency pediatric dental appointments for any urgent situations. Whether it's a fall, toothache, or dental injury, we’re here to help your child feel better and put things right. We're committed to making every trip to the dentist an enjoyable experience for your little ones!",
        questions: [
          {
            title: "Welcoming Smiles for Every Child at Dental Solutions",
            description: "At Dental Solutions, we know that children bring a special kind of joy, and we are committed to making every visit to our clinic a delightful experience. Our expert pediatric dentists are dedicated to providing high-quality dental care that caters specifically to the needs of kids, toddlers, and teenagers. We strive to create a relaxing and stress-free environment where your child feels at ease, with a friendly team and engaging in-chair entertainment to make dental visits enjoyable rather than intimidating.",
          },
          {
            title: "Pediatric Dental Care Tailored for Your Child",
            description: "Comprehensive Pediatric Dentistry: Our pediatric dentists, or pedodontists, specialize in the unique dental needs of children. They focus on developing healthy oral habits, monitoring dental health, and providing early intervention when necessary, including the potential need for braces. Early Positive Dental Experiences: Introducing your child to dental care at an early age helps them build a positive association with the dentist. Regular visits ensure that your child’s teeth and gums are healthy, and advancements in dental technology make it possible to prevent issues before they arise.",
          },
          {
            title: "Preventive Care for Healthy Smiles",
            description: "Dental Cleanings: Our thorough cleanings use specialized tools to remove hardened plaque that regular brushing can’t tackle. We also check for early signs of dental issues, making sure they’re addressed before they become serious. Our team is gentle and experienced in making cleanings a fun experience for your child. Fluoride Treatments: Fluoride is essential for strengthening and protecting your child's teeth against decay. We offer tasty fluoride treatments that fit seamlessly into your child’s preventative care routine. Dental Sealants: These thin, plastic coatings protect the grooves of the teeth from decay, making them easier to clean and less prone to plaque build-up. Sealants create a smooth surface that safeguards your child’s teeth from cavities.",
          },
          {
            title: "Diagnostic Care for Early Detection",
            description: "Dental Check-ups: Regular check-ups, recommended every six months, are crucial for maintaining oral health. These exams help us catch potential problems early, protecting against gum disease, tooth loss, and other conditions. Digital X-rays: Our state-of-the-art digital X-ray technology provides detailed images of your child's teeth, bones, and supporting tissues. This modern diagnostic tool allows us to quickly and accurately assess your child's dental health, all within the comfort of our clinic.",
          },
          {
            title: "Emergency Dental Care for Kids",
            description: "In case of a dental emergency, such as a fall or toothache, we offer prompt and effective care to address urgent issues and get your child back to smiling in no time. At Dental Solutions, our goal is to ensure that every child receives the best dental care while feeling relaxed and happy. From routine visits to emergency care, we are here to support your child’s dental health with compassion and expertise.",
          },
        ],
        extraInfo: {
          title: "What to Expect During Your Child’s First Dental Visit",
          description: "At Dental Solutions, we aim to make your child’s first visit to our dental center a positive and reassuring experience. Our goal is to create a welcoming and supportive environment that makes your child’s first dental visit a smooth and enjoyable experience. At Dental Solutions, we are here to support both you and your child every step of the way in their journey to excellent oral health. Here’s what typically happens during this important initial appointment:"
        },
        features: [
          " Timing of the First Visit: We recommend scheduling your child’s first “regular” dental check-up no later than their first birthday. Early visits help ensure that your child’s dental health is off to a great start.",
          "Gentle Examination: Our team will gently and carefully examine your child’s teeth and gums. This thorough yet gentle approach helps us assess their oral health and address any concerns in a comfortable manner.",
          "X-rays for Comprehensive Assessment: To get a complete picture of your child’s dental development, we may take X-rays. These images help us detect any early signs of decay and monitor the growth of facial bones and permanent teeth beneath the gums.",
          "Fluoride Application: To assist in preventing tooth decay, we will apply topical fluoride. We’ll also discuss with you how to ensure your child is getting the right amount of fluoride at home for optimal dental health.",
          "Oral Hygiene Guidance: One of the most important aspects of the visit is discussing proper brushing and care techniques. We’ll provide you with detailed instructions on how to care for your child’s teeth, ensuring they develop healthy brushing habits from a young age.",
        ],
        extraInfo2: {
          title: "Our Restorative Care",
          description: "Pediatric restorative dentistry can help improve the appearance and overall health of a child’s smile after experiencing tooth loss or damage from disease, injury, or other causes. It is important to seek proper treatment and dental reconstruction for lost or damaged teeth in order to prevent further damage and relieve difficulties with eating or speaking.",
        },
        features2: [
          "Composite Fillings: Our composite fillings are a top choice for restoring your child's teeth. Made from durable, metal-free materials, these fillings blend seamlessly with their natural smile. They are designed to provide a strong and reliable solution for cavities while maintaining the aesthetic appearance of your child's teeth.",
          "Pulpotomies and Crowns: When a baby tooth is severely damaged, decayed, or infected, a pulpotomy—essentially a baby root canal—may be necessary. We perform these procedures with utmost care, followed by placing robust crowns to restore the tooth. These crowns are crafted to ensure that the tooth remains functional for biting and chewing. Without a crown, the tooth might need to be extracted, but our goal is to preserve it for as long as possible, maintaining your child’s dental health and function.",
          "Tooth Extraction: At Dental Solutions, we prioritize conservative treatments and consider extractions only as a last resort. If an extraction is needed, we ensure that the procedure is as comfortable and painless as possible for your child. Our pediatric dental center in Gurgaon and New Delhi is dedicated to providing gentle and thoughtful care tailored to the unique needs of young patients. If you’re searching for a compassionate and skilled pediatric dentist, schedule a consultation with us today."
        ]
      },
      {
        title: 'Painless Tooth Extraction',
        sid: 'painless-tooth-extractions',
        category: "surgical",
        description: 'Painless tooth extraction in Delhi NCR, India',
        image: '/img/products/toothextraction.jpg',
        long_description: "At Dental Solutions, we understand that tooth extractions can be a daunting experience for both children and parents. That's why we prioritize a painless and stress-free approach to tooth removal. Our skilled team uses the latest techniques and state-of-the-art technology to ensure that the extraction process is as gentle as possible. We begin by administering a local anesthetic to numb the area, ensuring that your child remains completely comfortable throughout the procedure. We employ minimally invasive methods to carefully remove the tooth while preserving the surrounding tissue. Our goal is to make the experience as smooth and painless as possible, with minimal discomfort during and after the procedure. Post-extraction, we provide clear instructions and supportive care to aid in a swift and uneventful recovery. Whether it's for a damaged, decayed, or impacted tooth, our focus is on maintaining your child’s comfort and well-being. If you have concerns about your child's dental health or need a reliable and compassionate dentist for tooth extractions, Dental Solutions is here to provide exceptional care and support.",
        questions: [
          {
            title: "Maintaining Oral Health with Tooth Extractions",
            description: "When a tooth is beyond repair through fillings, crowns, or root canals, a dental extraction may become necessary. At our practice, we are committed to providing a thorough diagnosis and clear guidance, ensuring you are well-informed and comfortable with the process. We understand that the prospect of a tooth extraction can be stressful and anxiety-inducing. Rest assured, we offer various sedation options to ensure your comfort throughout the procedure. Our priority is to support you every step of the way. Tooth extraction is not our first choice. We explore all restorative options to preserve your natural tooth as long as possible. However, extraction might be recommended for teeth that are severely decayed, cracked, or damaged, causing intense pain, or contributing to crowding issues. Using advanced digital imaging technology, we carefully assess the condition of your tooth to make informed decisions regarding the necessity of removal.",
          },
          {
            title: "Understanding Tooth Extraction Socket Preservation",
            description: "Following a tooth extraction, an empty socket is left where the tooth once was. If this socket is not properly maintained, the supporting bone may resorb and become thin, which can complicate future treatment options such as partial dentures, bridges, or dental implants. Tooth extraction socket preservation involves techniques to minimize bone shrinkage, preserving the bone’s depth and height for better outcomes in future restorative procedures.",
          },
          {
            title: "Benefits of Socket Preservation",
            description: "Socket preservation helps maintain the horizontal facial bone structure, reducing the likelihood of requiring a replacement denture or a reline due to bone and gum shrinkage. It also minimizes gap formation under the pontic of a bridge and improves bone depth and height, enhancing the prognosis for dental implant placement and potentially reducing the need for future bone grafts. Additionally, immediate bone grafting can save up to six months of healing time compared to grafting performed after the socket has healed and shrunk.",
          },
        ],
        extraInfo: {
          title: "The Tooth Extraction Procedure: What to Expect",
          description: "During a tooth extraction at our clinic, your comfort and well-being are our top priorities. Here’s a step-by-step overview of what you can expect during the procedure:"
        },
        features: [
          "Anesthesia and Comfort: To ensure you remain comfortable throughout the extraction, we begin by administering a local anesthetic. This numbs the area around the tooth, allowing you to stay awake but pain-free during the procedure. We prioritize your comfort, so you should not experience any pain, though you may feel some pressure or movement.",
          "Procedure Duration: The duration of the tooth extraction procedure can vary depending on several factors, including the complexity of the extraction and the tooth’s location. While some extractions may be completed in as little as 5 minutes, more complex cases could take up to 30 minutes. We will provide an estimate of the time required before the procedure begins, so you are fully informed.",
          "Extraction Technique: The extraction process involves widening the tooth socket to facilitate the removal. We gently rock the tooth back and forth to loosen it from its socket. Once adequately loosened, the tooth is carefully extracted. Our skilled team ensures that the procedure is performed with precision to minimize discomfort and promote a smooth recovery.",
          "Aftercare and Recovery: Following the extraction, we will provide you with detailed aftercare instructions to support your recovery. This includes guidance on managing any post-procedure discomfort, keeping the extraction site clean, and monitoring for any signs of complications. Our goal is to ensure a swift and comfortable healing process."
        ],
        extraInfo2: {
          title: "Elevate Your Oral Health with Dental Solutions",
          description: "In conclusion, Dental Solutions is your premier destination for exceptional dental care in Delhi NCR, dedicated to making high-quality oral health accessible and affordable for all. We are committed to providing clear and comprehensive guidance on tooth extraction procedures, treatment options, and associated costs, ensuring that you have a thorough understanding of your dental care journey. At Dental Solutions, we recognize that every patient’s needs are unique. During our personalized consultations, our experienced dentists conduct a thorough assessment of your specific situation. We take the time to discuss a tailored treatment plan, answer all your questions, and provide a transparent breakdown of costs, ensuring that you are fully informed and comfortable with your dental care decisions. Your oral health and satisfaction are our top priorities, and we strive to deliver exceptional care that enhances your overall well-being.",
        },
        features2: [
          "Gauze Pad Placement: A gauze pad will be placed in the socket to control bleeding and aid in clotting.",
          "Medications and Instructions: Our team will provide specific medications and detailed aftercare instructions based on your individual needs.",
          "Healing Time: Typically, the extraction site will heal within 1-2 weeks with proper care, though it may take longer for wisdom teeth or multiple extractions.",
          "Single or Multiple Extractions: One or more teeth can be removed during a single appointment. The choice will be based on your situation and preferences.",
          "Wisdom Tooth Extraction: Many patients in Delhi NCR prefer to have all necessary wisdom teeth extracted in one visit to minimize downtime.",
          "Replacement Options: We offer a variety of solutions to replace extracted teeth, ensuring you can restore your smile and maintain oral health."
        ]
      },
      {
        title: 'Teeth Whitening',
        sid: 'teeth-whitening',
        category: "cosmetic",
        description: 'Bring back  the glow  of your smile - safe, effective, and fast with long-lasting white',
        image: '/img/products/teethwhite.jpg',
        long_description: "Transform your smile with our professional teeth whitening services at Dental Solutions. Teeth whitening is an effective cosmetic procedure designed to remove stains and brighten your teeth, giving you a radiant, youthful appearance.",
        questions: [
          {
            title: "Illuminate Your Smile with Professional Teeth Whitening",
            description: "Nothing enhances your appearance like a radiant, pearly white smile. At Dental Solutions, we offer dentist-guided whitening treatments that are not only safe and effective but also deliver noticeable results in just a single visit.",
          },
          {
            title: "Why Choose Professional Teeth Whitening?",
            description: "Professional whitening treatments are designed to rejuvenate your smile, restoring its brilliance and brightness. This one-time procedure, performed by our expert dentists at Dental Solutions in New Delhi and Gurgaon, is among the most popular and effective cosmetic enhancements available. A vibrant smile is one of your most valuable assets—often the first thing people notice. It can significantly boost your self-confidence and leave a lasting impression. Over time, factors like coffee, tea, soda, and smoking can stain and dull your teeth. Fortunately, these stains don’t have to be permanent. At Dental Solutions, we use Philips ZOOM Whitening, a leading whitening brand requested by patients for its exceptional results. Zoom! Laser Teeth Whitening: Brilliant Results in a Single Visit Zoom! Laser Teeth Whitening is the cutting-edge treatment our cosmetic dentists use to achieve dramatic improvements in tooth color. This advanced in-office whitening technique can lighten your teeth by several shades in just one hour. During the treatment, a specially formulated bleaching solution is applied to your teeth using custom-designed trays. A laser then gently heats the solution, activating oxygen molecules that penetrate the enamel to dissolve stains. This process effectively targets extrinsic stains and can tackle more severe discoloration.",
          },
        ],
        extraInfo: {
          title: "Transform Your Smile with Expert Teeth Whitening",
          description: "Experience affordable and comfortable teeth whitening at Dental Solutions,  in Delhi NCR. Our skilled cosmetic dentists offer a quick, painless treatment that can enhance your smile in just one hour. With state-of-the-art technology and a commitment to patient comfort, we provide safe and effective whitening tailored to your needs. Book your appointment today and enjoy a brighter, more confident smile with Dental Solutions.",
        },
        features: [
          "Dental Solutions offers the most cost-effective and comfortable teeth whitening treatments in Delhi NCR. Performed by skilled cosmetic dentists, our professional teeth whitening procedure is a quick, painless, and highly effective way to rejuvenate your smile in just one hour. At Dental Solutions, we prioritize both efficiency and patient comfort, ensuring that every treatment is tailored to meet your individual needs. Our state-of-the-art facilities and well-trained team provide a safe and relaxing environment, where you can achieve noticeable results without any discomfort.",
          "As the leading dental clinic in Delhi NCR, Dental Solutions utilizes the latest advancements in teeth whitening technology to deliver outstanding results. Whether you're dealing with stubborn stains from coffee, tea, or lifestyle factors, our personalized care guarantees a brighter, whiter smile. We are committed to transparent communication and patient satisfaction, guiding you through every step of the process to ensure you feel informed and at ease.",
          "For those looking for a reliable and effective solution to enhance their smile, Dental Solutions is your top choice. With a reputation for excellence and attention to detail, we make achieving a radiant smile easier and more comfortable than ever. Book your appointment today and experience the difference of professional teeth whitening at Dental Solutions—where your best smile awaits!",
        ],
      },
      {
        title: 'Painless Wisdom Tooth Extraction',
        sid: 'painless-wisdom-tooth-extraction',
        category: "surgical",
        description: 'A surgial procedure to remove one or more wisdom teeth',
        image: '/img/products/wisdom.jpg',
        long_description: "At Dental Solutions, we specialize in providing a seamless and pain-free wisdom tooth extraction experience. Our goal is to ensure that your procedure is as comfortable and stress-free as possible, utilizing the latest techniques and anesthesia options to minimize discomfort.",
        questions: [
          {
            title: "What is Wisdom Tooth Removal?",
            description: "Wisdom tooth removal is a surgical procedure designed to extract one or more wisdom teeth, the last set of molars that typically emerge in late adolescence or early adulthood. At Dental Solutions, our primary goal is to maintain the health and strength of your natural teeth for life. Located in Gurgaon and South Delhi, our multi-specialty center features a team of skilled Oral and Maxillofacial Surgeons who are experts in handling wisdom tooth extractions and other jaw-related disorders.",
          },
          {
            title: "Wisdom Teeth Treatment in Delhi NCR ",
            description: "At Dental Solutions, wisdom tooth extraction is recommended only when necessary—typically in cases of impaction or crowding. If your wisdom teeth are correctly positioned and not causing discomfort, extraction may not be needed. However, when extraction is required, it is generally performed in a single session under local anesthesia to ensure a painless experience. Our Oral and Maxillofacial Surgeons, specializing in the diagnosis and treatment of conditions related to teeth, jaws, and facial structures, will ensure your procedure is as comfortable and efficient as possible. We provide detailed post-treatment care instructions to support a swift recovery.",
          },
          {
            title: "What Causes an Impacted Wisdom Tooth?",
            description: "Wisdom teeth often become impacted because they are the last to emerge and there may not be sufficient space in the jaw for them to come through properly. Impacted wisdom teeth can grow in the wrong direction, leading to partial or full impaction.",
          },
          {
            title: "How is an Impacted Wisdom Tooth Diagnosed?",
            description: "At Dental Solutions, we utilize advanced diagnostic tools, including an in-house OPG and CT scan machine, to accurately assess the position and condition of your wisdom teeth. X-rays help us determine if the teeth are impacted and whether they have caused any damage to surrounding teeth or bone. Based on these findings, we will discuss the benefits and risks of surgical extraction with you.",
          },
          {
            title: "What are the Symptoms of an Impacted Wisdom Tooth?",
            description: "Symptoms of an impacted wisdom tooth can vary. Some patients may experience no symptoms, while others may notice discomfort or pain. Common signs of an impacted wisdom tooth include: Pain or swelling around the jaw, Red, swollen, or bleeding gums, Bad breath, An unpleasant taste in the mouth, Difficulty opening the mouth",
          },
        ],
        extraInfo: {
          title: "How are Impacted Wisdom Teeth Treated?",
          description: "When impacted wisdom teeth cause symptoms or dental issues, surgical extraction is often the recommended treatment. This procedure is typically performed on an outpatient basis, allowing you to return home the same day. Depending on the complexity of the extraction and your comfort level, various types of anesthesia may be used to ensure a smooth and pain-free experience:",
        },
        features: [
          "Local Anesthesia: This numbs the specific area around your wisdom teeth, ensuring you remain comfortable while fully awake during the procedure.",
          "Sedation Anesthesia: This option helps you relax and blocks pain, making the procedure more comfortable and reducing anxiety, while you remain partially conscious.",
          "General Anesthesia: For more complex cases or if you prefer to be completely unaware of the procedure, general anesthesia is used to make you sleep throughout the extraction, so you don’t feel any pain or discomfort."
        ],
        extraInfo2: {
          title: "Recovery and Care After Wisdom Tooth Extraction",
          description: "Most people can resume their normal activities within a few days following wisdom tooth extraction, though complete healing of your mouth may take up to six weeks. For the first 4 to 5 days, a diet of soft foods is recommended to facilitate healing. Post-Surgery Care:",
        },
        features2: [
          "Pain, Bleeding, and Swelling: It is normal to experience some discomfort, bleeding, and swelling after the procedure. Your dentist will provide specific instructions for managing these symptoms, including recommendations for pain medication and the use of cold compresses.",
          "Dry Socket: Although rare, a condition known as dry socket may occur if the blood clot that forms in the extraction site is dislodged or fails to develop properly, exposing the bone. If you suspect you have a dry socket, contact your dentist immediately for treatment."
        ]
      },
      {
        title: 'Dentures',
        sid: 'dentures',
        category: "general",
        description: 'Find the right denture for you!',
        image: '/img/products/dentures.jpg',
        long_description: "Dentures are removable dental appliances designed to replace missing teeth and restore the function and appearance of your smile. Whether you need a full set of dentures or partial dentures to replace a few missing teeth, they offer a practical and effective solution to improve oral health and confidence.",
        benefitTitle: "Benefits of Dentures ",
        benefits: [
          {
            "image": "/img/productBenefits/invisible.svg",
            "title": "Restored Function",
            "description": "Dentures help you eat and speak more comfortably, allowing you to enjoy a varied diet and communicate clearly."
          },
          {
            "image": "/img/productBenefits/invisible.svg",
            "title": "Enhanced Appearance",
            "description": "Custom-designed to match the natural color and shape of your teeth, dentures improve your smile and overall facial aesthetics."
          },
          {
            "image": "/img/productBenefits/invisible.svg",
            "title": "Comfort and Fit",
            "description": "Modern dentures are crafted for a comfortable fit and natural look, with advanced materials and techniques ensuring durability and ease of use."
          },
        ],
        questions: [
          {
            title: "Types of Dentures:",
            description: "Full Dentures: Used when all of the natural teeth are missing, full dentures rest on the gums and are supported by the underlying bone. They are custom-made to fit snugly and look natural, providing a complete restoration of your smile.",
          },
          {
            title: "",
            description: "Partial Dentures: Ideal for those who still have some natural teeth, partial dentures fill in the gaps left by missing teeth. They are designed to blend seamlessly with your existing teeth and are anchored in place using clasps or other attachments.",
          },
          {
            title: "Getting Your Dentures",
            description: "The process of getting dentures involves several steps, including a thorough examination, impressions of your mouth, and fittings to ensure the best possible fit. Our experienced team at Dental Solutions will guide you through each stage, from selecting the right type of dentures to adjusting them for optimal comfort."
          }
        ],
        extraInfo: {
          title: "Tips and Advice for Caring for Your Dentures",
          description: "Proper care and maintenance of your dentures are essential to ensure their longevity and your continued oral health. With the right practices, you can keep your dentures clean, comfortable, and functional. Here are some helpful tips to keep your dentures in excellent condition:",
        },
        features: [
          "Clean Daily: Brush your dentures daily with a denture brush and mild denture cleaner to remove food particles and plaque. Avoid using regular toothpaste, as it can be too abrasive and damage the denture material.",
          "Rinse After Meals: Rinse your dentures with water after eating to remove loose food particles and prevent stains. This simple step helps keep them fresh and clean.",
          "Soak Overnight: Place your dentures in a denture cleaning solution or plain water overnight. This helps maintain their shape, prevents warping, and keeps them moist.",
          "Handle with Care: When cleaning or handling your dentures, do so over a soft surface, like a towel or basin of water, to prevent accidental damage if they are dropped.",
          "Check for Fit: Regularly check your dentures for signs of looseness or discomfort. If you notice any changes, visit your dentist for adjustments to ensure a proper fit.",
          "Maintain Oral Hygiene: Even with dentures, continue to brush your gums, tongue, and any remaining natural teeth daily. This practice helps prevent oral infections and promotes overall oral health.",
          "Avoid Harsh Chemicals: Refrain from using bleach or other harsh chemicals on your dentures, as they can damage the material. Stick to products specifically designed for denture care.",
          "Regular Dental Visits: Schedule regular check-ups with your dentist to monitor the condition of your dentures and the health of your oral tissues. Regular visits ensure any issues are addressed promptly."
        ]
      },
      {
        title: 'Braces',
        sid: 'braces',
        category: "cosmetic",
        description: 'We perfect  your smile with love, braces, and aligners',
        image: '/img/products/braces.jpg',
        long_description: "Braces are a widely used orthodontic solution designed to correct misaligned teeth and jaw issues, providing a functional and aesthetically pleasing smile. Whether you’re dealing with crowded teeth, gaps, or bite problems, braces can help you achieve a straighter, more harmonious smile.",
        benefitTitle: "Benefits of Braces",
        benefits: [
          {
            "image": "/img/productBenefits/metal.jpg",
            "title": "Traditional Metal Braces",
            "description": "Metal braces are the most common and well-known type of dental braces. They consist of metal brackets and wires, which are highly effective in correcting various dental issues. Despite their traditional appearance, modern metal braces are now more comfortable and less conspicuous than ever before."
          },
          {
            "image": "/img/productBenefits/ceramic.jpg",
            "title": "Ceramic Braces",
            "description": "Ceramic braces, also known as clear braces, are a popular choice for those who want a less noticeable orthodontic treatment option. These braces blend in with the natural color of your teeth, making them a discreet choice while providing excellent results."
          },
          {
            "image": "/img/productBenefits/lingual.svg",
            "title": "Lingual Braces",
            "description": "Lingual braces are hidden behind the teeth, making them completely invisible when you smile. They are custom-made to fit the contours of your teeth and are an excellent choice for those who prefer a concealed orthodontic solution."
          },
          {
            "image": "/img/productBenefits/invisalign.jpg",
            "title": "Invisalign",
            "description": "Invisalign is a revolutionary orthodontic treatment that uses clear, removable aligners to straighten your teeth gradually. It offers the ultimate convenience and aesthetics, as the aligners are virtually invisible."
          },
        ],
        questions: [
          {
            title: "Which Orthodontic Treatment is Right for You?",
            description: "Choosing the right orthodontic treatment depends on your specific needs and preferences. Here’s an overview of the most common options to help you make an informed decision:",
          },
          {
            title: "Metal Braces",
            description: "Metal braces are highly effective for addressing severe crowding and misalignment. They offer precise control over tooth movement, making them a reliable choice for complex cases. However, their most notable feature—metal brackets and wires—can be more visible, which some patients find less desirable.",
          },
          {
            title: "Ceramic Braces",
            description: "Constructed from tooth-colored ceramic or porcelain materials, ceramic braces blend with the natural color of your teeth, making them less noticeable than traditional metal braces. They are effective for moderate cases and often come with wires that match the color of your teeth. The primary drawback is the potential for staining if proper oral hygiene is not maintained.",
          },
          {
            title: "Invisible Braces",
            description: " Clear aligners, also known as invisible braces, are designed for patients who prefer a more discreet option. These removable aligners are custom-made from clear plastic and gradually shift your teeth into place. They offer the advantage of being less noticeable and removable for eating and cleaning, but they can be more expensive, take longer to show results, and may not be suitable for significant dental issues.",
          },
          {
            title: "Lingual Braces",
            description: "Lingual braces are placed on the back surfaces of the teeth, making them virtually invisible from the outside. They are effective for a wide range of orthodontic issues, including complex cases. However, they can be more challenging to maintain and might be uncomfortable initially due to their placement on the tongue side of the teeth.",
          },
          {
            title: "Benefits of Getting Dental Braces in India",
            description: "Enhanced Confidence: A straighter smile can significantly boost your confidence, transforming how you feel in social and professional settings",
          },
          {
            title: "Improved Oral Health",
            description: "Correcting misalignment with braces can prevent and address oral health issues such as gum disease and tooth decay, promoting better overall dental hygiene.",
          },
          {
            title: "Functional Improvements",
            description: "Braces can improve your bite, making chewing and speaking easier, while also alleviating discomfort and jaw pain caused by misaligned teeth.",
          },
          {
            title: "Long-Term Investment",
            description: "Investing in dental braces is not just about improving your appearance but also enhancing your long-term oral health and quality of life. A well-aligned smile contributes to overall well-being and functionality.",
          },
          {
            title: "",
            description: "Whether you’re considering metal, ceramic, invisible, or lingual braces, our expert team at Dental Solutions will help you choose the best option for achieving a beautiful, healthy smile. Schedule a consultation to explore your orthodontic treatment options and start your journey to a more confident you.",
          },
        ],
        extraInfo: {
          title: "Why Orthodontic Treatment is Important",
          description: "Orthodontic treatment plays a crucial role in maintaining optimal oral health and enhancing overall dental function. Misaligned or crowded teeth can lead to several significant issues:",
        },
        features: [
          "Improved Oral Hygiene: Crowded and crooked teeth can make it challenging to maintain proper oral hygiene, increasing the risk of tooth decay, gum disease, and eventual tooth loss. Straightening your teeth makes them easier to clean, reducing the likelihood of these dental problems.",
          "Preventing Abnormal Wear: Misalignment can cause uneven wear on tooth surfaces, leading to premature wear and potential damage. Orthodontic treatment helps distribute bite forces evenly, preventing abnormal wear and protecting your teeth.",
          "Enhanced Chewing Function: Proper alignment improves your ability to chew food efficiently and comfortably. Misaligned teeth can affect your chewing function and lead to discomfort.",
          "Reducing Excessive Stress: Incorrect dental structure can place undue stress on the supporting bone and surrounding tissues, potentially leading to jaw pain and other related issues. Orthodontic treatment corrects these structural imbalances, relieving unnecessary stress."
        ],
        extraInfo2: {
          title: "What Should You Know Before Getting Braces?",
          description: "Before embarking on your journey with braces, there are several important factors to consider to ensure a smooth and successful orthodontic experience:"
        },
        features2: [
          "Braces Are for All Ages: Braces are not just for children or teenagers. Orthodontic treatment can be effective at any age. Whether you’re a teenager or an adult, braces can help address misaligned teeth and achieve a straighter smile.",
          " Choose a Skilled Orthodontist: Selecting a qualified orthodontist is crucial. Orthodontists are specialists trained specifically to correct crooked teeth and manage cosmetic dental issues, offering a level of expertise beyond that of a general dentist.",
          "Treatment Duration and Cost: Orthodontic treatment typically lasts around two years, though this can vary based on individual needs and the complexity of the case. Costs can also vary widely depending on location, the type of braces used, and the facility. Discuss treatment options and financial details with your orthodontist to understand what to expect.",
          " Expect Some Initial Discomfort: It’s normal to experience some discomfort when you first get braces. This usually subsides after a few days. During this adjustment period, stick to soft foods and avoid hard, sticky, or sugary items that could damage the braces.",
          "Be Aware of Potential Allergies: Some individuals may have allergies to materials used in braces, such as nickel or latex. If you have known allergies or sensitivities, inform your orthodontist, who can provide alternative materials to avoid any adverse reactions.",
          "Retainers Are Essential: After completing your orthodontic treatment, retainers will be necessary to keep your teeth in their new positions. These retainers are often clear and discreet, and wearing them as directed will help prevent your teeth from shifting back to their original alignment.",
        ]
      },
      {
        title: 'Dental Bridges',
        sid: 'dental-bridges',
        category: "general",
        description: 'Restore your smile to perfect condition',
        image: '/img/products/dentalbridges.jpg',
        long_description: "Dental bridges are a popular restorative dental solution used to replace one or more missing teeth, restoring both function and appearance. A bridge is a custom-made prosthetic device that literally 'bridges' the gap created by missing teeth. It is anchored by dental crowns placed on the adjacent healthy teeth or implants, filling the space with artificial teeth designed to match your natural ones.",
        benefitTitle: "Benefits of Dental Bridges",
        benefits: [
          {
            title: "Restores Function",
            description: "Dental bridges restore your ability to chew and speak properly, which can be affected by missing teeth. They help maintain your bite and improve overall oral function.",
          },
          {
            title: "Enhances Aesthetics",
            description: "By filling gaps from missing teeth, bridges improve your smile’s appearance and help maintain the natural shape of your face, boosting your confidence.",
          },
          {
            title: "Prevents Teeth Shifting",
            description: "Missing teeth can cause neighboring teeth to shift out of position. A dental bridge helps maintain proper alignment, preventing further dental issues.",
          },
          {
            title: "Durable and Long-Lasting",
            description: "With proper care, dental bridges can last for many years. They are made from durable materials such as porcelain, ceramic, or metal, ensuring a long-lasting solution.",
          },
        ],
        questions: [
          {
            title: "Discover Exceptional Dental Care in Delhi NCR",
            description: "If you're missing one or more teeth and seeking a reliable solution, Dental Solutions is your premier destination for dental bridge treatments in Delhi NCR. Our clinics in Panchsheel Park, New Delhi, Sushant Lok, Gurgaon, and Tata Primanti Sohna Road are equipped to offer world-class dental care with a commitment to excellence and personalized treatment.",
          },
          {
            title: "Why Choose Dental Bridges?",
            description: "Dental bridges are a proven method to replace missing teeth and restore both function and aesthetics. If you: Are missing one or more teeth, Have a strong and stable bite, Prefer a non-surgical solution. Then a dental bridge might be the ideal option for you. Our expert team will evaluate your condition and help you determine if a dental bridge is the right choice for your oral health and future needs.",
          },
          {
            title: "Understanding Dental Bridges",
            description: "Dental bridges effectively 'bridge' the gap left by missing teeth. This procedure involves placing an artificial tooth, or pontic, in the gap, which is anchored securely by crowns attached to the adjacent healthy teeth (abutments). This approach can also involve dental implants for enhanced stability, particularly when multiple teeth are missing.",
          },
          {
            title: "Why Dental Solutions?",
            description: "At Dental Solutions, our experienced dentists use the latest techniques and technology to ensure your dental bridge treatment is effective, comfortable, and aesthetically pleasing. Whether you’re considering a traditional bridge or an implant-supported bridge, our team is dedicated to providing the highest quality care tailored to your needs.",
          },
          {
            title: "Schedule Your Consultation Today",
            description: "Ready to restore your smile with a dental bridge? Contact Dental Solutions for a comprehensive consultation and discover how we can help you achieve a complete and confident smile. Book your appointment today at our clinics in Delhi NCR.",
          },
        ],
        extraInfo: {
          title: "What To Expect When Getting a Bridge",
          description: "Getting a dental bridge is a straightforward process that restores the functionality and appearance of your smile. Here’s a detailed overview of what you can expect during the procedure:",
        },
        features: [
          "Comfort During the Procedure: The entire process is performed under local anaesthesia to ensure you are comfortable and experience no pain.",
          "Preparation of the Tooth:Your dentist will assess the area and may perform additional procedures such as extractions or root canal treatments if necessary to prepare the teeth for the bridge.",
          "Creating the Perfect Fit: An impression of the prepared area will be taken to design a bridge that fits seamlessly into your mouth, ensuring optimal comfort and function.",
          "Temporary Bridge: While your permanent bridge is being crafted, a temporary bridge will be placed to protect your teeth and gums, allowing you to function normally.",
          "Placement of the Permanent Bridge: Once the permanent bridge is ready, it will be placed and secured using special dental cement. Your dentist will check to ensure it fits well and matches the function and appearance of your natural teeth.",
          "Securing the Bridge: The neighboring teeth will be prepared to serve as anchors for the bridge, ensuring a secure and stable fit.",
          "Final Checks:  After placement, your dentist will make final adjustments to ensure the bridge functions correctly and integrates well with your smile."
        ],
        extraInfo2: {
          title: "Caring for Your Dental Bridges",
          description: "Maintaining your dental bridges is essential to ensure their longevity and keep your smile healthy. Proper care involves a few key practices and avoiding certain habits to protect your investment. Here’s how you can take care of your dental bridges effectively:"
        },
        features2: [
          "Do:",
          "Brush Regularly: Use a soft-bristle toothbrush to clean your dental bridges after every meal and snack. This helps remove food particles and plaque, keeping your bridge and surrounding teeth in excellent condition.",
          "Floss Daily: Floss at least once a day to clean between the teeth and around the bridge. Special flossing devices or floss threaders can be used to reach under the bridge, preventing plaque buildup and gum disease.",
          "Regular Check-ups: Schedule and attend dental cleanings every six months at our office. Regular professional cleanings ensure that your bridge is maintained properly and any potential issues are addressed promptly.",
          "Do Not:",
          "Avoid Abrasive Toothpaste: Refrain from using abrasive toothpaste, such as those containing baking soda or charcoal. These can scratch and damage the surface of your bridge, compromising its appearance and function.",
          "Steer Clear of Hard Foods: Do not bite into ice, hard candy, or other hard substances. These can place undue stress on your bridge, potentially causing damage or dislodging it.",
          "Avoid Chewing Non-Food Items: Resist the urge to chew on non-food items like pens or pencils. This habit can harm your bridge and surrounding teeth, leading to discomfort or damage."
        ]
      },
      {
        title: 'Porcelain Crowns',
        sid: 'porcelain-crowns',
        category: "cosmetic",
        description: 'This restoractive procedure uses prosthetic devices to return your smile to its natural state',
        image: '/img/products/crown.jpg',
        long_description: "Porcelain crowns are a popular and effective solution for restoring damaged or weakened teeth, providing both functional benefits and aesthetic appeal. These dental crowns, also known as ceramic crowns, are designed to mimic the natural appearance of your teeth while offering exceptional strength and durability.",
        benefitTitle: "Benefits of Porcelain Crowns",
        benefits: [
          {
            title: "Natural Appearance",
            description: "Porcelain crowns are highly aesthetic and match the color and translucency of natural teeth, creating a seamless and attractive smile.",
          },
          {
            title: "Durability",
            description: "Made from robust ceramic materials, porcelain crowns are durable and can withstand normal chewing forces, making them a long-lasting solution.",
          },
          {
            title: "Biocompatibility",
            description: "Porcelain is a biocompatible material that is less likely to cause allergic reactions or sensitivities, ensuring comfort and safety for most patients.",
          },
          {
            title: "Stain Resistance",
            description: "Porcelain crowns resist staining and discoloration, maintaining their appearance over time and ensuring your smile remains bright.",
          },
        ],
        questions: [
          {
            title: "What Are Porcelain Crowns?",
            description: "Porcelain crowns are tooth-shaped caps made from high-quality ceramic materials. They are used to cover a damaged tooth, providing protection and restoring its shape, size, and function. Unlike traditional metal crowns, porcelain crowns are designed to blend seamlessly with your natural teeth, making them an ideal choice for visible areas of the mouth.",
          },
          {
            title: "When Are Porcelain Crowns Used?",
            description: "Porcelain crowns are commonly used in various dental situations, including:",
          },
          {
            description: "Restoring a Tooth After Root Canal Treatment: To provide strength and protection to a tooth that has undergone a root canal.",
          },
          {
            description: "Covering a Large Filling: To restore a tooth that has a substantial filling and is at risk of further damage.",
          },
          {
            description: "Enhancing the Appearance of a Discolored or Misshapen Tooth: To improve the aesthetics of teeth that are uneven or have cosmetic issues.",
          },
          {
            description: "Supporting a Dental Bridge: To act as an anchor for a bridge when replacing missing teeth.",
          },
          {
            title: "The Procedure for Getting Porcelain Crowns:",
            description: "Initial Consultation: Your dentist will assess your dental health and determine if a porcelain crown is the right solution for you.",
          },
          {
            description: "Preparation: The damaged tooth is prepared by removing any decay and reshaping it to accommodate the crown. An impression of the tooth is then taken to create a custom-fit crown.",
          },
          {
            description: "Temporary Crown: A temporary crown is placed to protect the prepared tooth while the permanent porcelain crown is being made.",
          },
          {
            description: "Fitting and Cementation: Once the permanent porcelain crown is ready, it is carefully placed and adjusted for proper fit and bite. The crown is then cemented into place, completing the restoration.",
          },
          {
            title: "Caring for Porcelain Crowns:",
            description: "To ensure the longevity of your porcelain crowns, maintain excellent oral hygiene by brushing and flossing regularly. Visit your dentist for routine check-ups and cleanings to monitor the health of your crowns and surrounding teeth. At Dental Solutions, we offer expert porcelain crown services to restore and enhance your smile with precision and care. Contact us today to schedule a consultation and discover how porcelain crowns can benefit your dental health and aesthetics.",
          },
        ],
        typeTitle: "Types of Porcelain Crowns",
        types: [
          {
            title: "Full Porcelain Crowns",
            description: " Full porcelain crowns are made entirely from high-quality ceramic material. They are designed to match the natural color and translucency of your teeth, providing a seamless and aesthetically pleasing result.",
          },
          {
            title: "Porcelain-Fused-to-Metal (PFM) Crowns",
            description: " Porcelain-fused-to-metal crowns feature a metal base covered with a layer of porcelain. The metal provides strength and support, while the porcelain layer offers a natural-looking finish.",
          },
          {
            title: "Zirconia Crowns",
            description: "Zirconia crowns are made from a highly durable and biocompatible ceramic material known as zirconium oxide. These crowns are renowned for their strength and resistance to wear.",
          },
          {
            title: "E-Max Crowns",
            description: "E-Max crowns are made from lithium disilicate, a type of glass-ceramic known for its exceptional strength and translucency. They offer a balance between aesthetics and durability.",
          },
          {
            title: "Leucite-Reinforced Porcelain Crowns",
            description: "Leucite-reinforced porcelain crowns are made from a type of ceramic reinforced with leucite crystals to enhance strength and durability.",
          },
        ],
        extraInfo: {
          title: "Features of Porcelain Crowns: Enhancing Your Smile with Durability and Aesthetics",
          description: "Porcelain crowns offer a range of features that make them a popular choice for dental restoration. With their natural appearance, biocompatibility, and durability, porcelain crowns provide an ideal solution for restoring both the function and aesthetics of your teeth. They resist staining, require minimal tooth reduction, and offer a custom fit, ensuring a seamless integration with your smile. Whether used for cosmetic enhancement or functional restoration, porcelain crowns deliver a reliable and long-lasting solution for achieving a confident and beautiful smile.",
        },
        features: [
          "Natural Appearance:  Porcelain crowns are designed to mimic the natural color and translucency of your teeth. They blend seamlessly with surrounding teeth, making them an excellent choice for visible areas of your mouth.",
          "Biocompatibility: Porcelain is a biocompatible material, meaning it is well-tolerated by the body and less likely to cause allergic reactions or sensitivities.",
          "Durability: Porcelain crowns are durable and resistant to wear and tear. They can withstand the forces of chewing and biting, making them a reliable option for long-term use.",
          "Stain Resistance: Porcelain crowns resist staining and discoloration, maintaining their appearance over time and ensuring that your smile remains bright.",
          "Minimal Tooth Reduction:  Porcelain crowns often require less tooth reduction compared to other crown types. This means that less of the natural tooth structure is removed during the preparation process.",
          "Custom Fit:  Each porcelain crown is custom-made to fit your tooth precisely. Advanced technology and precise measurements ensure a comfortable and accurate fit.",
          "Versatility: Porcelain crowns are versatile and can be used in various situations, including covering discolored teeth, restoring decayed teeth, and protecting weakened teeth."
        ]
      },
      {
        title: 'Implants All On 4',
        sid: 'implants-all-on-4',
        category: "surgical",
        description: 'Transform your smile with the All-On-4 implant technique, offering a full arch restoration using just four implants for a natural and durable solution.',
        image: '/img/products/implants.jpg',
        long_description: "The All-On-4 dental implant procedure is a cutting-edge solution for those looking to restore a full arch of missing teeth efficiently and effectively. This innovative technique involves placing four implants in specific locations in the jawbone to support a complete set of prosthetic teeth. The implants are strategically positioned to maximize stability and support, allowing for a secure fit and natural appearance.",
        questions: [
          {
            title: "What Are All-On-4 Dental Implants?",
            description: "All-on-4 dental implants offer a revolutionary solution for patients missing an entire arch of teeth. This advanced implant technique replaces a full set of teeth with just four strategically placed titanium posts, eliminating the need for a separate implant for each missing tooth. Ideal for both the upper and lower jaws, All-on-4 provides a secure and stable foundation for a complete set of artificial teeth.",
          },
          {
            title: "What to Expect During and After the Procedure",
            description: "Our skilled implantologist, Dr. Gupta, along with his experienced team, ensures that your All-on-4 implant procedure is as comfortable and painless as possible. Post-surgery, we may recommend medication to manage any discomfort, along with applying ice packs to reduce swelling. To aid in your recovery, avoid physical activity and stress, and maintain excellent oral hygiene. However, refrain from flossing for the first two weeks after surgery.",
          },
        ],
        typeTitle: "How It Works",
        types: [
          {
            title: "Strategic Placement",
            description: "Four titanium posts are implanted into your jawbone, serving as anchors for a full arch of replacement teeth. These posts are strategically positioned to maximize stability and support.",
          },
          {
            title: "Bone Integration",
            description: "Over time, the titanium posts fuse with your jawbone in a process called osseointegration, creating a strong and durable foundation for your new teeth.",
          },
          {
            title: "Immediate Results",
            description: "The All-on-4 technique allows for the immediate placement of a temporary set of teeth on the same day as the implants, providing you with a functional and aesthetically pleasing smile right away.",
          },
        ],
        benefitTitle: "Benefits of All-On-4 Dental Implants",
        benefits: [
          {
            title: "Cost-Effective",
            description: "Replacing an entire arch of teeth with just four implants reduces the overall cost compared to individual implants for each missing tooth.",
          },
          {
            title: "Stability and Function",
            description: "The implants provide a stable base for your new teeth, allowing you to eat, speak, and smile with confidence.",
          },
          {
            title: "Minimal Discomfort",
            description: " The procedure is minimally invasive, and the recovery time is typically shorter compared to traditional implant methods.",
          },
          {
            title: "Bone Preservation",
            description: "The implants help preserve the jawbone structure, preventing bone loss that can occur with missing teeth."
          }
        ],
        extraInfo: {
          title: "Comprehensive All-on-4 Dental Implants: Your Path to a Complete Smile",
          description: "All-on-4 dental implants provide a revolutionary solution for replacing a full arch of missing teeth with just four strategically placed titanium posts. Ideal for those missing multiple teeth, this procedure offers a cost-effective, durable, and aesthetically pleasing alternative to traditional dentures. Our skilled team, led by Dr. Gupta, ensures a seamless and comfortable experience from start to finish at our convenient locations in Delhi NCR. Experience the benefits of All-on-4 dental implants and regain your confidence with a beautiful, functional smile."
        },
        features: [
          "Efficient Full Arch Replacement: Replaces an entire arch of teeth with just four implants, avoiding the need for individual implants for each tooth.",
          "Durable Titanium Posts: Utilizes titanium posts that fuse with the jawbone for a strong, long-lasting foundation.",
          "Quick Procedure: Typically completed in one surgical session with a shorter recovery time compared to traditional implants.",
          "Immediate Results: Provides a new set of functional teeth in a relatively short period, often with temporary teeth placed on the same day as surgery.",
          "Cost-Effective Solution: Offers a more affordable alternative to placing individual implants for each missing tooth.",
          "Aesthetic and Functional Restoration: Restores both the appearance and function of natural teeth, improving chewing ability and speech.",
          "Minimized Bone Loss: Helps maintain jawbone structure by stimulating the bone through the titanium posts.",
          "Convenient Locations: Available at our clinics Delhi NCR."
        ]
      },
      {
        title: "Implants All On 6",
        sid: "implants-all-on-6",
        category: "surgical",
        description: "Restore your full smile with the All-On-6 implant technique, offering enhanced stability and durability by using six implants to support a full arch of replacement teeth.",
        image: "/img/products/implants6.jpg",
        long_description: "The All-On-6 dental implant procedure is a modern solution for patients who need a full arch restoration of their upper or lower teeth. By placing six implants in the jawbone, we ensure maximum support for your new teeth. This advanced procedure offers a strong, natural-looking, and durable result, allowing you to eat, speak, and smile confidently. With six strategically placed implants, the distribution of pressure during chewing is optimized for a secure, long-lasting fit.",
        questions: [
          {
            title: "What Are All-On-6 Dental Implants?",
            description: "All-on-6 dental implants offer an advanced solution for patients who are missing most or all of their teeth in one arch. Unlike the All-on-4 technique, which uses four implants, All-on-6 uses six implants to provide enhanced stability and support for a full set of prosthetic teeth. This method is ideal for patients with slightly more bone density, ensuring a firm and secure foundation for long-lasting results."
          },
          {
            title: "What to Expect During and After the Procedure",
            description: "Our experienced implantologist, Dr. Gupta, and his team ensure your All-on-6 procedure is performed comfortably under local anesthesia. After the procedure, mild discomfort may be managed with prescribed medication, and ice packs can help reduce swelling. Refrain from strenuous activity for a few days post-surgery and avoid flossing for the first two weeks. Maintain good oral hygiene by gently brushing your teeth. The implants will gradually integrate with the jawbone for long-term stability."
          }
        ],
        typeTitle: "How It Works",
        types: [
          {
            title: "Enhanced Stability with Six Implants",
            description: "Six titanium posts are inserted into your jawbone to support a full arch of replacement teeth. This provides greater stability and strength compared to fewer implants."
          },
          {
            title: "Bone Integration",
            description: "The implants fuse with the jawbone through a process called osseointegration, ensuring a secure and durable foundation for your prosthetic teeth."
          },
          {
            title: "Immediate Results",
            description: "The All-on-6 method often allows for the immediate placement of temporary teeth on the same day as the implants, so you can leave the clinic with a new smile."
          }
        ],
        benefitTitle: "Benefits of All-On-6 Dental Implants",
        benefits: [
          {
            title: "Superior Stability",
            description: "With six implants providing support, the All-on-6 technique offers greater stability and strength, especially for patients with sufficient bone density."
          },
          {
            title: "Natural Look and Function",
            description: "The implants provide a secure base for your new teeth, restoring natural appearance and function for eating, speaking, and smiling."
          },
          {
            title: "Cost-Effective for Full Arch Restoration",
            description: "The All-on-6 technique offers a cost-effective solution to full arch restoration, reducing the need for individual implants for each missing tooth."
          },
          {
            title: "Minimized Bone Loss",
            description: "The implants help preserve the jawbone structure, preventing the bone deterioration that typically occurs when teeth are missing."
          }
        ],
        extraInfo: {
          title: "Comprehensive All-on-6 Dental Implants: Achieve a Complete, Durable Smile",
          description: "All-on-6 dental implants offer a superior solution for those looking to replace a full arch of missing teeth with six strategically placed titanium posts. This technique ensures a stable, durable, and long-lasting foundation for a complete set of prosthetic teeth. Our expert team, led by Dr. Gupta, provides a seamless experience in our Delhi NCR locations. Discover the transformative power of All-on-6 dental implants today."
        },
        features: [
          "Enhanced Full Arch Replacement: Six implants provide greater support for a full arch of teeth, compared to traditional dentures or fewer implants.",
          "Durable Titanium Posts: The titanium implants fuse with the jawbone to create a strong, long-lasting foundation for your new teeth.",
          "Quick Procedure: The surgery is typically completed in a single session, with a shorter recovery time compared to individual implants for each missing tooth.",
          "Immediate Results: Temporary teeth are often placed on the same day as the implants, allowing for immediate function and improved aesthetics.",
          "Cost-Effective Full Arch Solution: By using six implants for a full arch, this technique is more affordable compared to replacing each missing tooth individually.",
          "Aesthetic and Functional Restoration: The All-on-6 approach restores the look, feel, and function of your natural teeth, allowing for improved chewing and speaking abilities.",
          "Minimized Bone Loss: Stimulates the jawbone and prevents bone deterioration that occurs with missing teeth.",
          "Available at Multiple Locations: Access expert All-on-6 dental implant services at Delhi NCR."
        ]
      }
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
      },
      {
        "id": 7,
        "name": "RCT",
        "plans": [
          {
            "question": "What is a root canal treatment and why do I need it?",
            "answer": "Root Canal Treatment is a procedure to repair and save a badly damaged or infected tooth instead of removing it. The term 'Root Canal' refers to the cleaning of the canal inside the tooth's root to relieve severe pain. The procedure involves removing the damaged or infected area of the tooth, known as the pulp, which contains nerves and blood vessels, cleaning and disinfecting it, then filling and sealing it with an artificial inert material."
          },
          {
            "question": "What will happen during the RCT procedure?",
            "answer": "The first step in the procedure is to take an X-ray to assess the shape of the root canals and check for any signs of infection in the surrounding bone. Local anaesthesia is then administered to numb the area near the tooth, ensuring you are relaxed and comfortable. An access hole is drilled into the tooth, and the pulp, along with bacteria, decayed nerve tissue, and debris, is removed using root canal files. Various irrigating solutions are used to flush out the debris. Once the tooth is thoroughly cleaned, it is sealed by filling the cleaned root canals with a rubber-like material and using adhesive cement to seal the canals completely. After the root canal is completed, the tooth will likely need a crown to protect it from future fractures."
          },
          {
            "question": "Is root canal treatment painful?",
            "answer": "When people hear they need a Root Canal Treatment (RCT), they often think of pain. However, the pain experienced is usually due to an infection in the tooth and not the RCT itself. RCT is performed to eliminate pain, and the procedure itself is generally painless. Our specialized Endodontists use local anaesthesia and modern techniques to ensure a comfortable, pain-free experience. We prioritize reducing patient anxiety and using the latest equipment to provide a smooth treatment."
          },
          {
            "question": "Would extraction (pulling the tooth) be a better alternative?",
            "answer": "Retaining your natural teeth through Root Canal Treatment is usually preferable to extraction. Replacing natural teeth with artificial ones can lead to additional issues. Root Canal Treatment, while initially more expensive, often proves cost-effective in the long run. After an extraction, the gap left by the lost tooth typically requires replacement with a dental bridge, implant, or partial denture, all of which can be more expensive than RCT. Additionally, gaps from missing teeth can cause difficulties in chewing and biting. RCT is generally less painful than extraction and has a high success rate, preserving the natural tooth with minimal time and discomfort."
          },
          {
            "question": "How long does a root canal treatment take?",
            "answer": "The duration of a root canal treatment varies depending on the complexity of the case and the tooth involved. On average, the procedure can take between 60 to 90 minutes per visit. In some cases, multiple visits may be required, especially if the infection is severe or if a crown is needed to complete the restoration."
          },
          {
            "question": "What should I expect after a root canal treatment?",
            "answer": "After a root canal treatment, you may experience some discomfort or mild pain in the treated tooth and surrounding area. This is usually temporary and can be managed with over-the-counter pain medications. It's important to follow your dentist’s post-treatment care instructions, which may include avoiding hard or sticky foods for a few days. The tooth will eventually be restored with a crown to protect it and restore its full function."
          },
          {
            "question": "Can a root canal fail, and what should I do if it does?",
            "answer": "While root canal treatments have a high success rate, there is a possibility of failure. Factors such as complex canal anatomy, missed canals, or new infections can contribute to treatment failure. If you experience persistent pain or symptoms after a root canal, it's important to contact your dentist. They can evaluate the situation and determine if additional treatment, such as retreatment or an apicoectomy, is needed to address the issue."
          },
          {
            "question": "How much does root canal treatment cost?",
            "answer": "The cost of root canal treatment varies depending on factors such as the tooth's location, the complexity of the procedure, and the dentist's fees. Generally, the cost is higher for molars compared to front teeth due to the complexity of the root system. Most dental insurance plans cover a portion of the cost, so it's a good idea to check with your insurance provider and discuss payment options with your dentist."
          }
        ]
      }
    ],
    dentists: [
      {
        name: 'Dr. Shweta Gupta',
        sid: 'dr-shweta-gupta',
        qualifications: 'BDS, MDS,',
        image: '/img/owner2.jpeg',
        button: 'Know more about her',
        points: [
          "	Dr. Shweta Gupta is a dentist and implantologist in Ashok Vihar, Delhi.",
          "	She is the finest dental surgeon and implantologist having over 15+ years of experience.",
          " She has done her implantologist specialization from UCLA (USA).",
          " She has been nominated for Many Awards for his work in dentistry.",
          "	She is also attached to many Hospitals and clinics as a specialist consultant and holds the post of executive implantology for a few corporate dental chains.",
          "	She maintains her private practice at Ashok Vihar, Delhi at Dental Solutions.",
          "	Dr.Shweta Gupta is known for specialty services in orthodontics, lingual orthodontics and invisible orthodontics.",
          "	Patients from all across the globe have got their treatment done by her and can vouch for her work par excellence.",
        ],
        videoUrl: "https://www.youtube.com/embed/2TLi3zyjczI"
      },
      {
        name: 'Dr. Atul Gupta',
        sid: 'dr-atul-gupta',
        qualifications: 'BDS, MDS ',
        image: '/img/owner.jpeg',
        button: 'Know more about him',
        points: [
          "Dr. Atul Gupta: Dentist with 17+ years of experience.",
          "Expertise: Root canal treatment and smile designing.",
          "Achievements: Among the first orthodontists in India certified in root canal treatment and smile designing.",
          "Recognition: Known as one of India's finest in root canal treatment and smile design.",
          "Patient Approach: Dedicated to providing personalized care and comfortable treatment experiences.",
          "Advanced Techniques: Uses the latest dental technologies for effective, minimally invasive treatments.",
          "He has been nominated for Many Awards for his work in dentistry.",
          "He maintains his private practice at Ashok Vihar, Delhi at Dental Solutions.",
          "Patients from all across the globe have got their treatment done by him and can vouch for his work par excellence.",
        ],
        videoUrl: "https://www.youtube.com/embed/0VrSlt5Q7Io"
        // "Dr. Atul Gupta is a Dentist, Orthodontist and implantologist Dentist in Ashok Vihar, Delhi. He was the Finest orthodontist in India to be certified in aligner therapy (Invisalign).	He has been nominated for Many Awards for his work in dentistry.He is also attached to many Hospitals and clinics as a specialist consultant and holds the post of executive orthodontist for a few corporate dental chains.He maintains his private practice at Paschim Vihar, Delhi at Dental Solutions.Dr. Atul Gupta is known for specialty services in orthodontics, lingual orthodontics and invisible orthodontics.For his quest to achieve excellence – he has also done his fellowship in implantology and works with the best in business implant brands in his setup.Patients from all across the globe have got their treatment done by him and can vouch for his work par excellence."
        // route:"/doctor/",
      }
    ],
    videos: [
      {
        videoId: "53BJGx5rCCQ",
        title: "Dental implants used to create beautiful smiles",
        viewCount: '2,234',
      },
      {
        videoId: "pbiPmod2vzI",
        title: "using DENTAL IMPLANTS to replace missing teeth",
        viewCount: '37',
      },
      {
        videoId: "dQbj8nV0rNE",
        title: "A satisfied patient !! @dental solutions 9899570734",
        viewCount: '26',
      },
      {
        videoId: "frFKchp5UqQ",
        title: "Satisfied patient, using her teeth, full mouth replacement done 7 years back using Dental Implants",
        viewCount: '39',
      },
      {
        videoId: "vJqSBZzTN0w",
        title: "Dental solutions @9899570734.. solutions to all your dental issues",
        viewCount: '33',
      },
      {
        videoId: "P5EvGuTViy4",
        title: "Painless Removal of Wisdom Teeth",
        viewCount: '52',
      },
      {
        videoId: "pn_DJCtVNzA",
        title: "full mouth rehabilitation",
        viewCount: '28',
      },
      {
        videoId: "Lz48Aqo-hVs",
        title: "Testimonial: Mr. Malhotra, Chairman, Hitkari Group",
        viewCount: '46',
      },
      {
        videoId: "L2tfnFzIplo",
        title: "Testimonial : Ms Anushka Jain",
        viewCount: '56',
      },
      {
        videoId: "bM2ADTwCzCI",
        title: "3 February 2023",
        viewCount: '23',
      },
    ]
  },
  getters: {
    getServices: state => state.services,
    getService: (state) => (productId) => {
      let index = state.services.findIndex(product => product.sid == productId);
      return state.services[index];
    },
    getFaq: state => state.faqs,
    getDentists: state => state.dentists,
    getDentist: (state) => (productId) => {
      let index = state.dentists.findIndex(product => product.sid == productId);
      return state.dentists[index];
    },
    getVideos: state => state.videos,
  },
  mutations: {},
  actions: {},
  modules: {
    gallery: gallery
  },
});
