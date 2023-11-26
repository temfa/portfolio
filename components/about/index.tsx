import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layouts";
import Image from "next/image";
import Personal from "../assets/personal.jpg";
import Title from "../title";

const AboutUs = () => {
  return (
    <Layout type={false}>
      <div className={styles.aboutWrapper} id="about">
        <Title title="About me" />
        <div className={styles.aboutBody}>
          <div className={styles.aboutImg}>
            <div className={styles.aboutBackground}>
              <Image src={Personal} alt="Personal" />
            </div>
          </div>
          <div className={styles.aboutText}>
            <h2>Curious about me? Here you have it:</h2>
            <div>
              <p>
                Experienced Front-End Software Engineer with over 5 years of hands-on expertise in designing, developing, and implementing user-centric web applications. An
                innovative developer with an established history of success in delivering exceptional web solutions, resulting in a 98% client satisfaction rating and a 20%
                increase in user engagement. Proficient in utilizing a diverse skill set encompassing HTML, CSS, PHP, JavaScript frameworks (such as ReactJS, NextJS, Angular, or
                Vue.js), Typescript and responsive design principles to create intuitive and high-performance user interfaces. Proven track record of collaborating with
                cross-functional teams to deliver elegant, scalable solutions aligned with business objectives. Continuously seeking to leverage emerging technologies and industry
                best practices to drive innovation and enhance user experiences.
              </p>
              <p>
                I began my journey as a web developer in 2018, and since then, I have continued to grow and evolve as a developer, taking on new challenges and learning the latest
                technologies along the way.5 years after starting my web development journey, I am building cutting-edge web applications using modern technologies such as Next.js,
                TypeScript, Javascript, React and much more.
              </p>
              <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
              <p>
                When I am not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some
                free time.
                {/* You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub. */}
              </p>
              {/* <p>Finally, some quick bits about me.</p> */}
              <p>One last thing, I am available for freelance work, so feel free to reach out and say hello! I promise I dont bite 😉</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
