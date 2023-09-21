import { useEffect } from "react";
import { useBooksContext } from "../hooks/useBooksContext";

// components
import BookDetails from "../components/BookDetails";

const Loans = () => {
  const { books, dispatch } = useBooksContext();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/books");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BOOKS", payload: json });
      }
    };

    fetchBooks();
  }, [dispatch]);

  return (
    <div className="Home">
      <h2>Manage Loans</h2>
      <p>Keep track of the books you've lent to friends!</p>
      <div className="books">
        {books &&
          books
            .filter((book) => book.loaned)
            .map((book) => <BookDetails key={book._id} book={book} />)}
      </div>
    </div>
  );
};

export default Loans;
