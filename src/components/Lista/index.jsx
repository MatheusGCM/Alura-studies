import React from "react";
import Item from "./Item";
import styles from "./Lista.module.scss";

const Lista = (props) => {
  return (
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {props.tarefas.map((item) => (
          <Item
            key={item.id}
            {...item}
            selecionaTarefa={props.selecionaTarefa}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Lista;
