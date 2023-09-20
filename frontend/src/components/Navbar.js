import { Link } from "react-router-dom";
// import { useState } from "react";

const Navbar = () => {
  // const [newBookDialog, setNewBookDialog] = useState(false);

  return (
    <header>
      <div className="container">
        <Link to="/" className="navbar-logo">
          <h1>Bookshelf</h1>
        </Link>
        {/* <h1>Bookshelf</h1> */}
        {/* <button onClick={() => setNewBookDialog(true)}>New</button> */}
        <div className="navbar-right">
          <ul className="navbar-items">
            <li>
              <Link to="/loans" className="navbar-link">
                Manage Loans
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
