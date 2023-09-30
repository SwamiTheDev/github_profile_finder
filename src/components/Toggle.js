import React, { useState } from "react";
import styles from "./Toggle.module.css";

const Toggle = () => {
  const [theme, setTheme] = useState("light");

  const change = () => {
    const body = document.querySelector("body");
    body.classList.toggle("light");
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className={styles.toggle}>
      <p className={styles[`${theme}`]}>{theme}</p>
      <input type="checkbox" id="toggle" onChange={change} />
      <label htmlFor="toggle"></label>
    </div>
  );
};

export default Toggle;
