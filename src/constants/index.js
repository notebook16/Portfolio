import {
    machine,
    backend,
    dsa,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    tripstay,
    weatherApp,
    tree,
    spotify,
    rt,
    salary,
    python,
    strem,
    tensor,
    sck,
    jup,
    numpy,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "full-stack Developer",
      icon: web,
    },
    {
      title: "Machine Learning Practitioner",
      icon: machine,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "DSA Enthusiast",
      icon: dsa,
    },
  ];
  
  const webTechnologies = [
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

 
  ];
  
  const mlTechnologies = [
   
    {
      name: "python",
      icon: python,
    },

    {
      name: "strem",
      icon: strem,
    },

    {
      name: "tensor",
      icon: tensor,
    },

   

    {
      name: "jup",
      icon: jup,
    },

    {
      name: "numpy",
      icon: numpy,
    },
  
  ];
  
  const experiences = [
    {
      title: "GDSC Member",
      company_name: "GDSC Ucer",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2023 - present",
      points: [
        "Actively participated in Google Developer Student Club (GDSC) UCER, collaborating with peers on various tech-driven projects and events.",
        "Contributed to organizing workshops and hackathons, promoting the latest technologies like AI, ML, cloud computing, and web development.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Campus Ambassador at GeeksforGeeks (GFG)",
      company_name: "GeeksForGeeks",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "june 2024 - oct 2024",
      points: [
        "Represented GeeksforGeeks (GFG) on campus, promoting their educational resources and programs to enhance students' technical knowledge.",
        "Organized and conducted workshops, webinars, and coding events to help students improve their problem-solving and coding skills.",
        "Facilitated communication between GFG and students, ensuring the effective dissemination of GFG's latest courses, contests, and career-building opportunities.",
        "Strengthened leadership and communication skills while building a community of learners interested in computer science and technology.",
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
      category: "web-development",
      name: "TripStay",
      description:
        "A full-stack web app for listing hotels with secure user authentication and authorization. Users can browse, filter, and book hotels, while admins manage listings and user access.",
      tags: [
        {
          name: "full-stack",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "EJS",
          color: "pink-text-gradient",
        },
      ],
      image: tripstay,
      source_code_link: "https://tripstay1-0.onrender.com",
    },
    {
      category: "web-development",
      name: "weather App",
      description:
        "A simple weather app that lets users check the current weather by entering a city name. It displays temperature, weather conditions, and other details, making it easy to stay updated on the go.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: weatherApp,
      source_code_link: "https://weather-app-s484.onrender.com",
    },
    {
      category: "web-development",
      name: "tree visualizer",
      description:
        "A tree visualizer that allows users to create and explore data structures like binary trees visually. Users can input values, see the tree's structure, and understand its traversal in an interactive and intuitive way.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: tree,
      source_code_link: "https://github.com/notebook16/Tree-Visualizer-main",
    },
    {
      category: "web-development",
      name: "music player",
      description:
        "A Spotify-inspired music app frontend that lets users explore playlists, browse songs, and view album details. Designed to replicate the look and feel of Spotify for an engaging music discovery experience.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://github.com/notebook16/css-spotify",
    },

    {
      category: "machine-learning",
      name: "RT sign language detection",
      description:
        "An ML model that translates sign language gestures into text or speech, enabling accessible communication for individuals with hearing or speech impairments.",
      tags: [
        {
          name: "tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "numpy",
          color: "pink-text-gradient",
        },
      ],
      image: rt,
      source_code_link: "https://github.com/notebook16/realtime-sign-language-detection",
    },
    {
      category: "machine-learning",
      name: "salary prediction LR model",
      description:
        "A linear regression ML model that predicts salaries based on features like experience, education, and skills, providing accurate insights for career planning and recruitment.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "numpy",
          color: "green-text-gradient",
        },
        {
          name: "scklearn",
          color: "pink-text-gradient",
        },
      ],
      image: salary,
      source_code_link: "https://github.com/notebook16/notebook16-Linear-Regression-model-for-salary-prediction",
    },
  ];
  
  export { services, webTechnologies , mlTechnologies, experiences, testimonials, projects };