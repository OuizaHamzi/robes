import React, { useState } from "react";
import bracelet from "../assets/images/bracelet.jpg";
import styles from "../assets/styles/Bijou.module.scss";

const Bijou = ({titre, image}) => {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
  };
  return (
    <div onClick={handleClick} className={styles.bijou}>
      <div className={styles.imageContainer}>
        <img src={image} alt="bracelet kabyle" />
      </div>
      <div
        className={`${styles.bijouTitle} d-flex flex-column justify-content-center align-items-center `}
      >
        <h3>{titre}</h3>
        <i className={`fa-solid fa-heart ${liked ? "liked" : ""}`}></i>
      </div>
    </div>
  );
};

export default Bijou;


