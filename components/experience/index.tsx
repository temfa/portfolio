import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layouts";
import Title from "../title";
import { experience } from "@/utils/data";

const Experience = () => {
  return (
    <Layout type={false}>
      <div className={styles.experienceContainer} id="experience">
        <div className={styles.experienceHeader}>
          <Title title="Experience" />
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        {experience?.map((items, index) => {
          return (
            <div className={styles.experienceBody} key={index}>
              <h2>{items.company}</h2>
              <div className={styles.experienceMiddle}>
                <h2>{items.position}</h2>
                <ul>
                  {items.work?.map((item, index2) => {
                    return <li key={index2}>{item}</li>;
                  })}
                </ul>
              </div>
              <p>{items.duration}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Experience;
