const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Achievements",
    link: "#certificates",
  },
];

const words = [
  { text: "Scalable System Designs", imgPath: "/images/ideas.svg" },
  // { text: "Complex Problem Solving", imgPath: "/images/concepts.svg" },
  // { text: "High-Performance Systems", imgPath: "/images/designs.svg" },
  { text: "Production-Ready Solutions", imgPath: "/images/code.svg" },
  { text: "Distributed Architectures", imgPath: "/images/ideas.svg" },
  // { text: "Real-World System Builds", imgPath: "/images/concepts.svg" },
];


const counterItems = [
  { value: 10, suffix: "+", label: "End-to-End Full-Stack Projects" },
  { value: 6, suffix: "+", label: "Production-Grade Deployed Applications" },
  { value: 3, suffix: "+", label: "AI-Integrated Products" },
  { value: 1, suffix: "+", label: "System Design & Scalable Backend Exposure" },
];


const logoIconsList = [
  {
    imgPath: "/images/logos/c-Photoroom.png",
  },
  
  {
    imgPath: "/images/logos/EX-Photoroom.png",
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
      "Mayank demonstrated strong ownership across both frontend and backend systems. He consistently delivered production-ready features and showed a solid understanding of scalable web and mobile architectures.",
    imgPath: "/images/truckhai.png",
    logoPath: "/images/truckhai.png",
    title: "Full Stack Developer Intern",
    date: "June 2024 – August 2024",
    responsibilities: [
      "Built and maintained full-stack features for TruckHai’s web and mobile applications using React, Node.js, and REST APIs.",
      "Collaborated directly under Himanshu Sir (SDE, Zomato) to design scalable backend flows and optimize frontend performance.",
      "Implemented authentication, role-based access, and data-driven dashboards used internally by the operations team.",
      "Worked closely with product and design teams to ship features aligned with real business requirements.",
    ],
  },
  {
    review:
      "Mayank approaches engineering problems with a strong problem-solving mindset. His work on backend systems and API design showed clear understanding of real-world software engineering practices.",
    imgPath: "/images/jpmc.png",
    logoPath: "/images/jpmc.png",
    title: "Software Engineering Virtual Intern",
    date: "January 2024",
    responsibilities: [
      "Completed JPMorgan Chase’s virtual software engineering program focused on backend development and financial systems.",
      "Designed and analyzed RESTful APIs, data pipelines, and system workflows used in enterprise-grade applications.",
      "Worked on tasks involving code optimization, debugging, and understanding large-scale distributed systems.",
      "Gained exposure to industry-standard engineering practices used in high-scale financial platforms.",
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
    svgPath: "/images/svgs/new-twitter-stroke-rounded.svg"
  },
  {
    name: "linkedin",
    url:"https://www.linkedin.com/in/mayankmittal1311/",
    svgPath: "/images/svgs/linkedin-svgrepo-com.svg",
  },
  {
    name: "github",
    url:"https://github.com/Chief-myk/",
    svgPath: "/images/svgs/github-svgrepo-com.svg",
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
        "Software Devlopment Life Cycle - Microsoft & LinkedIn",
        "App Development - SimpleLearning",
        "Full Stack Web Development (MERN Stack) – Coursera",
        "Data Structures & Algorithms in Java – Infosys",
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


