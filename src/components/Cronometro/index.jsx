import React, { useEffect, useState } from "react";
import Btn from "../Btn";
import Relogio from "./Relogio";
import styles from "./Cronometro.module.scss";
import tempoParaSegundos from "../../common/utils/time";

const Cronometro = ({ selecionado, finalizarTarefa }) => {
  const [tempo, setTempo] = useState();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  const regressiva = (contador) => {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  };
  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Btn onClick={() => regressiva(tempo)}>Começar!</Btn>
    </div>
  );
};

export default Cronometro;
