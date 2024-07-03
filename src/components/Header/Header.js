import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.heading}>
            Build a <span>Resume</span> to get selected!
          </p>
          <p className={styles.heading}>
            <span>Adding</span> Information<span>Made Easy</span>
          </p>
        </div>
        <div className={styles.right}>
          <img src={resumeSvg} alt="Resume" />
        </div>
      </div>
    </>
  );
}

export default Header;
