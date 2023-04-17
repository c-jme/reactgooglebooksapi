import { NavLink } from "react-router-dom"
import styles from "./BookCard.module.scss"

const BookCard = ({ title, img, authors, id }) => {
  return (
    <NavLink to={`/results/${id}`}>
      <div className={styles.Card}>
        <img src={img} alt="image of bookcover" />
        <h4>{title}</h4>
        <p>by {authors}</p>
      </div>
    </NavLink>
  )
}


export default BookCard