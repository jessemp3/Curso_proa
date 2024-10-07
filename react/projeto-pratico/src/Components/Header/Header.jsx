import logo from "../../assets/viagens.jpg";
import lupa from "../../assets/lupa.png";
import styles from "../../styles/Header.module.css"

export default function Header() {
  return (
    <header className={styles.content}>
      <img className={styles.logo} src={logo} alt="" />

      <nav className={styles.menu}>
        <ul>

        <li>Home</li>
        <li>Escócia</li>
        <li>Grand Canyon</li>
        <li>Muralhas da China</li>
        <li>Aruba</li>
        </ul>
      </nav>

      <div className={styles.login}>
        <input type="search" />
      </div>

      <img className={styles.lupa} src={lupa} alt="" />
    </header>
  );
}
