import { useState } from "react";
import { useParams } from "react-router-dom";

const Modal = ({title, img, authors, description, preview, books}) => {

  const [book, setBook] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const foundBook = books.find((book) =>
      book.cell === id);

      if (foundBook) {
        setBook(foundBook);
      }
  }, [books])
  return (
    <div>
      <h4>{title}</h4>
      <img src={img} alt="" />
      <p>{authors}</p>
      <p>{description}</p>
      <p>{preview}</p>
    </div>
  )
}

export default Modal