import { useContext, useState } from "react"
import { SearchContext } from "../context/SearchProvider";
import styles from "./SearchBars.module.scss";

const SearchBars = ({ setClicked }) => {
  const [inputVal, setInputVal] = useState();
  const { setSearch } = useContext(SearchContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputVal);
    setInputVal("");
    setClicked(true);
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputVal(e.target.value);
  };

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <input className={styles.Search} type="text" onChange={handleChange} placeholder=" Enter your text here"/>
      <input className={styles.Search_Btn}type="submit" value="Search" />
    </form>
  </div>
  )
}

export default SearchBars