import Figma from "@/svg-components/figma";
import Git from "@/svg-components/git";
import Javascript from "@/svg-components/javascript";
import NextSvg from "@/svg-components/next";
import ReactSvg from "@/svg-components/react";
import Typescript from "@/svg-components/typescript";
import Emma from "../components/assets/emmaomg.png";
import FastCredit from "../components/assets/fastcredit.png";
import BrookeHowse from "../components/assets/brookehowse.png";
import SmeApp from "../components/assets/smeapp.png";
import Html from "@/svg-components/html";
import Css from "@/svg-components/css";
import Firebase from "@/svg-components/firebase";
import PHP from "@/svg-components/php";

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
  // {
  //   skills: "PHP",
  //   icon: <PHP />,
  // },
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
    text: "Spearheaded the development of a visually stunning and highly functional portfolio website for EMMA OMG, focusing on showcasing achievements, content organization, and user engagement. Employed modern design trends and utilized React to create a dynamic, personalized experience tailored to the client's brand.",
    skills: ["React", "Figma", "Git", "CSS"],
    img: Emma,
    link: "https://www.emmaomg.com/",
  },
  {
    title: "Fastcredit",
    text: "Proud to have contributed to the success of Fast Credit, a leading fintech company in Nigeria. Through strategic web development, I played a key role in enhancing the online presence, user experience, and accessibility of their website. Leveraging cutting-edge technologies, my achievements with Fast Credit include optimizing the platform for speed, efficiency, and an overall seamless user journey. Excited to be part of a team driving financial technology innovation in Nigeria.",
    skills: ["React", "Figma", "Git", "CSS"],
    img: FastCredit,
    link: "https://fastcredit-ng.com/",
  },
  {
    title: "Brookehowse",
    text: "Collaborated with a real estate client to conceptualize and execute a comprehensive website allowing users to browse available properties, view details, and submit applications. Integrated user-friendly features enabling property search, filtering, and application submission, enhancing user engagement and streamlining the application process",
    skills: ["React", "Figma", "Git", "CSS", "Firebase"],
    img: BrookeHowse,
    link: "https://www.brookehowseestate.com/",
  },
  {
    title: "MySmeApp",
    text: "MySmeApp pioneered by Ecobank is a revolutionary platform designed to bridge the gap between business owners and customers. As a dynamic web application, it goes beyond connecting enterprises with their clientele; it empowers seamless financial transactions. With MySMEApp, users can effortlessly conduct transfers and pay bills, transforming the way businesses and customers interact",
    skills: ["NextJS", "Figma", "Git", "CSS", "Redux Toolkit"],
    img: SmeApp,
    link: "https://mysmeapp.ecobank.com/",
  },
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
      "Collaborated with UI/UX designers to bring creative visions to life, balancing aesthetics with optimal functionality",
      "Conducted thorough testing and debugging, ensuring the delivery of error-free, polished websites",
    ],
  },
  {
    company: "Freelancing",
    position: "Sr. Frontend Developer",
    duration: "September 2019 - Present",
    work: [
      "Developed a responsive mini e-commerce platform leveraging React and Firebase, implementing features such as user authentication, product listings, cart functionality, and secure payment gateways.",
      "Spearheaded the development of a visually stunning and highly functional portfolio website for EMMA OMG, focusing on showcasing achievements, content organization, and user engagement.",
      "Collaborated with a real estate client to conceptualize and execute a comprehensive website allowing users to browse available properties, view details, and submit applications.",
    ],
  },
];

export const group = (items: any, n: number) =>
  items.reduce((acc: any, x: any, i: any) => {
    const idx = Math.floor(i / n);
    acc[idx] = [...(acc[idx] || []), x];
    return acc;
  }, []);
