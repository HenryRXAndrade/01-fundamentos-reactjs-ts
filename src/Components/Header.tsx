import styles from "./Header.module.css";
import logo from "../Images/NewTux.svg";

//styles.header é o nome que dou a classe no componente, se eu criasse a classe no arquivo css com nome cabecalho... eu teria que passar no className styles.cabecalho.
export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo" />
    </header>
  );
}
