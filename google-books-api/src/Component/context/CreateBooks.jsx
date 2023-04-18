import { useState } from "react";
import { createContext } from "react"

export const BooksContext = createContext();

const CreateBooks = ({ children }) => {
  const [books, setBooks] = useState("");
  return (
    <BooksContext.Provider value={{books, setBooks}}>
    { children }
    </BooksContext.Provider>
  )
}


export default CreateBooks