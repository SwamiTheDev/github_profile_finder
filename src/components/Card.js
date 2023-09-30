import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  const date = new Date(props.user.created_at);

  const checkInfo = (object, errorText = "Not Available", style = "") => {
    if (object) {
      return <p className={`available ${style && styles.bio}`}>{object}</p>;
    } else {
      return (
        <p className={`not-available ${style && styles.bio}`}>{errorText}</p>
      );
    }
  };

  return (
    <div className={styles.card}>
      <img src={props.user.avatar_url} className={styles.avatar} alt="" />
      <div className={styles.name}>
        <h2>
          <a className="available" href={`https://github.com/${props.user.login}`}>
            {props.user.name}
          </a>
        </h2>
        <p>
          Joined
          {` ${date.getDate()} ${date.toLocaleString("en-us", {
            month: "short",
          })} ${date.getFullYear()}`}
        </p>
        <h3>@{props.user.login}</h3>
      </div>
      {checkInfo(props.user.bio, "This profile has no bio", "bio")}
      <table className={styles["profile-info"]}>
        <tbody>
          <tr className={styles["table-header"]}>
            <th>Repos</th>
            <th>Followers</th>
            <th>Following</th>
          </tr>
          <tr>
            <th>{props.user.public_repos}</th>
            <th>{props.user.followers}</th>
            <th>{props.user.following}</th>
          </tr>
        </tbody>
      </table>
      <div className={styles.contact}>
        <ul>
          <li>
            <img src="./images/icon-location.svg" alt="" />
            {checkInfo(props.user.location)}
          </li>
          <li>
            <img src="./images/icon-website.svg" alt="" />
            {props.user.blog && (
              <a href={props.user.blog} className="available">
                {props.user.blog}
              </a>
            )}
            {!props.user.blog && checkInfo(props.user.blog)}
          </li>
          {/* <li>
            <img src="./images/icon-twitter.svg" alt="" />
            {checkInfo(props.user.social)}
          </li>
          <li>
            <img src="./images/icon-company.svg" alt="" />
            {checkInfo(props.user.company)}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Card;
