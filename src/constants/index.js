import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  ps,
  ae,
  java,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  design,
  video,
  nat,
  auth,
  star,
  edusite,
  quickBuy,
  myShare,
  threejs,
  cpp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Programmer",
    icon: mobile,
  },
  {
    title: "Graphic Designer",
    icon: backend,
  },
  {
    title: "Video Editor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "java",
    icon: java,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "ps",
    icon: ps,
  },
  {
    name: "ae",
    icon: ae,
  },
];

const experiences = [
  {
    title: "Graphic Designer",
    company_name: "Freelancer",
    icon: design,
    iconBg: "#383E56",
    date: "2020 - Present",
    points: [
      "Specializing in creating visually compelling event posters and flyers.",
      "Serving clients primarily in the UK and Australia.",
      "Utilizing advanced skills in Photoshop to deliver high-quality designs.",
      "Committed to producing outstanding and precise work for every project.",
    ],
  },
  {
    title: "Video Editing",
    company_name: "Freelancer",
    icon: video,
    iconBg: "#E6DEDD",
    date: "2020 - Present",
    points: [
      "Specializing in creating dynamic animation logos, social media reels, and event videos.",
      "Serving clients primarily in the UK and Australia.",
      "Expert in Premiere Pro and After Effects, utilizing advanced skills to produce high-quality video content.",
      " Committed to delivering outstanding and precise work for every project.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SEEDEVI SPICE AUTHENTICATION SYSTEM",
    description:
      "This is a web application we developed as a project for the second semester of our second year. It was created for a real client. My contribution was the Authentication System. This system is the most advanced part, featuring encryption options, two-step verification, hashing methods, and middleware. It is a very advanced and strong authentication system.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "purple-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "handlebars",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: auth,
    source_code_link:
      "https://github.com/poojithakiriyalagammana/Seedevi-FrontEnd",
  },
  {
    name: "NATURAL DISASTER TRACKING SYSTEM",
    description:
      "This is a project for the second year, second semester. The project involves developing five APIs and integrating four APIs from NASA. The purpose of the project is to detect major natural disasters globally. Additionally, users can be alerted about unmarked disasters through brief notifications. An admin interface allows for user management and login capabilities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
      {
        name: "spring boot",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
    ],
    image: nat,
    source_code_link:
      "https://github.com/poojithakiriyalagammana/Natural-Disaster-tracking-system",
  },

  {
    name: "Star-SuperCenter e-commerce website",
    description:
      "I developed this e-commerce website as a project during the second semester of my first year. It is designed for Star Super Center, an online grocery shop. This website was built using PHP, CSS, JavaScript, and SQL. As my first project, it features comprehensive CRUD functionality, including user management, product management, category management, and a shopping cart system.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
    ],
    image: star,
    source_code_link:
      "https://github.com/poojithakiriyalagammana/Star-SuperCenter",
  },
  {
    name: "MyShare digital advertisement Software",
    description:
      "MyShare is a digital advertisement company specializing in social media advertisement campaigns, banners, and digital artworks. Our team was tasked with automating MyShare's business processes, which were previously managed through Excel sheets and emails. We developed a Java Swing desktop application to streamline operations, including customer order management, supplier management, inventory management, employee management, employee allocation to orders, monthly sales reporting, and customer notifications. For my part, I implemented the feature that sends email notifications to employees when a new order is allocated, ensuring timely and efficient communication within the organization.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "phpmyadmin",
        color: "orange-text-gradient",
      },
      {
        name: "google-OAuth",
        color: "green-text-gradient",
      },
    ],
    image: myShare,
    source_code_link:
      "https://github.com/poojithakiriyalagammana/UserManagement-System",
  },
  {
    name: "Edusite Student Record Management System ",
    description:
      "For my second project, We developed a small web application designed as an educational site. This Student Record Management System was created using HTML, Bootstrap, jQuery, REST API, JSON Array, and AJAX. This project was a testing website that introduces a web-based system to automate all the manual aspects of managing student records for an educational institute. Its user-friendly web interface allows the student affairs unit to handle student data in a convenient, efficient, and simplified manner. The system utilizes a REST API to manage resources on the backend.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "REST-API",
        color: "orange-text-gradient",
      },
      {
        name: "Blootsrap",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: edusite,
    source_code_link: "https://github.com/poojithakiriyalagammana/Edusite",
  },
  {
    name: "QuickBuy Android application ",
    description:
      "We developed an e-commerce Android app called QuickBuy, similar to Daraz's online store. The app connects to external services such as payment gateways and SMS services, using dummy outputs to simulate these functions. Additionally, we integrated Firebase as the database to manage and store user and product data.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "androidStudio",
        color: "green-text-gradient",
      },
    ],
    image: quickBuy,
    source_code_link: "https://github.com/poojithakiriyalagammana/QuickBuy",
  },
];

export { services, technologies, experiences, testimonials, projects };
