import styles from "../assets/styles/Header.module.scss";
import logo from "../assets/images/logo.jpg";
export default function Header() {
  return (
    <div className={`${styles.header} d-flex flex-row align-items-center`}>
      <i className="fa-solid fa-bars mr-15"></i>
      <div className="flex-fill">
        <img src={logo} alt="Logo Projet" />
      </div>

      <div className="d-flex align-items-center">
        <button className={`${styles["btn-cart"]} mr-10`}>
          <i className="fa-solid fa-heart"></i> WishList
        </button>

        <button className={`${styles["btn-login"]}`}>Connexion</button>
      </div>
    </div>
  );
}
