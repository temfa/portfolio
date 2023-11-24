import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layouts";
import Title from "../title";
import { workSet } from "@/utils/data";
import Image from "next/image";
import Goto from "@/svg-components/goto";

const Work = () => {
  return (
    <Layout type={true}>
      <div className={styles.workContainer} id="work">
        <div className={styles.workHeader}>
          <Title title="Work" />
          <p>Some of the noteworthy projects I have built:</p>
        </div>
        {workSet?.map((item, index) => {
          return (
            <div className={(index + 1) % 2 == 0 ? styles.workBodys : styles.workBody} key={index}>
              <div className={styles.workImg}>
                <Image src={item.img} alt="Work-img" />
              </div>
              <div className={styles.workText}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <div className={styles.workList}>
                  {item.skills?.map((items, index2) => {
                    return <Title title={items} key={index2} />;
                  })}
                </div>
                <Goto link={item.link} />
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Work;
