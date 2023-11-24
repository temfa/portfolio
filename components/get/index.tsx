import React from "react";
import styles from "./styles.module.css";
import Layout from "@/layouts";
import Title from "../title";
import Envelope from "@/svg-components/envelope";
import Copy from "@/svg-components/copy";
import Phone from "@/svg-components/phone";
import Github from "@/svg-components/github";
import Twitter from "@/svg-components/twitter";
import { toast } from "react-toastify";

const GetInTouch = () => {
  return (
    <Layout type={true}>
      <div className={styles.get} id="contact">
        <div className={styles.getHead}>
          <Title title="Get in touch" />
          <p>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
        </div>
        <div className={styles.getBody}>
          <div>
            <Envelope /> <p>topeakinfe@gmail.com</p>
            <Copy
              action={() => {
                navigator.clipboard.writeText("topeakinfe@gmail.com").then(() => {
                  toast.success("Copied Successfully");
                });
              }}
            />
          </div>
          <div>
            <Phone />
            <p>+234 81 050 881 75</p>
            <Copy
              action={() => {
                navigator.clipboard.writeText("08105088175").then(() => {
                  toast.success("Copied Successfully");
                });
              }}
            />
          </div>
        </div>
        <div className={styles.getFooter}>
          <p>You may also find me on these platforms!</p>
          <div>
            <Github />
            <Twitter />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetInTouch;
