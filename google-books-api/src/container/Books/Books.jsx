import BookCard from "../../Component/BookCard/BookCard";
import { SearchContext } from "../../Component/context/SearchProvider";
import styles from "./Books.module.scss";
import { useContext, useEffect, useState } from "react";

const SearchEngine = ({ book }) => {
  const { search, setSearch } = useContext(SearchContext);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const getBooks = async (searchTerm) => {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=10`); 

      const data = await response.json();

      setBooks(data.items);
  };

  useEffect(() => {
    getBooks();
  }, []);

  useEffect (() => {
     const filtered = books.filter((b) => 
     `${b.volumeInfo.title}`.toLowerCase().includes(search.toLowerCase())
     );

     setFilteredBooks(filtered || []);
  }, [search]);


  return (
    <div>
      {books.length === 0 ? <p>Loading... </p> : filteredBooks.map((book) => {
        return <BookCard  
        key={`${book?.id}`}
        img={`${book.volumeInfo.imageLinks.smallThumbnail}`}
        title={`${book.volumeInfo.title}`}
        authors={`${book.volumeInfo?.authors ?? 'Not Known'}`}
        id = {`${book.id}`}
        /> 
      })} 
    </div>
    
  ) 
}

export default SearchEngine