import Layout from "@/layouts";
import React from "react";
import styles from "./styles.module.css";
import Title from "../title";
import { group, skillsSet } from "@/utils/data";

const Skills = () => {
  return (
    <Layout type={true}>
      <div className={styles.skillsContainer} id="skills">
        <div className={styles.skillsHeader}>
          <Title title="Skills" />
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <div className={styles.skillsBody}>
          {group(skillsSet, 3).map((item: any, index: number) => {
            return (
              <div className={styles.skillsGroup} key={index}>
                {item?.map((items: any, index2: number) => {
                  return (
                    <div className={styles.skillsSingle} key={index2}>
                      {items.icon}
                      <p>{items.skills}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
