import React from "react";
import styles from "./Data.module.css";

const Data = (myData) => {
  return (
    <div>
      {myData.myData.map((car) => (
        <div key={car.id}>
          <h1 className={styles.h1_component}>Modelo: {car.nome}</h1>
          <p className={styles.p_component}>Marca: {car.marca}</p>
          <p className={styles.p_component}>Ano: {car.ano}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
