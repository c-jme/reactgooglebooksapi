import SearchBars from "../../Component/SearchBar/SearchBars";
import styles from "./HomePage.module.scss";
import BookEngine from "../Books/Books";
import { useState } from "react";

const HomePage = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.Font}>
      <h1 className={styles.Font_Big}>A book search engine.</h1>
      <p className={styles.Font_Small}>A little search engine for your book searching needs.</p>
      <SearchBars setClicked={setClicked}/>
      { clicked ? <BookEngine /> : <p className={styles.Font_Smaller}>Please enter in your book to search!</p>} 
  
    </div>
  )
}

export default HomePage