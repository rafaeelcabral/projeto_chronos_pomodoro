//Recebe o total de sgundos por parâmetro e devolve uma String com os muinutos formatados
function formatedSecondsRemaining(totalSeconds: number) {

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return (String(minutes).padStart(2, "0")) + ":" + (String(seconds).padStart(2, "0"));

}

export { formatedSecondsRemaining };