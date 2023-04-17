import { useState } from "react";
import { createContext } from "react"

export const SearchContext = createContext();

const SearchProvider = ({ children  }) => {

  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{search, setSearch}}>
    { children }
    </SearchContext.Provider>
  )
}

export default SearchProvider