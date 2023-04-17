// import { useContext, useState } from "react";
// // import { SearchContext } from "../context/SearchProvider";
// import { BooksContext } from "../context/BooksProvider";
// import { useLocation, useNavigate } from "react-router-dom";
// import styles from "./Searchbar.module.scss";

// const SearchBar = (props) => {
//     const [inputVal, setInputVal] = useState("");
//     // const { search, setSearch } = useContext(SearchContext);
//     const { books, setFilteredBooks } = useContext(BooksContext);

//     const navigate = useNavigate();

//     let location = useLocation();

//     console.log(location, "location");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSearch(inputVal);
//         setInputVal([]);
//     };

//     const handleChange = (e) => {
//         console.log(e.target.value);
//         setInputVal(e.target.value);
//     };

//     console.log(search, "search");

//     const handleClick = () => {
//         setFilteredBooks(books);
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input className={styles.Search} type="text" onChange={handleChange} />
//                 <input type="submit" value="Search" />
//             </form>
   
//         </div>
//     );
// };

// export default SearchBar;
