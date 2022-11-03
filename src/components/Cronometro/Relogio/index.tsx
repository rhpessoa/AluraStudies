import style from "./Relogio.module.scss";

interface Props {
  tempo: number | undefined;
}
function Relogio({ tempo = 0 }: Props) {
  const minutos = Math.floor( tempo / 60);
  const minutoDezena = Math.floor( minutos / 10);
  const minutoUnidade = minutos % 10;

  const segundos = tempo % 60;
  const segundosDezena = Math.floor( segundos / 10);
  const segundosUnidade = segundos % 10;
  return (
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundosDezena}</span>
      <span className={style.relogioNumero}>{segundosUnidade}</span>
    </>
  );
}
export default Relogio;
