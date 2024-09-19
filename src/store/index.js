import { createStore } from "vuex";

export default createStore({
  state: {
    services: [
      {
        title: 'Invisalign',
        sid: "invisalign",
        category: "Cosmetic Dentistry",
        description: 'Preview your smile visualize your teeth after invisalign',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/invisalign-and-braces-the-dental-roots.jpg',
        long_description: "Invisalign aligners are virtually invisible, custom-made, and removable braces designed to correct a variety of dental issues such as crowding, overbites, and misaligned teeth. This sophisticated treatment utilizes 3D technology to create a precise series of clear aligners that gradually move your teeth into their optimal position. The journey begins with a detailed scan or impression of your teeth, followed by the creation of a customized treatment plan that maps out the movements of each tooth in a virtual setup. Once approved by your orthodontist, the aligners are crafted, and your treatment can begin. You’ll be required to wear the aligners for 20-22 hours daily, switching to the next set as instructed by your orthodontist. To ensure optimal progress, your orthodontist will schedule regular appointments at our branches in Panchsheel Park, Sushant Lok (Gurgaon), or Tata Primanti (Sohna Road). With countless satisfied patients globally, Invisalign has proven to deliver outstanding results. Our certified providers at Dental Solutions are committed to giving you the flawless smile you've always wanted—quickly and comfortably.",
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
        images: [
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
        category: "General Dentistry",
        description: 'A painless cosmetic solution for a smile you\'ll love',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/tooth-coloured-restoration-the-dental-roots.jpg',
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
        images: [
          {
            "image": "https://www.thedentalroots.com/assets/images/Invisalign/Overbite.jpg",
            "title": "Infected Tooth Before Treatment"
          },
          {
            "image": "https://www.thedentalroots.com/assets/images/Invisalign/Underbite.jpg",
            "title": "Access Opening Made in the Tooth"
          },
          {
            "image": "https://www.thedentalroots.com/assets/images/Invisalign/Crossbite.jpg",
            "title": "Infected Tissue Removed and Canals Cleaned"
          },
          {
            "image": "https://www.thedentalroots.com/assets/images/Invisalign/Gap-Teeth.jpg",
            "title": "Canals Filled with Permanent Material"
          },
          {
            "image": "https://www.thedentalroots.com/assets/images/Invisalign/Open-Bite.jpg",
            "title": "Tooth Sealed with Filling; Post Added for Extra Support if Needed"
          },
          {
            "image": "https://www.thedentalroots.com/assets/images/Invisalign/Crowded-teeth.jpg",
            "title": "New Crown Cemented onto the Rebuilt Tooth"
          }
        ],
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
        category: "General Dentistry",
        description: 'A painless cosmetic solution for a smile you\'ll love',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/tooth-coloured-restoration-the-dental-roots.jpg',
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
        category: "Cosmetic Dentistry",
        description: 'Get porcelain Veneers treatment at Dental Solutions and enhance your smile',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg',
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
        category: "Surgical  Dentistry",
        description: 'India’s leading and most trusted Dental Clinic',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/tooth-coloured-restoration-the-dental-roots.jpg',
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
        benefits: [
          {
            "image": "/img/implants/standardImplant.svg",
            "title": "Standard Dental Implants",
            "description": "Standard dental implants are the most common type, providing a reliable and durable solution for replacing missing teeth. Made from titanium, they offer excellent integration with the jawbone and support for long-term restoration."
          },
          {
            "image": "/img/implants/miniImplant.svg",
            "title": "Mini Dental Implants",
            "description": "Mini dental implants are smaller in diameter than standard implants, making them ideal for areas with limited bone structure. They offer a less invasive option with quicker recovery times and are often used for stabilizing dentures."
          },
          {
            "image": "/img/implants/allOn4.svg",
            "title": "All-on-4 Implants",
            "description": "All-on-4 implants involve placing four strategically positioned implants to support a full arch of teeth. This method minimizes the need for bone grafting and provides a stable, functional, and aesthetically pleasing solution for full-mouth restoration."
          },
          {
            "image": "/img/implants/subperiostealImplant.svg",
            "title": "Subperiosteal Implants",
            "description": "Subperiosteal implants are placed under the gum but above the jawbone. They are suitable for patients with insufficient bone height who cannot undergo bone grafting. This type provides a stable foundation for prosthetics with minimal discomfort."
          },
          {
            "image": "/img/implants/zirconiaImplant.svg",
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
        category: "Surgical  Dentistry",
        description: 'In recent years, laser dentistry has superseded  many traditional dentistry practices',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg',
        long_description:""
      },
      {
        title: 'Smile Makeovers',
        sid: 'smile-makeovers',
        category: "Cosmetic Dentistry",
        description: 'Hollywood smile makeovers treatment',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Kids Dentistry',
        sid: 'kids-dentistry',
        category: "General Dentistry",
        description: 'Trusted pediatric dentistry at the Dental Solutions',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg',
        long_description: "Welcome to Dental Solutions, where we warmly invite parents and children alike, because we believe that kids bring joy to every environment—and our clinic is no exception. At Dental Solutions, we are dedicated to providing top-notch dental care for children of all ages, from toddlers to teenagers. Our highly skilled pediatric dentists ensure that every dental visit is stress-free, relaxing, and positive for your child. So, if you're searching for a trusted pediatric dental clinic near you, we’re here to help. We pride ourselves on creating a welcoming atmosphere with a friendly, caring team and in-chair entertainment to keep your child engaged and comfortable. Our dentists take the time to explain treatments in a way that your child can understand, making dental care a fun and educational experience rather than a fearful one. Additionally, Dental Solutions offers emergency pediatric dental appointments for any urgent situations. Whether it's a fall, toothache, or dental injury, we’re here to help your child feel better and put things right. We're committed to making every trip to the dentist an enjoyable experience for your little ones!"
      },
      {
        title: 'Painless Extraction (Tooth Removal)',
        sid: 'painless-extraction-tooth-removal',
        category: "Surgical Dentistry",
        description: 'Painless tooth extraction in Delhi NCR, India',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Teeth Whitening',
        sid: 'teeth-whitening',
        category: "Cosmetic  Dentistry",
        description: 'Bring back  the glow  of your smile - safe, effective, and fast with long-lasting white',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Painless Wisdom Tooth Extraction',
        sid: 'painless-wisdom-tooth-extraction',
        category: "Surgical Dentistry",
        description: 'A surgial procedure to remove one or more wisdom teeth',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Dentures',
        sid: 'dentures',
        category: "General Dentistry",
        description: 'Find the right denture for you!',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Braces',
        sid: 'braces',
        category: "Cosmetic  Dentistry",
        description: 'We perfect  your smile with love, braces, and aligners',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Dental Bridges',
        sid: 'dental-bridges',
        category: "General Dentistry",
        description: 'Restore your smile to perfect condition',
        image: 'https://www.thedentalroots.com/TheDentalRootslmages/ServiceImages/veneers-the-dental-roots.jpg'
      },
      {
        title: 'Procelain Crowns',
        sid: 'procelain-crowns',
        category: "Cosmetic Dentistry",
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
    getService: (state) => (productId) => {
      let index = state.services.findIndex(product => product.sid == productId);
      return state.services[index];
    },
    getFaq: state => state.faqs,
  },
  mutations: {},
  actions: {},
  modules: {},
});
