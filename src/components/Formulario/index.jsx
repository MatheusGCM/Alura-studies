import React, { useState } from "react";
import Btn from "../Btn";
import styles from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

const Formulario = (props) => {
  const adicionarTarefa = (e) => {
    e.preventDefault();
    props.setTarefas((tarefa) => [
      ...tarefa,
      { ...state, selecionado: false, completado: false, id: uuidv4() },
    ]); //atualizando tarefas
    setState({
      tarefa: "",
      tempo: "00:00",
    }); //resetando formulario
  };

  const [state, setState] = useState({
    tarefa: "",
    tempo: "00:00",
    selecionado: Boolean,
    completado: Boolean,
    id: String,
  });

  return (
    <form className={styles.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={state.tarefa}
          onChange={(e) => setState({ ...state, tarefa: e.target.value })}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          value={state.tempo}
          onChange={(e) => setState({ ...state, tempo: e.target.value })}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Btn>Adicionar</Btn>
    </form>
  );
};

export default Formulario;
