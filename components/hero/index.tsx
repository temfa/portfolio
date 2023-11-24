import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layouts";
import Location from "@/svg-components/location";
import Github from "@/svg-components/github";
import Twitter from "@/svg-components/twitter";
// import Figma from "@/svg-components/figma";
import Image from "next/image";
import Personal from "../assets/picture.jpg";

const Hero = () => {
  return (
    <Layout type={true}>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <div className={styles.heroIntro}>
            <h2>Hi, I’m Temitope 👋</h2>
            <p>
              CEO of Tema Digital Designs, I am a passionate Front-End Developer with a keen eye for design and a knack for turning ideas into seamless, user-centric web
              experiences. Dedicated to creating visually stunning and functionally intuitive interfaces that leave a lasting impression.
            </p>
          </div>
          <div className={styles.heroLocation}>
            <div>
              <Location />
              <p>Ondo State, Nigeria</p>
            </div>
            <div>
              <div className={styles.dotContainer}>
                <div className={styles.dot}></div>
              </div>
              <p>Available for new projects</p>
            </div>
          </div>
          <div className={styles.heroSkills}>
            <div>
              <Github />
            </div>
            <div>
              <Twitter />
            </div>
            {/* <div>
              <Figma />
            </div> */}
          </div>
        </div>
        <div className={styles.heroImg}>
          <div className={styles.heroBackground}>
            <Image src={Personal} alt="Personal" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
