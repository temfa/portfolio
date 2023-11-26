import React, { useState } from "react";
import styles from "./styles.module.css";
import Logo from "../assets/my-logo.png";
import Image from "next/image";
import Link from "next/link";
import Light from "@/svg-components/light";
import { useDispatch } from "react-redux";
import { setTheme } from "@/reduxtoolkit/slice/theme";
import Dark from "@/svg-components/dark";
import Close from "@/svg-components/close";
import Bar from "@/svg-components/bars";

const Header = ({ theme }: { theme: string }) => {
  const [mobile, setMobile] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className={styles.headerBody}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <div>
            <Image src={Logo} alt="my-logo" />
          </div>
          {mobile ? <Close theme={theme} action={() => setMobile(!mobile)} /> : <Bar theme={theme} action={() => setMobile(!mobile)} />}
        </div>
        <div className={mobile ? `${styles.headerWrapper} ${styles.headerCont}` : styles.headerWrapper}>
          <div
            className={styles.headerLinks}
            onClick={() => {
              setMobile(false);
            }}>
            <Link href="/home#about">About</Link>
            <Link href="/home#work">work</Link>
            <Link href="/home#skills">skills</Link>
            <Link href="/home#experience">experience</Link>
            <Link href="/home#testimonials">testimonials</Link>
            <Link href="/home#contact">contact</Link>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.headerActions}>
            <div>
              <p>Switch Theme</p>
              {theme === "dark" ? (
                <Light
                  action={() => {
                    dispatch(setTheme("light"));
                  }}
                />
              ) : (
                <Dark
                  action={() => {
                    dispatch(setTheme("dark"));
                  }}
                />
              )}
            </div>
            <button>
              <a href="/My-CV.pdf" rel="noopener noreferrer" download="Temitope Akinfe CV">
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
