import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import aiSumz from "@/public/aiSumz.png";
import quicky from "@/public/quicky.png";
import reactQuiz from "@/public/reactQuiz.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer Intern at Tronix TechIt",
    location: "Remote",
    description:
      "Developed user interfaces for web applications using HTML, CSS, and JavaScript technologies, ensuring a responsive and accessible design.",
    icon: React.createElement(FaHtml5),
    date: "Jan'23 - Mar'23",
  },
  {
    title: "ReactJs Intern at Aliema Infotech",
    location: "Indore, IND",
    description:
      "During my internship, I had the exciting opportunity to lead the development of a captivating ReactJs landing page.",
    icon: React.createElement(FaReact),
    date: "Oct'23 - Dec'23",
  },
 
  {
    title: "Institue of Engineering and Technology, Davv",
    location: "Indore, IND",
    description:
      "I completed my Bachlor's of Engineering with Specialization in Mechanical Engineerig From IET DAVV Indore.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  }
] as const;

export const projectsData = [
  {
    title: "Ai-Summarizer",
    description:
      "Developed a web application that allows users to input a URL and receive a summarized version of the webpage using ChatGPT.",
    tags: ["React","Tailwind", "Redux", "API"],
    imageUrl: aiSumz,
    visitLink:"https://joyful-shortbread-6eb995.netlify.app/"
  },
  {
    title: "Food Delivery App",
    description:
      "Developed a food cart app using React.js and Redux to provide an intuitive and seamless user experience for ordering food items from a virtual food cart.",
    tags: ["React", "Bootstrap", "Redux", "Firebase"],
    imageUrl: quicky,
    visitLink:"https://food-delivery-app-six.vercel.app/"

  },
  {
    title: "Quiz App",
    description:
      "The Quiz App, built using React, employs Context API for smooth data handling and seamless navigation, offering users an intuitive interface to engage with diverse quizzes efficiently.",
    tags: ["React", "Tailwind", "ContextAPI","State Managment"],
    imageUrl: reactQuiz,
    visitLink:"https://react-quiz-psi-murex.vercel.app/"

  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "NextJs",
  "NodeJs",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "MySQL",
  "Express",
  "Bootstrap",
  "C++",
  "DSA"
] as const;
