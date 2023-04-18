import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BooksContext } from "../../Component/context/CreateBooks";
import styles from "./Modal.module.scss";

const Modal = () => {
  const { books, setBooks } = useContext(BooksContext);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const foundBook = books.find((book) =>
      book.id === id);

      if (foundBook) {
        setBook(foundBook);
      }
  }, [books])
  console.log(book)

  const handleClick = () => {
    navigate("/");
  }

  return book ?
    <div className={styles.Modal}>
      <button className={styles.Modal_Btn} onClick={handleClick}>Back to Home</button>
      <h4>Title: <br />
      {book.volumeInfo.title}</h4>
      <img className={styles.Modal_Img} src={`${book?.volumeInfo.imageLinks.smallThumbnail ?? 'No Image'}`} alt="book cover"/>
      <p>Description:
        <p className={styles.Modal_Para}>{book?.volumeInfo.description ?? 'No Description Found'}</p>
      </p>
      <p className={styles.Modal_ParaTitle}>Authors:
        <p className={styles.Modal_Para}>{book?.volumeInfo.authors ?? 'No Authors'}</p>
      </p>
      <p className={styles.Modal_ParaTitle}>Published: 
        <p className={styles.Modal_Para}>{book?.volumeInfo.publishedDate ?? 'Publishing date is not known'}</p>
      </p>
      <p className={styles.Modal_ParaTitle}>Languages:
        <p classname={styles.Modal_Para}>{book?.volumeInfo.language ?? 'Languages are not known'}</p>
      </p>

    </div>
    : 
    <div>
      <p>No Info</p>
      <button onClick={handleClick}>Back to Search</button>
    </div>

  
}

export default Modal