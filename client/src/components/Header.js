import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-red-500 text-white p-4 sticky top-0 font-bold">
      <div className="container mx-auto mt-2 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">Library Management System</h1>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li className="text-lg">
              <Link
                to="/books"
                className="text-white hover:text-black hover:font-bold transition duration-300"
              >
                Books
              </Link>
            </li>
            <li className="text-lg">
              <Link
                to="/members"
                className="text-white hover:text-black hover:font-bold transition duration-300"
              >
                Members
              </Link>
            </li>
            <li className="text-lg">
              <Link
                to="/import-books"
                className="text-white hover:text-black hover:font-bold transition duration-300"
              >
                Import Books
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
