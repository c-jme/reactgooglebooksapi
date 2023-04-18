import BookCard from "../../Component/BookCard/BookCard";
import { BooksContext } from "../../Component/context/CreateBooks";
import { SearchContext } from "../../Component/context/SearchProvider";
import styles from "./Books.module.scss";
import { useContext, useEffect } from "react";

const BookEngine = ({ book }) => {
  const { search, setSearch } = useContext(SearchContext);
  const {books, setBooks} = useContext(BooksContext);

  const getBooks = async (searchTerm) => {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=12`); 

      const data = await response.json();

      setBooks(data.items);
  };

  useEffect(() => {
    getBooks(search);
  }, [search]);

  return (
    <div className={styles.BookDisplay}>
      {!books ? <p>Loading... </p> : books.map((book) => {
        return <BookCard  
        key={`${book?.id}`}
        img={`${book?.volumeInfo.imageLinks.thumbnail ?? 'No Image'}`}
        title={`${book.volumeInfo.title}`}
        authors={`${book.volumeInfo?.authors ?? 'Not Known'}`}
        id = {`${book.id}`}
        /> 
      })} 
    </div>
    
  ) 
}

export default BookEngine