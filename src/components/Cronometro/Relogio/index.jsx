import React from "react";
import styles from "./Relogio.module.scss";

const Relogio = ({ tempo = 0 }) => {
  const min = Math.floor(tempo / 60);
  const seg = tempo % 60;
  const [minutoDezena, minutoUnidade] = String(min).padStart(2, "0");
  const [segundoDezena, segundoUnidade] = String(seg).padStart(2, "0");
  return (
    <>
      <span className={styles.relogioNumero}>{minutoDezena}</span>
      <span className={styles.relogioNumero}>{minutoUnidade}</span>
      <span className={styles.relogioDivisao}>:</span>
      <span className={styles.relogioNumero}>{segundoDezena}</span>
      <span className={styles.relogioNumero}>{segundoUnidade}</span>
    </>
  );
};

export default Relogio;
