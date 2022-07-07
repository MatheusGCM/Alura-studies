import React from "react";
import styles from "./Btn.module.scss";

const Btn = ({ children, onClick }) => {
  return (
    <button className={styles.botao} onClick={onClick}>
      {children}
    </button>
  );
};

export default Btn;
