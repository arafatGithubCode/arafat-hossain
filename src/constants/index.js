import { v4 as uuidv4 } from "uuid";

import {
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  bootstrap,
  nodejs,
  mongodb,
  steadfast,
  mern,
  figma,
  framerMotion,
  threejs,
  mobile,
  express,
  firebase,
  github,
  vsCode,
  postman,
  photoshop,
  insomenia,
  word,
  excel,
  blog,
  estate,
  expense,
  hotel,
  weather,
  todo,
  port,
  space,
  dice,
  pomodo,
  timer,
  recipe,
  search,
  tip,
  rock,
  visual,
  university,
  global,
} from "../assets";

const bio = {
  name: "Arafat",
  roles: [
    "Frontend Web Developer",
    "MERN Stack Developer",
    "UI Designer",
    "Programmer",
  ],
  description:
    "I develop web applications, user interfaces and 3D visuals. I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/arafatGithubCode",
  resume:
    "https://drive.google.com/file/d/1zIrnBjql6-y3NWsfXGnqnSd26G25V4v5/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/arafat-hossain-033a18282/",
  twitter: "",
  insta: "https://www.instagram.com/8720arafat/",
  facebook: "https://www.facebook.com/profile.php?id=100067866734531",
  profileImg: "./favicon.png",
};

const videoProperties = [
  {
    id: 1,
    src: "./videos/video1.mp4",
  },
  {
    id: 2,
    src: "./videos/video2.mp4",
  },
  // {
  //   id: 3,
  //   title: "Video 3",
  //   src: Vid3,
  //   credit: "Video by cottonbro from Pexels",
  // },
];

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skill",
    title: "Skill",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Designer",
    icon: mobile,
  },
  {
    title: "MERN Stack Developer",
    icon: backend,
  },
];

const skills = [
  {
    title: "Frontend",
    technologies: [
      {
        name: "React Js",
        icon: reactjs,
      },
      {
        name: "Redux",
        icon: redux,
      },
      {
        name: "Framer Motion",
        icon: framerMotion,
      },
      {
        name: "Typescript",
        icon: typescript,
      },
      {
        name: "EJS",
        icon: "https://miro.medium.com/v2/resize:fit:1278/1*i-YOI4nMBnyPfjSulLxDLA.png",
      },
      {
        name: "HTML",
        icon: html,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "Bootstrap",
        icon: bootstrap,
      },
      {
        name: "Three JS",
        icon: threejs,
      },
    ],
  },
  {
    title: "Backend",
    technologies: [
      {
        name: "Node Js",
        icon: nodejs,
      },
      {
        name: "Express Js",
        icon: express,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "Firebase",
        icon: firebase,
      },
    ],
  },
  {
    title: "Others",
    technologies: [
      {
        name: "Git",
        icon: github,
      },
      {
        name: "GitHub",
        icon: github,
      },
      {
        name: "Netlify",
        icon: "https://w7.pngwing.com/pngs/600/484/png-transparent-netlify-static-web-page-gulp-js-github-github-blue-angle-logo-thumbnail.png",
      },
      {
        name: "VS Code",
        icon: vsCode,
      },
      {
        name: "Postman",
        icon: postman,
      },
      {
        name: "Insomnia",
        icon: insomenia,
      },
      {
        name: "Adobe Photoshop",
        icon: photoshop,
      },
      {
        name: "Figma",
        icon: figma,
      },
      {
        name: "Word",
        icon: word,
      },
      {
        name: "Excel",
        icon: excel,
      },
    ],
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Steadfast Courier Limited",
    icon: steadfast,
    iconBg: "#383E56",
    date: "May 2023 - December 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Development",
    company_name: "MERN",
    icon: mern,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Node.js, Express.js, MongoDB, and other related technologies.",
      `Implementing form authentication and validation using libraries like Express.js's "express-validator" or "JOI" along with frontend frameworks like Formik to ensure secure data submission and streamline user interactions.`,
      "Fetching data from servers using tools like fetch and axios.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Creating reusable components and implementing them to design realistic, user-friendly UIs with React and its helpful packages.",
    ],
  },
  {
    title: "Fronted Development",
    company_name: "React",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Present",
    points: [
      "Developing and maintaining responsive web applications using React.js, Tailwind CSS, Framer Motion, HTML, CSS, and other related technologies.",
      "Managed the development of several projects, including various aspects of application design and functionality, such as a blog app, real estate app, expense tracker, and e-commerce app.",
    ],
  },
];

const projects = [
  {
    id: uuidv4(),
    name: "Blog Web app",
    description:
      "Introducing my web based blog app with interactive dashboard functionality where users can publish posts with images and manage their personal profile.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressJS",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "Formik",
        color: "green-text-gradient",
      },
      {
        name: "Flowbite React",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    features: {
      one: "MVC structure for efficient file management.",
      two: "Efficiently handles data retrieval with fetch, redux, and jsonwebtoken.",
      three: "Employs Formik for secure form authentication.",
      four: "Enhanced styling with Flowbite for rapid development.",
      five: "Complete CRUD operation and search functionality with mongoose.",
    },
    category: "mern",
    image: blog,
    source_code_link: "https://github.com/arafatGithubCode/MERN-blog-clone",
    live_app: "https://mern-blog-app-lhjg.onrender.com/",
  },
  {
    id: uuidv4(),
    name: "Real Estate",
    description:
      "Developed a MERN real estate platform for seamless property and restaurant transactions. Empowering users to list, rent, and sell with ease.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressJS",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "Formik",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    features: {
      one: "MVC structure for efficient file management.",
      two: "Efficiently handles data retrieval with axios, redux, and jsonwebtoken.",
      three: "Uses express validator for secure form authentication.",
      four: "Integrates Swiper for dynamic image sliders.",
      five: "Supports complete CRUD operations for seamless data management.",
    },
    category: "mern",
    image: estate,
    source_code_link:
      "https://github.com/arafatGithubCode/MERN-Estate-re-complete",
    live_app: "https://estate.100jsprojects.com/",
  },
  {
    id: uuidv4(),
    name: "3D Portfolio",
    description:
      "Use our React app to explore your portfolio in three dimensions. Display your creations like never before. Captivate your viewers with eye-catching graphics and simple navigation. Improve your portfolio right now!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-three",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "emailJS",
        color: "pink-text-gradient",
      },
    ],
    features: {
      one: "Fully responsive design",
      two: "Stunning 3D visuals",
      three: "Seamless messaging via emailJS",
      four: "Smartly showcase experiences and skills",
      five: "Engage with GIF icons for immersive 3D experience.",
    },
    category: "react",
    image: visual,
    source_code_link:
      "https://github.com/arafatGithubCode/3d-portfolio-me/tree/main",
    live_app:
      "https://65e51c321a90c3fb19a462b7--profound-snickerdoodle-1f584b.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Expense Tracker",
    description:
      "Effortlessly track daily expenses with ease. Add, edit, and delete transactions, keeping a comprehensive history for reference. Stay organized and in control of your finances with complete CRUD operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    features: {
      one: "Enhanced reusability with custom hooks.",
      two: "Effortless data retrieval with fetch.",
      three: "Integrated OAuth for streamlined authentication.",
      four: "Utilizes React Toast for intelligent alert messaging.",
      five: "Leverages Firebase as the database solution.",
    },
    category: "react",
    image: expense,
    source_code_link:
      "https://github.com/arafatGithubCode/React-Expense-Tracker-App",
    live_app: "https://fir-setup-1bc0f.web.app/",
  },
  {
    id: uuidv4(),
    name: "Hotel Booking",
    description:
      "Developed a MERN real estate platform for seamless property and restaurant transactions. Empowering users to list, rent, and sell with ease.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    features: {
      one: "Enhanced reusability with custom hooks.",
      two: "Effortless data retrieval with fetch.",
      three: "Integrated OAuth for streamlined authentication.",
      four: "Utilizes React Toast for intelligent alert messaging.",
      five: "Leverages Firebase as the database solution.",
    },
    category: "react",
    image: hotel,
    source_code_link: "https://github.com/arafatGithubCode/realtor",
    live_app: "https://realtor-sepia.vercel.app/",
  },
  {
    id: uuidv4(),
    name: "Portfolio App",
    description:
      "Web based portfolio app that allows to user to showcase his skills and expertise to his client.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    features: {
      one: "Used styled-components",
      two: "Create custom json for constant data",
      three: "Maintain complete responsiveness",
      four: "Utilizes React Toast for intelligent alert messaging.",
      five: "Create react components for reusability",
    },
    category: "react",
    image: port,
    source_code_link: "https://github.com/arafatGithubCode/Demo-profile-me",
    live_app: "",
  },
  {
    id: uuidv4(),
    name: "Space App",
    description:
      "Web-based UI design app showcasing space information with animated elements. Inspired by Figma's design concepts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "AOS",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    features: {
      one: "Utilizes AOS for dynamic animations.",
      two: "Creates custom JSON for consistent data handling.",
      three: "Ensures full responsiveness across all devices.",
      four: "Prioritizes user comfort with intuitive design.",
      five: "Utilizes React components for enhanced reusability.",
    },
    category: "react",
    image: space,
    source_code_link: "https://github.com/arafatGithubCode/space-app-react",
    live_app: "https://tcj-space.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "Weather Checker",
    description:
      "Web-based app providing current weather temperatures for any location.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    features: {
      one: "Utilizes raw JavaScript for functionality.",
      two: "Seamless data retrieval using fetch.",
      three: "Interactive styling with raw CSS.",
      four: "Fully responsive design maintained.",
      five: "Utilizes the latest HTML structure.",
    },
    category: "raw css & js",
    image: weather,
    source_code_link: "https://github.com/arafatGithubCode/weather-checker",
    live_app: "https://weather-checker-chi.vercel.app/",
  },
  {
    id: uuidv4(),
    name: "Stop Watch App",
    description:
      "Projects crafted with JavaScript, CSS, and HTML for dynamic, visually appealing web experiences.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    features: {
      one: "Utilizes raw JavaScript for functionality.",
      two: "User can handle time.",
      three: "Interactive styling with raw CSS.",
      four: "Fully responsive design maintained.",
      five: "Utilizes the latest HTML structure.",
    },
    category: "raw css & js",
    image: timer,
    source_code_link: "https://github.com/arafatGithubCode/stop-watch",
    live_app: "https://arafatgithubcode.github.io/stop-watch/",
  },
  {
    id: uuidv4(),
    name: "Image Search App",
    description:
      "Projects crafted with JavaScript, CSS, and HTML for dynamic, visually appealing web experiences.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    features: {
      one: "Utilizes raw JavaScript for functionality.",
      two: "User can search images.",
      three: "Interactive styling with raw CSS.",
      four: "Fully responsive design maintained.",
      five: "Utilizes the latest HTML structure.",
    },
    category: "raw css & js",
    image: search,
    source_code_link: "https://github.com/arafatGithubCode/image-search-app",
    live_app: "https://arafatgithubcode.github.io/image-search-app/",
  },

  {
    id: uuidv4(),
    name: "Todo App",
    description:
      "Streamline your tasks with our Todo web app, offering seamless task management and organization.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    features: {
      one: "Utilizes raw JavaScript for functionality.",
      two: "User can update and delete his tasks",
      three: "Interactive styling with raw CSS.",
      four: "Fully responsive design maintained.",
      five: "Utilizes the latest HTML structure.",
    },
    category: "raw css & js",
    image: todo,
    source_code_link: "https://github.com/arafatGithubCode/todo-app",
    live_app: "https://arafatgithubcode.github.io/todo-app/",
  },
  {
    id: uuidv4(),
    name: "Dice Roll App",
    description:
      "This project crafted with JavaScript, CSS, and HTML for dynamic, visually appealing web experiences. Dice roll game.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    features: {
      one: "Utilizes raw JavaScript for functionality.",
      two: "User can play dice roll",
      three: "Interactive styling with raw CSS.",
      four: "Fully responsive design maintained.",
      five: "Utilizes the latest HTML structure.",
    },
    category: "raw css & js",
    image: dice,
    source_code_link: "https://github.com/arafatGithubCode/dice-roll",
    live_app: "https://arafatgithubcode.github.io/dice-roll/",
  },
  {
    id: uuidv4(),
    name: "Tip Calculator App",
    description:
      "This project crafted with JavaScript, CSS, and HTML for dynamic, visually appealing web experiences.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    features: {
      one: "Utilizes raw JavaScript for functionality.",
      two: "User can calculate tips.",
      three: "Interactive styling with raw CSS.",
      four: "Fully responsive design maintained.",
      five: "Utilizes the latest HTML structure.",
    },
    category: "raw css & js",
    image: tip,
    source_code_link: "https://github.com/arafatGithubCode/tip-calculator",
    live_app: "https://arafatgithubcode.github.io/tip-calculator/",
  },
  {
    id: uuidv4(),
    name: "Recipe Book App",
    description:
      "This project crafted with JavaScript, CSS, and HTML for dynamic, visually appealing web experiences.Recipe Book App.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    features: {
      one: "Utilizes raw JavaScript for functionality.",
      two: "User can search recipes.",
      three: "Interactive styling with raw CSS.",
      four: "Fully responsive design maintained.",
      five: "Utilizes the latest HTML structure.",
    },
    category: "raw css & js",
    image: recipe,
    source_code_link: "https://github.com/arafatGithubCode/recipe-app",
    live_app: "https://arafatgithubcode.github.io/recipe-app/",
  },
  {
    id: uuidv4(),
    name: "Rock Paper Scissors Game",
    description:
      "Projects crafted with JavaScript, CSS, and HTML for dynamic, visually appealing web experiences.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    features: {
      one: "Utilizes raw JavaScript for functionality.",
      two: "User can play game.",
      three: "Interactive styling with raw CSS.",
      four: "Fully responsive design maintained.",
      five: "Utilizes the latest HTML structure.",
    },
    category: "raw css & js",
    image: rock,
    source_code_link:
      "https://github.com/arafatGithubCode/rock-paper-scissor-game-",
    live_app: "https://arafatgithubcode.github.io/rock-paper-scissor-game-/",
  },
  {
    id: uuidv4(),
    name: "Pomodoro Timer App",
    description:
      "Projects crafted with JavaScript, CSS, and HTML for dynamic, visually appealing web experiences.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    features: {
      one: "Utilizes raw JavaScript for functionality.",
      two: "User can set back counter timer.",
      three: "Interactive styling with raw CSS.",
      four: "Fully responsive design maintained.",
      five: "Utilizes the latest HTML structure.",
    },
    category: "raw css & js",
    image: pomodo,
    source_code_link: "https://github.com/arafatGithubCode/pomodoro-timer",
    live_app: "https://arafatgithubcode.github.io/pomodoro-timer/",
  },
];

const education = [
  {
    id: 0,
    title: "Relevant Courses:",
    iconBg: "#383E56",
    img: university,
    institution: "Begum Rokeya University, Rangpur",
    date: "Oct 2021 - Sep 2025 (Expected)",
    grade: "7.41 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Management Information Systems at Begum Rokeya University, Rangpur. I have completed 2 semesters and have a CGPA of 7.39 I am also a member of the IT Innovation Students Club at BRUR, where I am learning and working on exciting projects with a team of talented developers.",
    degree:
      "Bachelor of Business Administration – Management Information Systems (MIS)",
    tags: [
      {
        name: "Information Systems",
        color: "blue-text-gradient",
      },
      {
        name: "Operating Systems",
        color: "green-text-gradient",
      },
      {
        name: "DBMS",
        color: "pink-text-gradient",
      },
      {
        name: "Computer Networks",
        color: "blue-text-gradient",
      },
      {
        name: "Business Fundamentals",
        color: "green-text-gradient",
      },
      {
        name: "Object-Oriented Programming",
        color: "blue-text-gradient",
      },
      {
        name: "Cloud Computing Skills",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    id: 1,
    title: "Sources of Platforms",
    iconBg: "#383E56",
    img: global,
    institution: "My E-learning Odyssey",
    date: "Oct 2019 - Present",
    grade: "50+ Courses",
    desc: "I'm a passionate self-guided learner to loves online education. I like to develop my skills via self-directed learning. Via internet platforms, I've explored into programming, information systems, and an array of tools, collecting knowledge like a sponge.",
    degree: "Self-Guided Mastery in Technology and Information Sciences.",
    tags: [
      {
        name: "Youtube",
        color: "blue-text-gradient",
      },
      {
        name: "Google",
        color: "green-text-gradient",
      },
      {
        name: "Coursera",
        color: "pink-text-gradient",
      },
      {
        name: "W3 School",
        color: "blue-text-gradient",
      },
      {
        name: "Udemy",
        color: "green-text-gradient",
      },
      {
        name: "Tech Based Official Sites",
        color: "pink-text-gradient",
      },
      {
        name: "Stack Overflow",
        color: "green-text-gradient",
      },
    ],
  },
];

export {
  services,
  skills,
  experiences,
  projects,
  bio,
  navLinks,
  education,
  videoProperties,
};
