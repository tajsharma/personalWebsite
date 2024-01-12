import {
    mobile,
    backend,
    creator,
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
    earth_logo,
    homedepot,
    python_logo,
    inovum,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "AI Engineer",
      icon: mobile,
    },
    {
      title: "Python Developer",
      icon: backend,
    },
    {
      title: "Digital Artist",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Human",
      company_name: "Earth",
      icon: earth_logo,
      iconBg: "#383E56",
      date: "Dec 2000 - Present",
      points: [
        "Learned how to walk and talk by the age of 2",
        "Developed interest in the realms of mathematics, art and computers.",
        "Made my first application/game on globaloria in 8th grade",
        "Picked up basketball and videogames and made some awesome friends along the way",
        "Decided to pursue software and computers for a living"
      ],
    },
    {
      title: "Customer Service Lead",
      company_name: "Home Depot",
      icon: homedepot,
      iconBg: "#E6DEDD",
      date: "Jun 2019 - Sept 2019",
      points: [
        "Developed excellent communications skills through 50+ customer interactions per day",
        "Helped 50+ customers per day to satisify a variety of inventory requests",
        "Displayed leadership skills through leading a team of 4 other associates",
        "Upkept inventory records and managed all online-orders and returns"
      ],
    },
    {
      title: "Python Developer",
      company_name: "DBWorks LLC",
      icon: python_logo,
      iconBg: "#383E56",
      date: "Jan 2023 - Jun 2023",
      points: [
        "Developed and optimized Python automation scripts for data scraping, extracting information from servers with high accuracy and reducing manual data collection efforts",
        "Wrote unit tests to identify bugs and vulnerabilities in the database system and collaborated with the database management team to rectify them",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },
    {
      title: "Full stack Developer Intern",
      company_name: "Inovum IT Solutions",
      icon: inovum,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Collaborated with a cross-functional team of 6 to  maintain the Frontend and Backend of production level website for a professional client using Java, Angular, Typescript, Spring Boot, Docker to fulfill 100% of client requests.",
        "Utilized Java for effective data mapping to ensure seamless data synchronization.",
        "Developed 10+ Frontend features and bug fixes, ensuring enhanced user experience and consistent application performance, while also maintaining the test level code via Unit testing.",
        "Participated in code reviews and provided constructive feedback to other developers in an angile environment using Slack and Jira",
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
      name: "NBA Efficiency Predictor",
      description:
        "Machine learning data analytics project utilizing the NBA API to determine the impact of physical attributes of over 500 NBA players to boost efficiency of NBA offenses",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "pytorch",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/tajsharma/sta141projects/blob/main/final.ipynb",
    },
    {
      name: "Task Tracker",
      description:
        "A command-line task management application developed in Java. It allows users to keep track of/update various info of their tasks, while creating a comprehensive summary.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "design-patterns",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/tajsharma/softwareEngineering/tree/main/TM",
    },
    {
      name: "Connect4 AI",
      description:
        "Developed algorithm to play connect4 via command line or a gui using PyGame. Allows users to play against different types of AI and even make the AI go against another AI",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pygame",
          color: "green-text-gradient",
        },
        {
          name: "AI",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/tajsharma/connect4ai",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };