import SearchBars from "../../Component/SearchEngine/SearchBars";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.Font}>
      <h1 className={styles.Font_Big}>A book search engine.</h1>
      <p className={styles.Font_Small}>A little search engine for your book searching needs.</p>
      <SearchBars />
    </div>
  )
}

export default HomePage