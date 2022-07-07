const tempoParaSegundos = (tempo) => {
  const [horas = "0", minutos = "0", segundos = "0"] = tempo.split(":");

  const hs = Number(horas) * 3600;
  const ms = Number(minutos) * 60;
  return hs + ms + Number(segundos);
};

export default tempoParaSegundos;
