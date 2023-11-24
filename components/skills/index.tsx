import Layout from "@/layouts";
import React from "react";
import styles from "./styles.module.css";
import Title from "../title";
import { skillsSet } from "@/utils/data";

const Skills = () => {
  return (
    <Layout type={true}>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsHeader}>
          <Title title="Skills" />
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div className={styles.skillsBody}>
          {skillsSet?.map((item, index) => {
            return (
              <div className={styles.skillsSingle} key={index}>
                {item.icon}
                <p>{item.skills}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
