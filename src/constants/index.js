import {
    mobile,
    backend,
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
    logo,
    vape,
    jnt,
    heineken,
    iapro,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      title: "VapeApe. Sales Assist",
      company_name: "VapeApe",
      icon: vape,
      iconBg: "#383E56",
      date: "November 2023 - August 2024",
      points: [
        "Assisting customers and ensuring smooth transactions in a retail setting.",
        "Answering questions about products or services.",
        "Processing sales of merchandise in-store or online.",
        "Supervising restocking of product shelves",
      ],
    },
    {
      title: "Admin Clerk. J&T",
      company_name: "J&t",
      icon: jnt,
      iconBg: "#E6DEDD",
      date: "November 2023 - August 2024",
      points: [
        "Contacting clients via phone or email",
        "Organizing and storing files.",
        "Managing office supplies.",
        "Making copies of documents.",
      ],
    },
    {
      title: "D'Tiki Bartender",
      company_name: "D'Tiki Shack",
      icon: heineken,
      iconBg: "#383E56",
      date: "February 2018 - Jun 2022",
      points: [
        "Mix and serve alcoholic beverages based on customer requests.",
        "Verify the identification and age of customers.",
        "Accept payment from customers.",
        "Clean glasses and bar utensils.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "IA",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "September 2024 - Until Now",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "IA | Portfolio",
      description:
        "Web-based platform that allows users to see my portfolio. Starting from who am i, what i do, my experience and my Project.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: iapro,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };