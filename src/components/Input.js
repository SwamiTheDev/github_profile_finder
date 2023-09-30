import search from "../images/icon-search.svg";
import React, { useRef } from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  const choice = useRef("");

  const searchUserHandler = (e) => {
    e.preventDefault();
    props.changeUser(choice.current.value);
    choice.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={searchUserHandler}>
      <img src={search} alt="search icon" style={{ height:'50%',marginLeft:'10px'}}/>
      <input type="text" ref={choice} placeholder="Search Github username..." />
      <div>
        <p className="error">{props.error}</p>
        <button type="submit" >Search</button>
      </div>
    </form>
  );
};

export default Input;
