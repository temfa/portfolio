import React from "react";
import styles from "./styles.module.css";
import UserSvg from "@/svg-components/user";

const SingleTestimonials = ({ text, name, title }: { text: string; name: string; title: string }) => {
  return (
    <div className={styles.singleTestimonial}>
      <div className={styles.singleTestimonialHead}>
        <UserSvg />
      </div>
      <p>{text}</p>
      <div className={styles.singleUser}>
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SingleTestimonials;
