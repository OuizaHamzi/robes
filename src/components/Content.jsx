import React, { useEffect, useState, Fragment } from "react";
import styles from "../assets/styles/Content.module.scss";
import Bijou from "./Bijou";
import { data } from "../data/bijoux";

export default function Content() {
  const [bijoux, setBijoux] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchBijoux = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/bijoux"); // Assurez-vous que l'URL est correcte
        const data = await response.json();
        setBijoux(data);
      } catch (error) {
        console.error("Error fetching bijoux data:", error);
      }
    };

    fetchBijoux();
  }, []);

  const handleChange = (e) => {
    setFilter(e.target.value.trim().toLowerCase());
  };
  return (
    <div className=" flex-fill container p-20">
      <h1 className="my-30 text-center">Découverez nos bijoux Kabyle</h1>
      <div className={`card d-flex flex-column p-20 ${styles.contentCard}`}>
        <div
          className={`${styles.searchBar} d-flex flex-row justify-content-center align-items-center my-30`}
        >
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input
            onChange={handleChange}
            type="text"
            className="flex-fill"
            placeholder="Rechercher"
          />
        </div>

        <div className={styles.grid}>
          {data
            .filter((bijou) => bijou.titre.toLocaleLowerCase().includes(filter))
            .map((bijou) => (
              <Fragment key={bijou.id}>
                {" "}
                <Bijou titre={bijou.titre} image={bijou.image} />
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}
