// import { Link } from "react-router-dom";
import { useState } from "react";
// import { Button } from "@chakra-ui/react";

const Navbar = () => {
  const [newBookDialog, setNewBookDialog] = useState(false);

  return (
    <header>
      <div className="container">
        {/* <Link to="/">
          <h1>Bookshelf</h1>
        </Link> */}
        <h1>Bookshelf</h1>
        <button onClick={() => setNewBookDialog(true)}>New</button>
      </div>
    </header>
  );
};

export default Navbar;
