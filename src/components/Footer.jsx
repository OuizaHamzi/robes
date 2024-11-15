import styles from "../assets/styles/Footer.module.scss";

export default function Footer() {
  return (
    <div
      className={`${styles.footer} p-20 d-flex flex-row justify-content-center align-items-center`}
    >
      ©2024 Jewelry All Rights Reserved.
    </div>
  );
}
