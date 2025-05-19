const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#project",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 10, suffix: "+", label: "Innovative Projects" },
  { value: 15, suffix: "+", label: "Skills" },
  { value: 3, suffix: "+", label: "AI-Powered Systems" },
  { value: 95, suffix: "%", label: "Learning Commitment" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/AR-Photoroom.png",
  },
  {
    imgPath: "/images/logos/c-Photoroom.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },

  {
    imgPath: "/images/logos/EX-Photoroom.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/GI-Photoroom.png",
  },

  {
    imgPath: "/images/logos/j-Photoroom.png",
  },
  {
    imgPath: "/images/logos/m-Photoroom.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/n-Photoroom.png",
  },
  {
    imgPath: "/images/logos/MON-Photoroom.png",
  },
  {
    imgPath: "/images/logos/NE-Photoroom.png",
  },
  {
    imgPath: "/images/logos/RE-Photoroom.png",
  },
  {
    imgPath: "/images/logos/SQ-Photoroom.png",
  },
  {
    imgPath: "/images/logos/t-Photoroom.png",
  },
  {
    imgPath: "/images/logos/UN-Photoroom.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];



const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
  {
    name: "Java Developer",
    imgPath: "/images/logos/java-Photoroom.png",
  },
  {
    name: "SQL Developer",
    imgPath: "/images/logos/sql.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: [25, 25, 25],
    rotation: [0, 0, 0],
    animation: "", // Add animation name if available
    reduceBrightness: true,
    lighting: {
      ambient: 0.2,
      directional: 0.4,
      environment: 0.3
    }
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
    animation: "", // Add animation name if available
    reduceBrightness: false,
  },
  {
    name: "Docker Developer",
    modelPath: "/models/moby_dock_docker_whale.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
    animation: "", // Add animation name if available
    reduceBrightness: false,
  },
];



const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
 {
  name: "Yashpal Chopra",
  mentions: "@yashpalchopra",
  review:
    "Mayank is a highly talented and dedicated developer. He created a personalized full stack portfolio for me, capturing my professional journey with impressive design and functionality. His attention to detail and commitment to excellence are truly commendable.",
  imgPath: "/images/YsSir.jpg",
},
  {
  name: "Pawan Mehra",
  mentions: "@pawanmehra",
  review:
    "Mayank crafted a stunning portfolio that perfectly captures my passion for graphic design, gaming, and robotics. His creative approach and seamless integration of themes truly set this project apart. Highly recommended for anyone looking to showcase their work with style.",
  imgPath: "/images/pawan.jpg",
},
 {
  name: "Siddhi Sharma",
  mentions: "@siddhisharma",
  review:
    "Mayank is an exceptional teammate with a remarkable talent for full stack development. Collaborating with him on our JARVIS AI assistant project during the hackathon was an incredible experience. His innovative thinking, technical skills, and problem-solving mindset truly brought our vision to life.",
  imgPath: "/images/siddhi.jpg",
},
  {
  name: "Bhavik Anand",
  mentions: "@bhavikanand",
  review:
    "Working with Mayank on the Fit-Game project was an inspiring experience. His innovative ideas and strong technical skills made the project truly stand out. He has a rare ability to blend creativity with precision, making him a fantastic teammate.",
  imgPath: "/images/bhavik.jpeg",
},
];

const socialImgs = [
  {
    name: "insta",
    url:"https://www.instagram.com/mayankmittal.1306/",
    svgPath: "/images/svgs/instagram-svgrepo-com.svg",
  },
  {
    name: "fb",
    url:"https://www.facebook.com/mayank.mittal.1069020",
    svgPath: "/images/svgs/facebook-svgrepo-com.svg",
  },
  {
    name: "x",
    url:"https://x.com/MayankMittal06",
    svgPath: "/images/svgs/linkedin-svgrepo-com.svg",
  },
  {
    name: "linkedin",
    url:"https://www.linkedin.com/in/mayankmittal1311/",
    svgPath: "/images/svgs/new-twitter-stroke-rounded.svg",
  },
];

 const skills = [
        { name: "Python", level: 90 },
        { name: "JavaScript/Node.js", level: 85 },
        { name: "React/React Native", level: 88 },
        { name: "Java", level: 80 },
        { name: "SQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Git & GitHub", level: 90 },
    ];

    const certificates = [
        "AI and ML by Microsoft",
        "Software Engineering by LinkedIn",
        "App Development Using React Native by Coding Ninja",
        "Web Development by CodeWithHarry",
        "DevOps Engineering by Google"
    ];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  skills,
  certificates
};


