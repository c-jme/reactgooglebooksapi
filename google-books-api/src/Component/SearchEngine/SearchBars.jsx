import { useContext, useState } from "react"
import { SearchContext } from "../context/SearchProvider";

const SearchBars = () => {
  const [inputVal, setInputVal] = useState();
  const { search, setSearch } = useContext(SearchContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputVal);
    setInputVal("");
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputVal(e.target.value);
  };

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange}/>
      <input type="submit" value="Search" />
    </form>
  </div>
  )
}

export default SearchBars