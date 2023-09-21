import { useBooksContext } from "../hooks/useBooksContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const BookDetails = ({ book }) => {
  const { dispatch } = useBooksContext();

  const handleLoan = async () => {
    const title = book.title;
    const author = book.author;
    const description = book.description;
    const rating = book.rating;

    const updatedBook = { title, author, description, rating, loaned: true };
    const response = await fetch("/api/books/" + book._id, {
      method: "PATCH",
      body: JSON.stringify(updatedBook),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (response.ok) {
      console.log("Book loaned!", json);
      dispatch({ type: "LOAN_BOOK", payload: json });
    }
  };

  const handleDelete = async () => {
    const response = await fetch("/api/books/" + book._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_BOOK", payload: json });
    }
  };

  return (
    <div className="book-details">
      <h4>{book.title}</h4>
      <p>
        <strong>Author: </strong>
        {book.author}
      </p>
      <p>
        <strong>Description: </strong>
        {book.description}
      </p>
      <p>
        <strong>Rating: </strong>
        {book.rating}/5
      </p>
      <p>
        {formatDistanceToNow(new Date(book.createdAt), { addSuffix: true })}
      </p>
      <div className="book-details-buttons">
        <span className="loan-button" onClick={handleLoan}>
          Loan
        </span>
        <span className="delete-button" onClick={handleDelete}>
          Delete
        </span>
      </div>
    </div>
  );
};

export default BookDetails;
