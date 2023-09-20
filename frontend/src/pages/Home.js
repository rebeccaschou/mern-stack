// import { useEffect, useState } from "react";
import { useEffect } from "react";
import { useBooksContext } from "../hooks/useBooksContext";

// components
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";

const Home = () => {
  const { books, dispatch } = useBooksContext();
  // const [order, setOrder] = useState();

  const changeOrder = (event) => {
    // setOrder(event.target.value);
    const sortedShelf = orderBooks(books, event.target.value);
    dispatch({ type: "SET_BOOKS", payload: sortedShelf });
  };

  const orderBooks = (shelf, order) => {
    switch (order) {
      case "date":
        return shelf.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
      case "rating":
        return shelf.sort((a, b) => (a.rating > b.rating ? -1 : 1));
      default:
        return shelf.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
    }
  };

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
      <div className="home-upper">
        <label>
          Sort Bookshelf by:
          <select className="order-select" onChange={changeOrder}>
            <option value="date">Date Added</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>
      <div className="home-lower">
        <div className="books">
          {books &&
            books.map((book) => <BookDetails key={book._id} book={book} />)}
        </div>
        <BookForm />
      </div>
    </div>
  );
};

export default Home;
