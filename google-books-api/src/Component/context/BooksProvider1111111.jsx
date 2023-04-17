// import { createContext, useState, useEffect } from "react";

// export const BooksContext = createContext();

// const BooksProvider = ({ children }) => {
//     const [books, setBooks] = useState([]);

//     const [filteredBooks, setFilteredBooks] = useState([]);

//     useEffect(() => {
//         setFilteredBooks(books);
//     }, [books]);
//     return (
//         <BooksContext.Provider
//             value={{ books, setBooks, filteredBooks, setFilteredBooks}}
//         >
//             {children}
//         </BooksContext.Provider>
//     );
// };

// export default BooksProvider;
