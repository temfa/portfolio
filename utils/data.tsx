import Figma from "@/svg-components/figma";
import Git from "@/svg-components/git";
import Javascript from "@/svg-components/javascript";
import NextSvg from "@/svg-components/next";
import ReactSvg from "@/svg-components/react";
import Typescript from "@/svg-components/typescript";
import Emma from "../components/assets/emmaomg.png";
import FastCredit from "../components/assets/fastcredit.png";
import BrookeHowse from "../components/assets/brookehowse.png";
import Html from "@/svg-components/html";
import Css from "@/svg-components/css";
import Firebase from "@/svg-components/firebase";

export const skillsSet = [
  {
    skills: "HTML5",
    icon: <Html />,
  },
  {
    skills: "CSS",
    icon: <Css />,
  },
  {
    skills: "Javascript",
    icon: <Javascript />,
  },
  {
    skills: "TypeScript",
    icon: <Typescript />,
  },
  {
    skills: "React",
    icon: <ReactSvg />,
  },
  {
    skills: "Next.js",
    icon: <NextSvg />,
  },
  {
    skills: "Figma",
    icon: <Figma />,
  },
  {
    skills: "Git",
    icon: <Git />,
  },
  {
    skills: "Firebase",
    icon: <Firebase />,
  },
];

export const workSet = [
  {
    title: "Emmaomg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: ["React", "Figma", "Git", "CSS"],
    img: Emma,
    link: "https://www.emmaomg.com/",
  },
  {
    title: "Fastcredit",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: ["React", "Figma", "Git", "CSS"],
    img: FastCredit,
    link: "https://fastcredit-ng.com/",
  },
  {
    title: "Brookehowse",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: ["React", "Figma", "Git", "CSS", "Firebase"],
    img: BrookeHowse,
    link: "https://www.brookehowseestate.com/",
  },
  {
    title: "MySmeApp",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: ["React", "Figma", "Git", "CSS", "Redux Toolkit"],
    img: Emma,
    link: "https://www.emmaomg.com/",
  },
];

export const workImage = [
  "/../components/assets/emmaomg.png",
  "/../components/assets/fastcredit.png",
  "/../components/assets/brookehowse.png",
  "/../components/assets/emmaomg.png",
];

export const testimonial = [
  {
    text: "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
    name: "John Doe",
    position: "Founder - xyz.com",
  },
  {
    text: "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
    name: "John Doe",
    position: "Founder - xyz.com",
  },
  {
    text: "Temitope was extremely easy and pleasant to work with and he truly cares about the project being a success. Temitope has a high level of knowledge and was able to work on my MERN stack application without any issues.",
    name: "John Doe",
    position: "Freelancer",
  },
];

export const experience = [
  {
    company: "Codemania",
    position: "Sr. Frontend Developer",
    duration: "July 2022 - Dec 2023",
    work: [
      "Developed and maintained dynamic, client-focused websites, ensuring a high level of functionality and user satisfaction.",
      "Implemented responsive design principles, enhancing the accessibility and user experience across various devices",
      "Utilized the latest web technologies and frameworks to stay at the forefront of industry trends",
      "Collaborated with UX/UI designers to bring creative visions to life, balancing aesthetics with optimal functionality",
      "Conducted thorough testing and debugging, ensuring the delivery of error-free, polished websites",
    ],
  },
  {
    company: "Freelancing",
    position: "Sr. Frontend Developer",
    duration: "July 2018 - Present",
    work: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

export const group = (items: any, n: number) =>
  items.reduce((acc: any, x: any, i: any) => {
    const idx = Math.floor(i / n);
    acc[idx] = [...(acc[idx] || []), x];
    return acc;
  }, []);
