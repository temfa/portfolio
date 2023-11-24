import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layouts";
import Title from "../title";
import { testimonial } from "@/utils/data";
import SingleTestimonials from "../single-testimonials";

const Testimonials = () => {
  return (
    <Layout type={false}>
      <div className={styles.testimonialCont} id="testimonials">
        <div className={styles.testimonialHeader}>
          <Title title="Testimonials" />
          <p>Nice things people have said about me:</p>
        </div>
        <div className={styles.testimonialBody}>
          {testimonial?.map((item, index) => {
            return <SingleTestimonials key={index} name={item.name} text={item.text} title={item.position} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
